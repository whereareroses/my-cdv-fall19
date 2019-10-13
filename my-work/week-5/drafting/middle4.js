let w4 = 1200
let h4 = 800
let dateConverter4 = d3.timeParse("%m.%d");
//--------------------------------------GRAPHFOUR------------------------
//create a svg
let viz4 = d3.select("#graphFour")
  .append("svg")
    .attr("width", w*2)
    .attr("height", h)
    .style("background-color", "lavender")
;
//add some styles
let imgThree =  viz4.append("image")
              .attr("xlink:href","icons/Zhihu.png")
              .attr("width",70)
              .attr("height",70)
              .attr('x', 40)
              .attr('y', 420)
let imgFour =  viz4.append("image")
              .attr("xlink:href","icons/Instagram.png")
              .attr("width",90)
              .attr("height",90)
              .attr('x', 130)
              .attr('y', 410)
let imgFive =  viz4.append("image")
              .attr("xlink:href","icons/NetEase.png")
              .attr("width",100)
              .attr("height",100)
              .attr('x', 220)
              .attr('y', 410)
viz4.append("text")
.text("Other apps that I use often are")
.attr("x",40)
.attr("y",520)
.attr("fill","black")
.attr("font-size","20")
.attr("font","Times New Roman")
.attr("font-stretch", "semi-expanded")
viz4.append("text")
.text(" Zhihu (Chinese Quora), Instagram, a social")
.attr("x",40)
.attr("y",550)
.attr("fill","black")
.attr("font-size","20")
.attr("font","Times New Roman")
.attr("font-stretch", "semi-expanded")
viz4.append("text")
.text("media platform, and NetEase Music, a Chinese")
.attr("x",40)
.attr("y",580)
.attr("fill","black")
.attr("font-size","20")
.attr("font","Times New Roman")
.attr("font-stretch", "semi-expanded")
viz4.append("text")
.text("music player which has a lot of original artists.")
.attr("x",40)
.attr("y",610)
.attr("fill","black")
.attr("font-size","20")
.attr("font","Times New Roman")
.attr("font-stretch", "semi-expanded")
viz4.append("text")
.text("I love browing on Zhihu, read all these absurd questions.")
.attr("x",40)
.attr("y",640)
.attr("fill","black")
.attr("font-size","20")
.attr("font","Times New Roman")
.attr("font-stretch", "semi-expanded")
viz4.append("text")
.text("Instagram offers a lot of art inspirations for me.")
.attr("x",40)
.attr("y",670)
.attr("fill","black")
.attr("font-size","20")
.attr("font","Times New Roman")
.attr("font-stretch", "semi-expanded")
viz4.append("text")
.text("One violet dot means One minute I spend on them.")
.attr("x",40)
.attr("y",700)
.attr("fill","black")
.attr("font-size","20")
.attr("font","Times New Roman")
.attr("font-stretch", "semi-expanded")

//create a new array of data
function gotData(incomingData){
  let newData4 = [];
  for(let i=0;i<incomingData.length-1;i++){
    let datapoint4 = incomingData[i];
    for(let q=0;q<datapoint4.timeone+1;q++){
      newData4.push({date:dateConverter(datapoint4.date), app:"WeChat"})
    }
    for(let j=0;j<datapoint4.timetwo+1;j++){
      newData4.push({date:dateConverter(datapoint4.date), app:"Werewolves"})
    }
    for(let u=0;u<datapoint4.timethree+1;u++){
      newData4.push({date:dateConverter(datapoint4.date), app:"other"})
    }
  }


//bind data to g elements
    var g4 = viz4.selectAll('g')
        .data(newData4)
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
function getColor4(d,i){
    if (d.app == "other"){
      return "violet";
    }else{
      return "grey";
    }
  }
//create dots!!!
     var circles4 =   g4.append('circle')
             .attr('cx', xPosition)
             .attr('cy', yPosition)
             .attr('r',2.5)
             .attr("opacity","0.5")
             .attr('fill',getColor4);
 ;

}
//------------------------------------------------------------------




d3.json("screentime.json").then(gotData);
