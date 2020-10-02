var data =
  '[{"date":"Jan 2000","price":"1394.46"},{"date":"Feb 2000","price":"1366.42"},{"date":"Mar 2000","price":"1498.58"},{"date":"Apr 2000","price":"1452.43"},{"date":"May 2000","price":"1420.6"},{"date":"Jun 2000","price":"1454.6"},{"date":"Jul 2000","price":"1430.83"},{"date":"Aug 2000","price":"1517.68"},{"date":"Sep 2000","price":"1436.51"},{"date":"Oct 2000","price":"1429.4"},{"date":"Nov 2000","price":"1314.95"},{"date":"Dec 2000","price":"1320.28"},{"date":"Jan 2001","price":"1366.01"},{"date":"Feb 2001","price":"1239.94"},{"date":"Mar 2001","price":"1160.33"},{"date":"Apr 2001","price":"1249.46"},{"date":"May 2001","price":"1255.82"},{"date":"Jun 2001","price":"1224.38"},{"date":"Jul 2001","price":"1211.23"},{"date":"Aug 2001","price":"1133.58"},{"date":"Sep 2001","price":"1040.94"},{"date":"Oct 2001","price":"1059.78"},{"date":"Nov 2001","price":"1139.45"},{"date":"Dec 2001","price":"1148.08"},{"date":"Jan 2002","price":"1130.2"},{"date":"Feb 2002","price":"1106.73"},{"date":"Mar 2002","price":"1147.39"},{"date":"Apr 2002","price":"1076.92"},{"date":"May 2002","price":"1067.14"},{"date":"Jun 2002","price":"989.82"},{"date":"Jul 2002","price":"911.62"},{"date":"Aug 2002","price":"916.07"},{"date":"Sep 2002","price":"815.28"},{"date":"Oct 2002","price":"885.76"},{"date":"Nov 2002","price":"936.31"},{"date":"Dec 2002","price":"879.82"},{"date":"Jan 2003","price":"855.7"},{"date":"Feb 2003","price":"841.15"},{"date":"Mar 2003","price":"848.18"},{"date":"Apr 2003","price":"916.92"},{"date":"May 2003","price":"963.59"},{"date":"Jun 2003","price":"974.5"},{"date":"Jul 2003","price":"990.31"},{"date":"Aug 2003","price":"1008.01"},{"date":"Sep 2003","price":"995.97"},{"date":"Oct 2003","price":"1050.71"},{"date":"Nov 2003","price":"1058.2"},{"date":"Dec 2003","price":"1111.92"},{"date":"Jan 2004","price":"1131.13"},{"date":"Feb 2004","price":"1144.94"},{"date":"Mar 2004","price":"1126.21"},{"date":"Apr 2004","price":"1107.3"},{"date":"May 2004","price":"1120.68"},{"date":"Jun 2004","price":"1140.84"},{"date":"Jul 2004","price":"1101.72"},{"date":"Aug 2004","price":"1104.24"},{"date":"Sep 2004","price":"1114.58"},{"date":"Oct 2004","price":"1130.2"},{"date":"Nov 2004","price":"1173.82"},{"date":"Dec 2004","price":"1211.92"},{"date":"Jan 2005","price":"1181.27"},{"date":"Feb 2005","price":"1203.6"},{"date":"Mar 2005","price":"1180.59"},{"date":"Apr 2005","price":"1156.85"},{"date":"May 2005","price":"1191.5"},{"date":"Jun 2005","price":"1191.33"},{"date":"Jul 2005","price":"1234.18"},{"date":"Aug 2005","price":"1220.33"},{"date":"Sep 2005","price":"1228.81"},{"date":"Oct 2005","price":"1207.01"},{"date":"Nov 2005","price":"1249.48"},{"date":"Dec 2005","price":"1248.29"},{"date":"Jan 2006","price":"1280.08"},{"date":"Feb 2006","price":"1280.66"},{"date":"Mar 2006","price":"1294.87"},{"date":"Apr 2006","price":"1310.61"},{"date":"May 2006","price":"1270.09"},{"date":"Jun 2006","price":"1270.2"},{"date":"Jul 2006","price":"1276.66"},{"date":"Aug 2006","price":"1303.82"},{"date":"Sep 2006","price":"1335.85"},{"date":"Oct 2006","price":"1377.94"},{"date":"Nov 2006","price":"1400.63"},{"date":"Dec 2006","price":"1418.3"},{"date":"Jan 2007","price":"1438.24"},{"date":"Feb 2007","price":"1406.82"},{"date":"Mar 2007","price":"1420.86"},{"date":"Apr 2007","price":"1482.37"},{"date":"May 2007","price":"1530.62"},{"date":"Jun 2007","price":"1503.35"},{"date":"Jul 2007","price":"1455.27"},{"date":"Aug 2007","price":"1473.99"},{"date":"Sep 2007","price":"1526.75"},{"date":"Oct 2007","price":"1549.38"},{"date":"Nov 2007","price":"1481.14"},{"date":"Dec 2007","price":"1468.36"},{"date":"Jan 2008","price":"1378.55"},{"date":"Feb 2008","price":"1330.63"},{"date":"Mar 2008","price":"1322.7"},{"date":"Apr 2008","price":"1385.59"},{"date":"May 2008","price":"1400.38"},{"date":"Jun 2008","price":"1280"},{"date":"Jul 2008","price":"1267.38"},{"date":"Aug 2008","price":"1282.83"},{"date":"Sep 2008","price":"1166.36"},{"date":"Oct 2008","price":"968.75"},{"date":"Nov 2008","price":"896.24"},{"date":"Dec 2008","price":"903.25"},{"date":"Jan 2009","price":"825.88"},{"date":"Feb 2009","price":"735.09"},{"date":"Mar 2009","price":"797.87"},{"date":"Apr 2009","price":"872.81"},{"date":"May 2009","price":"919.14"},{"date":"Jun 2009","price":"919.32"},{"date":"Jul 2009","price":"987.48"},{"date":"Aug 2009","price":"1020.62"},{"date":"Sep 2009","price":"1057.08"},{"date":"Oct 2009","price":"1036.19"},{"date":"Nov 2009","price":"1095.63"},{"date":"Dec 2009","price":"1115.1"},{"date":"Jan 2010","price":"1073.87"},{"date":"Feb 2010","price":"1104.49"},{"date":"Mar 2010","price":"1140.45"}]';

