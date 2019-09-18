let viz = d3.select("#viz-container")
                       .append("svg")
                       .attr("id", "viz")
                       .attr("width", 800)
                       .attr("height", 800)


;



function xpoint(datapoint, i){
  console.log(datapoint);
  return i*25 + 120;
}
function ypoint(datapoint){
  return datapoint.indoorTem *10 - 70;
}

// function radius(newdata){
//   let i=0
//   // if(i<newdata.length){
//     return newdata[i].indoorTem;
//     console.log(newdata[i].indoorTem)
//     i++
//   }


function gotData(newdata){
  console.log(newdata);
  viz.selectAll("circle").data(newdata).enter().append("circle")
                                            .attr("cx", xpoint)
                                            .attr("cy", ypoint)
                                            .attr("r", 8)
  ;

}

d3.json("data.json").then(gotData);
