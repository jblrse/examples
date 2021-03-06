var holder = d3.select("body") // select the 'body' element
.append("svg")           // append an SVG element to the body
.attr("width", 449)      // make the SVG element 449 pixels wide
.attr("height", 249)    // make the SVG element 249 pixels high


// draw a circle
holder.append("circle")        // attach a circle
.attr("cx", 200)           // position the x-center
.attr("cy", 200)           // position the y-center
.attr("r", 50)
.style("opacity", 0.1);            // set the radius


holder.append("polygon")
.attr("stroke", "black")
.style("fill", "blue")
.attr("points", "100, 150, 200, 250, 300, 150");

holder.append("circle")        // attach a circle
.attr("cx", 200)           // position the x-center
.attr("cy", 200)           // position the y-center
.attr("r", 50)
.style("opacity", 0.9);

holder.append("text")
.style("fill", "black")
.attr("x", 200)
.attr("y", 20)
.attr("text-anchor", "beginning")
//.style("writing-mode", "tb")
.style("glyph-orientation-vertical", 90)
.text("Hello World!");
