let w2 = 1200
let h2 = 800
let dateConverter2 = d3.timeParse("%m.%d");
//--------------------------------------GRAPHTWO------------------------
//create a svg
let viz2 = d3.select("#graphTwo")
  .append("svg")
    .attr("width", w*2)
    .attr("height", h)
    .style("background-color", "lavender")
;
//add some styles to the page
let imgOne =  viz2.append("image")
              .attr("xlink:href","icons/WeChat.png")
              .attr("width",130)
              .attr("height",130)
              .attr('x', 10)
              .attr('y', 400)
              .classed("imageOne", true)
viz2.append("text")
.text("WeChat is a Chinese multi-purpose messaging,")
.attr("x",40)
.attr("y",510)
.attr("fill","black")
.attr("font-size","20")
.attr("font","Times New Roman")
.attr("font-stretch", "semi-expanded")
viz2.append("text")
.text(" social media and mobile payment app.")
.attr("x",40)
.attr("y",540)
.attr("fill","black")
.attr("font-size","20")
.attr("font","Times New Roman")
.attr("font-stretch", "semi-expanded")
viz2.append("text")
.text("I use it to socialize, pay and work.")
.attr("x",40)
.attr("y",570)
.attr("fill","black")
.attr("font-size","20")
.attr("font","Times New Roman")
.attr("font-stretch", "semi-expanded")
viz2.append("text")
.text("One green dot means One minute I spend on it.")
.attr("x",40)
.attr("y",600)
.attr("fill","black")
.attr("font-size","20")
.attr("font","Times New Roman")
.attr("font-stretch", "semi-expanded")


//create a new array of data
function gotData(incomingData){
  let newData2 = [];
  for(let i=0;i<incomingData.length-1;i++){
    let datapoint2 = incomingData[i];
    for(let q=0;q<datapoint2.timeone+1;q++){
      newData2.push({date:dateConverter(datapoint2.date), app:"WeChat"})
    }
    for(let j=0;j<datapoint2.timetwo+1;j++){
      newData2.push({date:dateConverter(datapoint2.date), app:"Werewolves"})
    }
    for(let u=0;u<datapoint2.timethree+1;u++){
      newData2.push({date:dateConverter(datapoint2.date), app:"other"})
    }
  }


//bind data to g elements
    var g2 = viz2.selectAll('g')
        .data(newData2)
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
function getColor2(d,i){
    if (d.app == "WeChat"){
      return "green";
    }else{
      return "grey";
    }
  }
//create dots!!!
     var circles2 =   g2.append('circle')
             .attr('cx', xPosition)
             .attr('cy', yPosition)
             .attr('r',2.5)
             .attr("opacity","0.5")
             .attr('fill',getColor2);
 ;

}
//------------------------------------------------------------------




d3.json("screentime.json").then(gotData);