data = JSON.parse(data);
var margin = {
    top: 10,
    right: 10,
    bottom: 100,
    left: 40,
  },
  margin2 = {
    top: 430,
    right: 10,
    bottom: 20,
    left: 40,
  },
  width = 960 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom,
  height2 = 500 - margin2.top - margin2.bottom;

var parseDate = d3.time.format('%b %Y').parse;

var x = d3.time
    .scale()
    .domain([new Date(data[0].date), new Date(data[2].date)])
    .range([0, width]),
  x2 = d3.time
    .scale()
    .domain([new Date(data[0].date), new Date(data[2].date)])
    .range([0, width]),
  y = d3.scale.linear().range([height, 0]),
  y2 = d3.scale.linear().range([height2, 0]);

var xAxis = d3.svg.axis().scale(x).orient('bottom'),
  xAxis2 = d3.svg.axis().scale(x2).orient('bottom'),
  yAxis = d3.svg.axis().scale(y).orient('left');

var brush = d3.svg.brush().x(x2);
// .on("brush", brushed)
// .on('brushend', brushend);

var area2 = d3.svg
  .area()
  .interpolate('monotone')
  .x(function (d) {
    return x2(d.date);
  })
  .y0(height2)
  .y1(function (d) {
    return y2(d.price);
  });

var svg = d3
  .select('body')
  .append('svg')
  .attr('id', 'shd_context')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom);

svg
  .append('defs')
  .append('clipPath')
  .attr('id', 'clip')
  .append('rect')
  .attr('class', 'hello')
  .attr('width', width)
  .attr('height', height);

