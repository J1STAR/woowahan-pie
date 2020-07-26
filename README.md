<h1 align="center">Woowahan Pie</h1>

<p align="center">
  <img src="https://user-images.githubusercontent.com/19797697/88479003-4e55c580-cf87-11ea-86d6-5da8ff39a025.gif" width="1000" />
</p>

<h3 align="center">A simple Pie Chart Generator</h3>

<p align="center"><b>Woowahan Pie</b> helps you easily create a simple yet elegant pie chart just in a second.</p>
<p align="center">This library aims to intentionally leverage the power of CSS and DOM API provided by the browsers natively.</p>

---

## Installation

```zsh
> npm install woowahan-pie
```

### Usage (example above)

```js
import { Pie } from 'woowahan-pie'

const pie = Pie({
  target: '.pie-container',
  segments: [
    { percent: 65, color: '#05a790', legend: 'Water [%]' },
    { percent: 16, color: '#13c1a9', legend: 'Protein [%]' },
    { percent: 14, color: '#27dac1', legend: 'Fat [%]' },
    { percent: 5, color: '#3dead2', legend: 'Mineral [%]' },
  ],
})
```

---

## API

### `Pie(PieOptions)`

The **Pie** function accepts pie options then returns a pie instance.

### Options

**`target`**

A target element for a pie chart to be mounted. You can just give a **selector string**.

```js
const pieContainer = document.querySelector('.pie-container')

Pie({
  target: pieContainer,
})
```

or

```js
Pie({
  target: '.pie-container',
})
```

**`segments`**

An array of pie segments defined by some segment options.

| Key       | Type     | Description                                                                                                |
| --------- | -------- | ---------------------------------------------------------------------------------------------------------- |
| `percent` | `number` | The proportion of a segmentation. Max is 100.                                                              |
| `color`   | `string` | The color of the segment in hexadecimal, `rgba()` or any color values accepted by CSS rules.               |
| `legend?` | `string` | (Optional) The name or label of the segment. Use `[%]` inside a legend as a placeholder of the percentage. |

---

## ToDo

- [x] Custom size
- [ ] Display legend on hover (add an option)

## License

MIT License

Copyright (c) 2020 [jhaemin](https://github.com/jhaemin)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
