let w = 1200
let h = 800
let dateConverter = d3.timeParse("%m.%d");


let viz = d3.select("#container")
  .append("svg")
    .attr("width", w*2)
    .attr("height", h)
    .style("background-color", "lavender")
;


function gotData(incomingData){
  let newData = [];
  for(let i=0;i<incomingData.length-1;i++){
    let datapoint = incomingData[i];
    console.log(datapoint.timeone)
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


      var g = viz.selectAll('g')
          .data(newData)
          .enter()
          .append('g')
      ;

      g.selectAll('circle')
             .data(newData)
             .enter()
             .append('circle')
               .attr('cx', 200)
               .attr('cy', 200)
               
               .attr('r',10)
               .attr('fill',"seagreen");
   ;














}












d3.json("screentime.json").then(gotData);
