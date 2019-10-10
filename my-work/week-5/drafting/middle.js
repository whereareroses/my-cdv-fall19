let w = 1200
let h = 800
let dateConverter = d3.timeParse("%m.%d");

//create a svg
let viz = d3.select("#container")
  .append("svg")
    .attr("width", w*2)
    .attr("height", h)
    .style("background-color", "lavender")
;

//create a new array of data
function gotData(incomingData){
  let newData = [];
  for(let i=0;i<incomingData.length-1;i++){
    let datapoint = incomingData[i];
    for(let q=0;q<datapoint.timeone+1;q++){
      newData.push({date:dateConverter(datapoint.date), app:"WeChat"})
    }
    for(let j=0;j<datapoint.timetwo+1;j++){
      newData.push({date:dateConverter(datapoint.date), app:"Werewolves"})
    }
    for(let u=0;u<datapoint.timethree+1;u++){
      newData.push({date:dateConverter(datapoint.date), app:"other"})
    }
  }
  console.log(newData);

//bind data to g elements
    var g = viz.selectAll('g')
        .data(newData)
        .enter()
        .append('g')
        .classed("datagroup", true)
    ;


//assign positions to the dots
function yPosition(d,i){
  return Math.floor(i/125)*14+40
}
function xPosition(d,i){
  return (i - Math.floor(i/125)*125)*14 +250
}
//get color
function getColor(d,i){
  if (d.app == "WeChat"){
    return "green";
  }else if(d.app == "Werewolves"){
    return "red";
  }else{
    return "grey";
  }




}

     var circles =   g.append('circle')
             .attr('cx', xPosition)
             .attr('cy', yPosition)
             .attr('r',3.5)
             .attr("opacity","0.5")
             .attr('fill',getColor);
 ;


}












d3.json("screentime.json").then(gotData);
