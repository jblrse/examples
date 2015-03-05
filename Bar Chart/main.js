var dataset = [5, 10, 15, 20, 25, 20, 15,
               10, 5]

var width = 500;

var h = 400;

var margin = {top: 10, bottom: 20, left: 10, right: 20};

var padding = 30;

var barPadding = 1;

var barWidth = width/dataset.length;

// var xScale = d3.scale.ordinal()
//                     .domain([0, dataset.length])
//                     .range([padding, width - padding * 2]);

 var yScale = d3.scale.linear()
                     .domain([d3.max(dataset), 0])
                     .range([h- padding, padding]);

// var xAxis = d3.svg.axis()
//                   .scale(xScale)
//                   .orient("bottom")
//                   .ticks(5);

// var yAxis = d3.svg.axis()
//                   .scale(yScale)
//                   .orient("left")
//                   .ticks(5);

var svg = d3.select("body")
            .append("svg")
            .attr({
              width: width,
              height: h
            });

var bar = svg.selectAll("rect")
            .data(dataset)
            .enter()
            .append("rect")
            .attr({
              x: function(d, i) { return i * barWidth; },
              y: function(d) { return h - yScale(d); },
              width: barWidth - barPadding,
              height: function(d) { return d * 100; },
              fill: function(d) { return "rgb(0, 0, " + d*10 + ")"; },
              opacity: function(d) { return d/dataset.length; }
            });

svg.attr();

//yScale.domain();
