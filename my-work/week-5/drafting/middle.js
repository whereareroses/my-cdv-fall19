let w = 1200
let h = 800
let dateConverter = d3.timeParse("%m.%d");
//--------------------------------------GRAPHONE------------------------
//create a svg
let viz = d3.select("#graphOne")
  .append("svg")
    .attr("width", w*2)
    .attr("height", h)
    .style("background-color", "lavender")
;
//add some styles to the page
viz.append("image")
              .attr("xlink:href","icons/GoldenWeek.png")
              .attr("width",120)
              .attr("height",120)
              .attr('x', 40)
              .attr('y', 380)
viz.append("text")
.text("The data is collected from the screentime on my iPhone")
.attr("x",40)
.attr("y",510)
.attr("fill","black")
.attr("font-size","20")
.attr("font","Times New Roman")
.attr("font-stretch", "semi-expanded")
viz.append("text")
.text("from 9.24 to 10.7. 10.1-10.7 is the Chinese National")
.attr("x",40)
.attr("y",540)
.attr("fill","black")
.attr("font-size","20")
.attr("font","Times New Roman")
.attr("font-stretch", "semi-expanded")
viz.append("text")
.text( "holiday, also known as Golden week.One grey dot")
.attr("x",40)
.attr("y",570)
.attr("fill","black")
.attr("font-size","20")
.attr("font","Times New Roman")
.attr("font-stretch", "semi-expanded")
viz.append("text")
.text(" means one minute of screentime on schooldays.")
.attr("x",40)
.attr("y",600)
.attr("fill","black")
.attr("font-size","20")
.attr("font","Times New Roman")
.attr("font-stretch", "semi-expanded")
viz.append("text")
.text("One golden dot means one minute during Golden week.")
.attr("x",40)
.attr("y",630)
.attr("fill","black")
.attr("font-size","20")
.attr("font","Times New Roman")
.attr("font-stretch", "semi-expanded")

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


//bind data to g elements
    var g = viz.selectAll('g')
        .data(newData)
        .enter()
        .append('g')
        .classed("datagroup", true)
    ;

//assign positions to the dots
function yPosition(d,i){
  return Math.floor(i/100)*5+60
}
function xPosition(d,i){
  return (i - Math.floor(i/100)*100)*5 +30
}
//get color
function getColor(d,i){
    if (d.date.getMonth() == 8){
      return "grey";
    }else{
      return "gold";
    }
  }
//create dots!!!
     var circles =   g.append('circle')
             .attr('cx', xPosition)
             .attr('cy', yPosition)
             .attr('r',2.5)
             .attr("opacity","0.5")
             .attr('fill',getColor);
 ;

}
//------------------------------------------------------------------




d3.json("screentime.json").then(gotData);
