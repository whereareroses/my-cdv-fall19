let w3 = 1200
let h3 = 800
let dateConverter3 = d3.timeParse("%m.%d");
//--------------------------------------GRAPHTHREE------------------------
//create a svg
let viz3 = d3.select("#graphThree")
  .append("svg")
    .attr("width", w*2)
    .attr("height", h)
    .style("background-color", "lavender")
;
//add some styles to the page
let imgTwo =  viz3.append("image")
              .attr("xlink:href","icons/Werewolves.png")
              .attr("width",80)
              .attr("height",80)
              .attr('x', 40)
              .attr('y', 420)
viz3.append("text")
.text("Werewolves, also known as Mafia, is a ")
.attr("x",40)
.attr("y",520)
.attr("fill","black")
.attr("font-size","20")
.attr("font","Times New Roman")
.attr("font-stretch", "semi-expanded")
viz3.append("text")
.text(" social deduction game modelling a")
.attr("x",40)
.attr("y",550)
.attr("fill","black")
.attr("font-size","20")
.attr("font","Times New Roman")
.attr("font-stretch", "semi-expanded")
viz3.append("text")
.text("conflict between two groups:")
.attr("x",40)
.attr("y",580)
.attr("fill","black")
.attr("font-size","20")
.attr("font","Times New Roman")
.attr("font-stretch", "semi-expanded")
viz3.append("text")
.text("an informed minority (the werewolves) and an")
.attr("x",40)
.attr("y",610)
.attr("fill","black")
.attr("font-size","20")
.attr("font","Times New Roman")
.attr("font-stretch", "semi-expanded")
viz3.append("text")
.text("uninformeded majority (the villagers).")
.attr("x",40)
.attr("y",640)
.attr("fill","black")
.attr("font-size","20")
.attr("font","Times New Roman")
.attr("font-stretch", "semi-expanded")
viz3.append("text")
.text("I play it a lot, to the extent of addiction.")
.attr("x",40)
.attr("y",670)
.attr("fill","black")
.attr("font-size","20")
.attr("font","Times New Roman")
.attr("font-stretch", "semi-expanded")
viz3.append("text")
.text("One red dot means One minute I spend on it.")
.attr("x",40)
.attr("y",700)
.attr("fill","black")
.attr("font-size","20")
.attr("font","Times New Roman")
.attr("font-stretch", "semi-expanded")


//create a new array of data
function gotData(incomingData){
  let newData3 = [];
  for(let i=0;i<incomingData.length-1;i++){
    let datapoint3 = incomingData[i];
    for(let q=0;q<datapoint3.timeone+1;q++){
      newData3.push({date:dateConverter(datapoint3.date), app:"WeChat"})
    }
    for(let j=0;j<datapoint3.timetwo+1;j++){
      newData3.push({date:dateConverter(datapoint3.date), app:"Werewolves"})
    }
    for(let u=0;u<datapoint3.timethree+1;u++){
      newData3.push({date:dateConverter(datapoint3.date), app:"other"})
    }
  }


//bind data to g elements
    var g3 = viz3.selectAll('g')
        .data(newData3)
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
function getColor3(d,i){
    if (d.app == "Werewolves"){
      return "red";
    }else{
      return "grey";
    }
  }
//create dots!!!
     var circles3 =   g3.append('circle')
             .attr('cx', xPosition)
             .attr('cy', yPosition)
             .attr('r',2.5)
             .attr("opacity","0.5")
             .attr('fill',getColor3);
 ;

}
//------------------------------------------------------------------




d3.json("screentime.json").then(gotData);
