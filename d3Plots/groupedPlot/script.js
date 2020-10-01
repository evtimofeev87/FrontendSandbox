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
        value: 70,
        color: '#a05d56',
      },
      {
        value: 90,
        color: '#d0743c',
      },
      {
        value: 80,
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

let svgWidth = 960;
let svgHeight = 500;

let marginLeft = 150;
let marginRight = 0;
let marginTop = 20;
let marginBottom = 20;

let canvasWidth = svgWidth - marginLeft - marginRight;
let canvasHeight = svgHeight - marginTop - marginBottom;

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

let clip = svg
  .append('clipPath')
  .attr('id', 'clip')
  .append('rect')
  // .attr('x', marginLeft)
  // .attr('y', marginTop)
  .attr('width', canvasWidth)
  .attr('height', canvasHeight);
// .attr('transform', `translate(${marginLeft},${marginTop})`)

let canvas = svg
  .append('g')
  .attr('id', 'canvas')
  .attr('width', canvasWidth)
  .attr('height', canvasHeight)
  .attr('transform', `translate(${marginLeft},${marginTop})`)
  .attr('clip-path', 'url(#clip)');

let x1Scale = d3
  .scaleTime()
  .domain([new Date('2020-01-01'), new Date('2020-04-01')])
  .nice()
  .range([0, canvasWidth])

let x2Scale = d3.scaleBand().domain(keys).rangeRound([0, groupWIdth]).padding(0.3);

let yScale = d3.scaleLinear().domain([0, 100]).range([canvasHeight, 0]);

let xAxis = d3.axisBottom(x1Scale).ticks(d3.timeDay.filter((d) => d.getDate() === 1));

let yAxis = d3.axisLeft(yScale);

let xAxisScale = svg
  .append('g')
  .attr('transform', `translate(${marginLeft},${canvasHeight + marginTop})`)
  .call(xAxis);

let yAxisScale = svg.append('g').attr('transform', `translate(${marginLeft},${marginBottom})`).call(yAxis);

let barGroups = canvas
  .selectAll('g.bar-group')
  .data(data)
  // .enter()
  .enter()
  .append('g')

  .attr('class', 'bar-group')

  .attr('width', groupWIdth)
  .attr('height', canvasHeight)

  .attr('transform', (d) => `translate(${x1Scale(new Date(d.date)) - groupWIdth / 2},0)`)

  .style('fill', '#0071EB')
  .style('stroke', '#0071EB')
  .attr('y', 0);

let bars = barGroups
  .selectAll('rect')
  .data((d) => d.values)
  .enter()
  .append('rect')
  .attr('x', (d) => x2Scale(d.color))
  .attr('y', (d) => yScale(d.value))
  .attr('width', x2Scale.bandwidth())
  .attr('height', (d) => yScale(0) + 10 - yScale(d.value))
  .attr('stroke', (d) => d.color)
  .attr('fill', (d) => d.color)
  .attr('rx', 5)
  .attr('ry', 5)
  // .attr('y', yScale(0))
  // .transition()
  // .duration(800)
  // .delay((d, i) => i * 200)
  .attr('y', (d) => yScale(d.value));