var context = svg
  .append('g')
  .attr('class', 'context')
  .attr('transform', 'translate(' + margin2.left + ',' + 150 + ')');

var data =
  '[{"date":"Jan 2000","price":"1394.46"},{"date":"Feb 2000","price":"1366.42"},{"date":"Mar 2000","price":"1498.58"},{"date":"Apr 2000","price":"1452.43"},{"date":"May 2000","price":"1420.6"},{"date":"Jun 2000","price":"1454.6"},{"date":"Jul 2000","price":"1430.83"},{"date":"Aug 2000","price":"1517.68"},{"date":"Sep 2000","price":"1436.51"},{"date":"Oct 2000","price":"1429.4"},{"date":"Nov 2000","price":"1314.95"},{"date":"Dec 2000","price":"1320.28"},{"date":"Jan 2001","price":"1366.01"},{"date":"Feb 2001","price":"1239.94"},{"date":"Mar 2001","price":"1160.33"},{"date":"Apr 2001","price":"1249.46"},{"date":"May 2001","price":"1255.82"},{"date":"Jun 2001","price":"1224.38"},{"date":"Jul 2001","price":"1211.23"},{"date":"Aug 2001","price":"1133.58"},{"date":"Sep 2001","price":"1040.94"},{"date":"Oct 2001","price":"1059.78"},{"date":"Nov 2001","price":"1139.45"},{"date":"Dec 2001","price":"1148.08"},{"date":"Jan 2002","price":"1130.2"},{"date":"Feb 2002","price":"1106.73"},{"date":"Mar 2002","price":"1147.39"},{"date":"Apr 2002","price":"1076.92"},{"date":"May 2002","price":"1067.14"},{"date":"Jun 2002","price":"989.82"},{"date":"Jul 2002","price":"911.62"},{"date":"Aug 2002","price":"916.07"},{"date":"Sep 2002","price":"815.28"},{"date":"Oct 2002","price":"885.76"},{"date":"Nov 2002","price":"936.31"},{"date":"Dec 2002","price":"879.82"},{"date":"Jan 2003","price":"855.7"},{"date":"Feb 2003","price":"841.15"},{"date":"Mar 2003","price":"848.18"},{"date":"Apr 2003","price":"916.92"},{"date":"May 2003","price":"963.59"},{"date":"Jun 2003","price":"974.5"},{"date":"Jul 2003","price":"990.31"},{"date":"Aug 2003","price":"1008.01"},{"date":"Sep 2003","price":"995.97"},{"date":"Oct 2003","price":"1050.71"},{"date":"Nov 2003","price":"1058.2"},{"date":"Dec 2003","price":"1111.92"},{"date":"Jan 2004","price":"1131.13"},{"date":"Feb 2004","price":"1144.94"},{"date":"Mar 2004","price":"1126.21"},{"date":"Apr 2004","price":"1107.3"},{"date":"May 2004","price":"1120.68"},{"date":"Jun 2004","price":"1140.84"},{"date":"Jul 2004","price":"1101.72"},{"date":"Aug 2004","price":"1104.24"},{"date":"Sep 2004","price":"1114.58"},{"date":"Oct 2004","price":"1130.2"},{"date":"Nov 2004","price":"1173.82"},{"date":"Dec 2004","price":"1211.92"},{"date":"Jan 2005","price":"1181.27"},{"date":"Feb 2005","price":"1203.6"},{"date":"Mar 2005","price":"1180.59"},{"date":"Apr 2005","price":"1156.85"},{"date":"May 2005","price":"1191.5"},{"date":"Jun 2005","price":"1191.33"},{"date":"Jul 2005","price":"1234.18"},{"date":"Aug 2005","price":"1220.33"},{"date":"Sep 2005","price":"1228.81"},{"date":"Oct 2005","price":"1207.01"},{"date":"Nov 2005","price":"1249.48"},{"date":"Dec 2005","price":"1248.29"},{"date":"Jan 2006","price":"1280.08"},{"date":"Feb 2006","price":"1280.66"},{"date":"Mar 2006","price":"1294.87"},{"date":"Apr 2006","price":"1310.61"},{"date":"May 2006","price":"1270.09"},{"date":"Jun 2006","price":"1270.2"},{"date":"Jul 2006","price":"1276.66"},{"date":"Aug 2006","price":"1303.82"},{"date":"Sep 2006","price":"1335.85"},{"date":"Oct 2006","price":"1377.94"},{"date":"Nov 2006","price":"1400.63"},{"date":"Dec 2006","price":"1418.3"},{"date":"Jan 2007","price":"1438.24"},{"date":"Feb 2007","price":"1406.82"},{"date":"Mar 2007","price":"1420.86"},{"date":"Apr 2007","price":"1482.37"},{"date":"May 2007","price":"1530.62"},{"date":"Jun 2007","price":"1503.35"},{"date":"Jul 2007","price":"1455.27"},{"date":"Aug 2007","price":"1473.99"},{"date":"Sep 2007","price":"1526.75"},{"date":"Oct 2007","price":"1549.38"},{"date":"Nov 2007","price":"1481.14"},{"date":"Dec 2007","price":"1468.36"},{"date":"Jan 2008","price":"1378.55"},{"date":"Feb 2008","price":"1330.63"},{"date":"Mar 2008","price":"1322.7"},{"date":"Apr 2008","price":"1385.59"},{"date":"May 2008","price":"1400.38"},{"date":"Jun 2008","price":"1280"},{"date":"Jul 2008","price":"1267.38"},{"date":"Aug 2008","price":"1282.83"},{"date":"Sep 2008","price":"1166.36"},{"date":"Oct 2008","price":"968.75"},{"date":"Nov 2008","price":"896.24"},{"date":"Dec 2008","price":"903.25"},{"date":"Jan 2009","price":"825.88"},{"date":"Feb 2009","price":"735.09"},{"date":"Mar 2009","price":"797.87"},{"date":"Apr 2009","price":"872.81"},{"date":"May 2009","price":"919.14"},{"date":"Jun 2009","price":"919.32"},{"date":"Jul 2009","price":"987.48"},{"date":"Aug 2009","price":"1020.62"},{"date":"Sep 2009","price":"1057.08"},{"date":"Oct 2009","price":"1036.19"},{"date":"Nov 2009","price":"1095.63"},{"date":"Dec 2009","price":"1115.1"},{"date":"Jan 2010","price":"1073.87"},{"date":"Feb 2010","price":"1104.49"},{"date":"Mar 2010","price":"1140.45"}]';

