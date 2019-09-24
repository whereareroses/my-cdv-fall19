function gotData(incomingData){
console.log(incomingData)
let viz = d3.select("body")
  .append("svg")
    .attr("width",1500)
    .attr("height",1500)
    ;

let groupelements  = viz.selectAll(".datagroup").data(incomingData)
   .enter()
     .append("g")
     .attr("class","datagroup")
     ;

groupelements.append("circle")
         .attr("cx", randomX)
         .attr("cy", randomY)
         .attr("r", 10)
         .attr("fill","lightblue")
     ;


groupelements.append("image")
    .attr("xlink:href","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIOmzoC1A8HtVBidZrTiUZWjXO2gvDWExEmuBca3TCIPkERgFupg")
    .attr("width",25)
    .attr("height",25)
    .attr("x", randomX)
    .attr("y", randomY)
   ;

groupelements.append("text")
    .attr("x", randomX)
    .attr("y", randomY)
    .text(roomNum)
    .attr("fill", "pink")
;


}
d3.json("data.json").then(gotData);

function randomX(datapoint,i){
  console.log(datapoint)
  console.log(i)
  return datapoint.indoorTem *60 -1000
}
function randomY(datapoint,i){
  console.log(datapoint)
  console.log(i)
  return datapoint.roomNumber-1300
}
function roomNum(datapoint,i){
  return datapoint.roomNumber
}
