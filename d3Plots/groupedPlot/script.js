// let data = window.byDay;

keys = ['#a05d56', '#d0743c', '#ff8c00'];

let data = [
  {
    date: '2020-01-01',
    values: [
      {
        value: 50,
        color: '#a05d56',
      },
      {
        value: 60,
        color: '#d0743c',
      },
      {
        value: 20,
        color: '#ff8c00',
      },
    ],
  },
  {
    date: '2020-02-01',
    values: [
      {
        value: 20,
        color: '#a05d56',
      },
      {
        value: 90,
        color: '#d0743c',
      },
      {
        value: 30,
        color: '#ff8c00',
      },
    ],
  },
  {
    date: '2020-03-01',
    values: [
      {
        value: 75,
        color: '#a05d56',
      },
      {
        value: 10,
        color: '#d0743c',
      },
      {
        value: 65,
        color: '#ff8c00',
      },
    ],
  },
  {
    date: '2020-04-01',
    values: [
      {
        value: 65,
        color: '#a05d56',
      },
      {
        value: 25,
        color: '#d0743c',
      },
      {
        value: 15,
        color: '#ff8c00',
      },
    ],
  },
];

let canvasWidth = 900;
let canvasHeight = 500;

let groupWIdth = 160;

// let absoluteKeys = [
//   "sentComputed",
//   "deliveredComputed",
//   "notSentComputed",
//   "openedComputed",
//   "clickedComputed",
//   "unsubscribedComputed",
//   "complainedComputed",
// ];
// let percentKeys = [
//   "deliveryRate",
//   "bounceRate",
//   "openRate",
//   "clickToOpenRate",
//   "unsubscribeRate",
//   "spamRate",
// ];

// let numbers = data.reduce(
//   (accumulator, item) => {
//     let abs = [];
//     let perc = [];
//     for (let field in item) {
//       if (absoluteKeys.includes(field)) {
//         abs.push(item[field]);
//       } else if (percentKeys.includes(field)) {
//         perc.push(item[field]);
//       }
//     }
//     return {
//       absolute: [...abs, ...accumulator.absolute],
//       percent: [...perc, ...accumulator.percent],
//     };
//   },
//   { absolute: [], percent: [] }
// );

let svg = d3.select('svg');

let canvas = svg.append('g').attr('id', 'canvas').attr('width', canvasWidth).attr('height', canvasHeight);

yHeight = canvasHeight - 20;

let x1Scale = d3
  .scaleTime()
  .domain([new Date('2020-01-01'), new Date('2020-04-01')])
  .nice()
  .range([20, canvasWidth - 50]);

let x2Scale = d3.scaleBand().domain(keys).rangeRound([0, groupWIdth]);

let yScale = d3.scaleLinear().domain([0, 100]).range([yHeight, 0]);

let xAxis = d3.axisBottom(x1Scale).ticks(d3.timeDay.filter((d) => d.getDate() === 1));

canvas
  .append('g')
  .attr('transform', 'translate(0,' + yHeight + ')')
  .call(xAxis)
  .append('text')
  // .attr("y", 20)
  // .attr("x", canvasWidth)
  .attr('text-anchor', 'end')
  .attr('stroke', 'black')
  .text('Year');

let barGroups = canvas
  .selectAll('g.bar-group')
  .data(data)
  // .enter()
  .enter()
  .append('g')

  .attr('class', 'bar-group')

  .attr('width', groupWIdth)
  .attr('height', yHeight)

  .attr('transform', (d) => `translate(${x1Scale(new Date(d.date)) - groupWIdth / 2},0)`)

  .style('fill', '#0071EB')
  .style('stroke', '#0071EB')
  // .attr("rx", 5)
  // .attr("ry", 5)
  .attr('y', 0);

let bars = barGroups
  .selectAll('rect')
  .data((d) => d.values)
  .enter()
  .append('rect')
  .attr('x', (d) => x2Scale(d.color))
  .attr('y', (d) => yScale(d.value))
  .attr('width', x2Scale.bandwidth())
  .attr('height', (d) => yScale(0) - yScale(d.value))
  .attr('fill', (d) => d.color);

// let bar =
// .transition()
// .duration(800)
// .attr("y", (d) => yScale(d.value))