data = JSON.parse(data).map(type);

x.domain([new Date(data[data.length - 15].date), new Date('2009-11-05')]);
y.domain([
  0,
  d3.max(
    data.map(function (d) {
      return d.price;
    })
  ),
]);
x2.domain(x.domain());
y2.domain(y.domain());

context.append('path').datum(data).attr('class', 'area').attr('d', area2(data));

context
  .append('g')
  .attr('class', 'x axis')
  .attr('transform', 'translate(0,' + height2 + ')')
  .call(xAxis2);

context
  .append('g')
  .attr('class', 'x brush')
  .call(brush)
  .selectAll('rect')
  .attr('y', -6)
  .attr('height', height2 + 7)
  .attr('width', 20)
  .on('mouseover', function (d) {
    d3.select('#tooltip')
      .style('left', d3.select('#shd_context')[0][0].children[1].children[2].children[0].x.animVal.value + 'px')
      .style('top', d3.event.pageY - 125 + 'px')
      .style('opacity', 1)
      .select('#value')
      .html(
        '<p> ' +
          moment(brush.extent()[0]).format('YYYY-MM-DD') +
          ' and <br> ' +
          moment(brush.extent()[1]).format('YYYY-MM-DD') +
          '</p>'
      );
    d3.select('#shd_context')[0][0].children[1].children[2].style.cssText =
      '-webkit-tap-highlight-color: rgba(0, 0, 0, 0);';
  })
  .on('mouseout', function () {
    // Hide the tooltip
    d3.select('#tooltip').style('opacity', 0);
    d3.select('#shd_context')[0][0].children[1].children[2].style.cssText =
      '-webkit-tap-highlight-color: rgba(0, 0, 0, 0);';
  });

