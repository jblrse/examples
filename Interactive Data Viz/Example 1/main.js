var dataset = [5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
                11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];
var w = 600;
var h = 100;
var barPadding = 1;
var svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);
var xScale = d3.scale.ordinal()
                    .domain(d3.range(dataset.length))
                    .rangeRoundBands([0, w - padding], 0.05);
var yScale = d3.scale.linear()
                    .domain([0, d3.max(dataset)])
                    .range([0, h]);
// var xAxis = d3.svg.axis()
//                   .scale(xScale)
//                   .orient("bottom");
// var yAxis = d3.svg.axis()
//                   .scale(yScale)
//                   .orient("left");
var ease = "linear";
var duration = 500;
var padding = 20;

svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr({
        x: function(d, i) { return xScale(i); },
        y: function(d) { return h - yScale(d); },
        width: xScale.rangeBand(),
        height: function(d) { return d * 4; },
        fill: function(d) { return "rgb(0, 0, " + (d * 10) + ")"; }
   });

svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(function (d) {
      return d;
    })
    .attr({
        x: function(d, i) { return xScale(i) + xScale.rangeBand()/2; },
        y: function(d) { return h - yScale(d) + 14; },
    })
    .attr("font-family", "sans-serif")
   .attr("font-size", "11px")
   .attr("fill", "white")
    .attr("text-anchor", "middle");

// //Create x-axis
// svg.append("g")
//     .attr("class", "x axis")    // <-- Note x added here
//     .attr("transform", "translate(0," + (h) + ")")
//     .call(xAxis);

// //Create y-axis
// svg.append("g")
//     .attr("class", "y axis")    // <-- Note y added here
//     .attr("transform", "translate(" + padding + ",0)")
//     .call(yAxis);


d3.selectAll("p")
.on("click", function() {

  var numValues = dataset.length;
  var maxValue = 100;
  dataset = [];
  for(var i = 0; i < numValues; i++) {
    var newNumber = Math.floor(Math.random() * maxValue);
    dataset.push(newNumber);
  }
  yScale.domain([0, d3.max(dataset)]);

  svg.selectAll("rect")
     .data(dataset)
      .transition()
      .delay(function(d, i) { return i/dataset.length*1000; })
      .duration(duration)
      .ease(ease)
     .attr("y", function(d) {
          return h - yScale(d);
     })
     .attr("height", function(d) {
          return yScale(d);
     })
     .attr("fill", function(d) {   // <-- Down here!
          return "rgb(0, 0, " + (d * 10) + ")";
     });

  svg.selectAll("text")
      .data(dataset)
       .transition()
      .delay(function(d, i) { return i/dataset.length*1000; })
      .duration(duration)
      .ease(ease)
      .text(function (d) { return d; })
      .attr("x", function(d, i) { return xScale(i) + xScale.rangeBand() / 2; })
      .attr("y", function(d) { return h - yScale(d) + 14; });

    //Update x-axis
  svg.select(".x.axis")
      .transition()
      .duration(1000)
      .call(xAxis);

  //Update y-axis
  svg.select(".y.axis")
      .transition()
      .duration(1000)
      .call(yAxis);


});
