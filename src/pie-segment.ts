type PieSegmentOptions = {
  offset: number
  percent: number
  color: string
  legend?: string
}

export class PieSegment {
  private segmentElm: HTMLDivElement
  private legendElm: HTMLLabelElement
  private bodyClipElm: HTMLDivElement
  private bodyFillElm: HTMLDivElement
  private prependClipElm: HTMLDivElement
  private prependFillElm: HTMLDivElement
  private appendClipElm: HTMLDivElement
  private appendFillElm: HTMLDivElement
  private offset: number
  private percent: number

  constructor(options: PieSegmentOptions) {
    const { offset, percent, color, legend } = options

    this.offset = offset
    this.percent = percent

    this.createSegmentElm(legend)
    this.setOffset(offset)
    this.setPercent(percent)
    this.setColor(color)
  }

  private createSegmentElm(legend?: string) {
    const html = `
<div class="pie-segment">
  <div class="body-clip">
    <div class="fill"></div>
    <div class="prepend-clip">
      <div class="fill"></div>
    </div>
  </div>
  <div class="append-clip">
    <div class="fill"></div>
  </div>
</div>
${
  legend &&
  `
<div class="legend-helper">
  <label class="legend">${legend.replace('[%]', `${this.percent}%`)}</label>
</div>
`
}
`

    const parsed = new DOMParser().parseFromString(html, 'text/html').body

    this.segmentElm = parsed.firstElementChild as HTMLDivElement
    this.legendElm = this.segmentElm.nextElementSibling as HTMLLabelElement

    this.bodyClipElm = this.segmentElm.querySelector<HTMLDivElement>(
      '.body-clip'
    )
    this.bodyFillElm = this.segmentElm.querySelector<HTMLDivElement>(
      '.body-clip .fill'
    )
    this.prependClipElm = this.segmentElm.querySelector<HTMLDivElement>(
      '.prepend-clip'
    )
    this.prependFillElm = this.segmentElm.querySelector<HTMLDivElement>(
      '.append-clip .fill'
    )
    this.appendClipElm = this.segmentElm.querySelector<HTMLDivElement>(
      '.append-clip'
    )
    this.appendFillElm = this.segmentElm.querySelector<HTMLDivElement>(
      '.append-clip .fill'
    )
  }

  public getElms() {
    const frag = document.createDocumentFragment()

    frag.appendChild(this.segmentElm)
    this.legendElm && frag.appendChild(this.legendElm)

    return frag
  }

  public getSegementElm() {
    return this.segmentElm
  }

  private setOffset(percent: number) {
    this.offset = Math.min(percent, 100)

    const { segmentElm } = this

    setTimeout(() => {
      segmentElm.style.transform = `rotate(${percent * 3.6}deg)`
    }, 0)
  }

  private setPercent(percent: number) {
    const degree = percent * 3.6

    if (degree > 180) {
      if (degree < 360) {
        this.prependClipElm.style.transform = `translateX(-100%) rotate(calc((var(--degree) - 180 + 10) * 1deg))`
      }

      this.segmentElm.classList.add('more-than-fifty')
    } else {
      this.segmentElm.classList.remove('more-than-fifty')
    }

    this.segmentElm.style.setProperty('--degree', degree.toString())

    this.legendElm &&
      this.legendElm.style.setProperty(
        '--degree',
        (degree / 2 + this.offset * 3.6).toString()
      )
    setTimeout(() => {
      this.segmentElm.classList.add('animate')
    }, 0)
  }

  private setColor(color: string) {
    this.segmentElm.style.setProperty('--color', color)
  }

  public getPercent() {
    return this.percent
  }
}
