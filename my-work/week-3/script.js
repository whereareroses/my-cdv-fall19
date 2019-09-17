let viz = d3.select("#viz-container")
                       .append("svg")
                       .attr("id", "viz")
                       .attr("width", 800)
                       .attr("height", 800)

;

function random(datapoint){
  // console.log(datapoint);
  return Math.random()*800;
}






// function r(){
//   return datapoint
// }

function gotData(newdata){
  console.log(newdata);
  viz.selectAll("circle").data(newdata).enter().append("circle")
                                            .attr("cx", random)
                                            .attr("cy", 400)
                                            .attr("r", 20)
  ;
  // function radius(newdata){
  //   let i=0
  //   // if(i<newdata.length){
  //     return newdata[i].indoorTem;
  //     console.log(newdata[i].indoorTem)
  //     i++
  //   }
}

d3.json("data.json").then(gotData);
