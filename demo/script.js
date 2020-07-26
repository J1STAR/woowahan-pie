import { Pie } from 'woowahan-pie'

window.addEventListener('load', () => {
  const pie = Pie({
    target: '.pie-container',
    segments: [
      { percent: 65, color: '#05a790', legend: 'Water [%]' },
      { percent: 16, color: '#13c1a9', legend: 'Protein [%]' },
      { percent: 14, color: '#27dac1', legend: 'Fat [%]' },
      { percent: 5, color: '#3dead2', legend: 'Mineral [%]' },
    ],
  })
})
