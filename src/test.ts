import { Pie } from './pie'

window.addEventListener('load', () => {
  const pie = Pie({
    target: '.pie-container',
    segments: [
      { percent: 55, color: '#05a790', legend: 'Red [%]' },
      { percent: 20, color: '#13c1a9', legend: 'Green [%]' },
      { percent: 10, color: '#27dac1' },
      { percent: 10, color: '#3dead2' },
      { percent: 5, color: '#54f5de' },
    ],
  })
})
