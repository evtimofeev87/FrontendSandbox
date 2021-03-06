// let data = window.byDay;

let data = [
  {
    date: '2020-01-01',
    value: 20
  },
  {
    date: '2020-02-01',
    value: 30
  },
  {
    date: '2020-03-01',
    value: 40
  },
  {
    date: '2020-04-01',
    value: 50
  },
];

let canvasWidth = 900;
let canvasHeight = 500;

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


let svg = d3.select("svg");

let canvas = svg
  .append("g")
  .attr("id", "canvas")
  .attr("width", canvasWidth)
  .attr("height", canvasHeight);


yHeight = canvasHeight - 20

let xScale = d3
  .scaleTime()
  .domain([new Date("2020-01-01"), new Date("2020-04-01")]).nice()
  .range([20, canvasWidth-50]);



let yScale = d3
  .scaleLinear()
  .domain([0, 100])
  .range([0, yHeight]);

let xAxis = d3.axisBottom(xScale).ticks(d3.timeDay.filter( d => d.getDate() === 1));



  canvas.append("g")
  .attr("transform", "translate(0," + (yHeight) + ")")
  .call(xAxis)
  .append("text")
  .attr("y", 20)
  .attr("x", canvasWidth)
  .attr("text-anchor", "end")
  .attr("stroke", "black")
  .text("Year");




let groupWIdth = 80;

let barGroup = canvas
  .selectAll(".bar-group")
  .data(data)
  // .enter()
  .enter()
  .append('rect')
  
  .attr("class", "bar-group")


  .attr("width", groupWIdth)
  .attr("height", (d) => yHeight + 20 - yScale(d.value))

  .attr("x", (d) => xScale(new Date(d.date)))
  
  .style("fill", "#0071EB")
  .style("stroke", "#0071EB")
  .attr("rx", 5)
  .attr("ry", 5)
  .attr("y", yHeight)
  .transition()
  .duration(800)
  .attr("y", (d) => yScale(d.value))
