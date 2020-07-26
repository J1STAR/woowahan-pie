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

- [ ] Custom size
- [ ] Display legend on hover (add an option)
