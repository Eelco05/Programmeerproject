// Based on example found on:
// https://bl.ocks.org/mbostock/5e81cc677d186b6845cb00676758a339

var zoom = d3.zoom().on("zoom", zoomed),
    svg = d3.select("imageZoom").call(zoom),
    g = svg.select("g"),
    image = g.select("image"),
    width = +svg.attr("width"),
    height = +svg.attr("height"),
    x0 = +image.attr("x"),
    y0 = +image.attr("y"),
    x1 = +image.attr("width") + x0,
    y1 = +image.attr("height") + y0;

// Don’t allow the zoomed area to be bigger than the viewport.
zoom.scaleExtent([1, Math.min(width / (x1 - x0), height / (y1 - y0))]);

function zoomed() {
  var t = d3.event.transform;
  if (t.invertX(0) > x0) t.x = -x0 * t.k;
  else if (t.invertX(width) < x1) t.x = width - x1 * t.k;
  if (t.invertY(0) > y0) t.y = -y0 * t.k;
  else if (t.invertY(height) < y1) t.y = height - y1 * t.k;
  g.attr("transform", t);
}