var resize = context.select('.brush');
resize.selectAll('.resize').remove();
context.selectAll('.resize');
resize.select('.background').remove();
brush.extent([new Date('2009-09-05'), new Date('2009-10-05')]);
brush(resize);
brush.event(resize);

d3.selectAll('.extent').call(d3.behavior.drag().on('drag', brushed).on('dragend', brushend));
d3.select('#shd_context')[0][0].children[1].children[2].style.cssText =
  '-webkit-tap-highlight-color: rgba(0, 0, 0, 0);';

function brushed() {
  //var s = d3.event.target.extent();
  var brushDomain = brush.extent();
  brush.extent([brushDomain[0], brushDomain[1]]);
  tooltip();
  var domain = x2.domain();
  if (domain[1].getTime() == brushDomain[1].getTime()) {
    nextData();
  } else if (domain[0].getTime() == brushDomain[0].getTime()) {
    previousData();
  }
  d3.select('#shd_context')[0][0].children[1].children[2].style.cssText =
    '-webkit-tap-highlight-color: rgba(0, 0, 0, 0);';
}

//brushend values collected
function brushend() {
  var brushDomain = brush.extent();
  d3.select('#shd_context')[0][0].children[1].children[2].style.cssText =
    '-webkit-tap-highlight-color: rgba(0, 0, 0, 0);';
  d3.select('#tooltip').style('opacity', 0);
  var domain = x2.domain();
  if (domain[1].getTime() == brushDomain[1].getTime()) {
    nextData();
  }
}

function tooltip() {
  d3.select('#tooltip')
    .style('left', d3.select('#shd_context')[0][0].children[1].children[2].children[0].x.animVal.value + 'px')
    .style('top', d3.event.pageY - 125 + 'px')
    .style('opacity', 1)
    .select('#value')
    .html(
      '<p> ' +
        moment(brush.extent()[0]).format('YYYY-MM-DD') +
        ' and <br> ' +
        moment(brush.extent()[1]).format('YYYY-MM-DD') +
        '</p>'
    );
}

function type(d) {
  d.date = parseDate(d.date);
  d.price = +d.price;
  return d;
}
//updating path area, x-axis and domain when the brush moves to future dates direction
function nextData() {
  //updated x domain
  var domain = x2.domain();
  var firstDomain = new Date(domain[0].setDate(domain[0].getDate() + 10));
  var secondDomain = new Date(domain[1].setDate(domain[1].getDate() + 10));
  x2.domain([firstDomain, secondDomain]);
  x.domain([firstDomain, secondDomain]);
  tooltip();
  var svg = d3.select('#shd_context').transition();

  svg.select('.context').select('.area').duration(750).attr('d', area2(data));

  svg.select('.context').select('.x.axis').duration(750).call(xAxis2);

  d3.select('#shd_context')[0][0].children[1].children[2].style.cssText =
    '-webkit-tap-highlight-color: rgba(0, 0, 0, 0);';
}
//updating path area, x-axis and domain when the brush moves into past dates direction
function previousData() {
  //updated x domain
  var domain = x2.domain();
  var firstDomain = new Date(domain[0].setDate(domain[0].getDate() - 10));
  var secondDomain = new Date(domain[1].setDate(domain[1].getDate() - 10));
  x2.domain([firstDomain, secondDomain]);
  x.domain([firstDomain, secondDomain]);
  tooltip();
  var svg = d3.select('#shd_context').transition();

  svg.select('.context').select('.area').duration(750).attr('d', area2(data));

  svg.select('.context').select('.x.axis').duration(750).call(xAxis2);

  d3.select('#shd_context')[0][0].children[1].children[2].style.cssText =
    '-webkit-tap-highlight-color: rgba(0, 0, 0, 0);';
}
