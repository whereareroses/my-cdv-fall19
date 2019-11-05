w = 1500
h = 900
let viz = d3.select("#container")
  .append('svg')
    .attr("width", w)
    .attr("height", h)
    .style("background-color", "skyblue")
;
function getX(){
   return Math.random()*w
}
function getY(){
  return Math.random()*h
}

document.getElementById('text').addEventListener("click",function(){
  viz.selectAll("circle").transition().duration(500)
  .attr("fill","coral")})

function gotData(incomingData){
  console.log(incomingData)
  viz.selectAll("circle").data(incomingData).enter().append("circle")
     .attr("class","datagroup")
     .attr("cx",getX)
     .attr("cy",getY)
     .attr("r",3)
     .attr("fill","plum")
    ;





}
d3.csv("HCMST_ver_3.04.csv").then(gotData);
