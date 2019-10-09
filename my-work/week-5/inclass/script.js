var w = 1000;
var h = 800;
var k = "Incidence - HIV/AIDS - Sex: Both - Age: All Ages (Number) (new cases of HIV)";
let viz = d3.select("#container")
  .append("svg")
    .attr("width", w)
    .attr("height", h)
    .style("background-color", "lavender")
;



function gotData(incomingData){
console.log(incomingData);


//-----------forEach method---------------
  incomingData.forEach(  function(d,i){
      // console.log(d);
    });
  // for (let i = 0; i < incomingData.length; i++){
  //
  // }
//-----------------------------------------



//-------------map method-----------------
  function newData(d){
    let entity = d.Entity;
    let year = d.Year;
    return {one: entity, two: year}
  }
let newArray = incomingData.map(newData);
    //produce a new array
// console.log(newArray);
//----------------------------------------



//---------------filter method------------
let filteredData = incomingData.filter(filterFunction);
function filterFunction(d){
//only true or false
  if(d.Code == "CHN"){
      return true;
  }else{
    return false;
  }
}
// console.log(filteredData);
//----------------------------------------


//--------------date convert--------------
let dateConverter = d3.timeParse("%Y");
let test = dateConverter("2019");
// console.log(test);
//this convert a string to an object
//----------------------------------------



//-------------min&max method-------------

// function minFunction(d){
// let year = d.Year;
// let formattedYear = dateConverter(year);
// return formattedYear;
//
// }
// let minYear = d3.min(filteredData, minFunction)
// let maxYear = d3.max(filteredData, minFunction)
// console.log(minYear);
// let domainArray = [minYear,maxYear]
// console.log(domainArray);

// alternative way to do this:
let alternativeArray = d3.extent(filteredData,function(d) {
      return formattedYear = dateConverter(d.Year) ;})
// console.log(alternativeArray);
//----------------------------------------



//----------------build axis--------------
let xPadding = 50;
let yScale = d3.scaleLinear().domain( d3.extent(filteredData,function(d){return d[k];})).range([0,h - xPadding*2] );
let xScale = d3.scaleTime().domain(alternativeArray).range([ xPadding,w - xPadding ]);


let xAxis = d3.axisTop(xScale);
let xAxisGroup = viz.append("g").attr("class","xaxis");
xAxisGroup.call(xAxis);
let yPosition = h - 30;
xAxisGroup.attr("transform","translate(0," + yPosition + ")");

let yAxisGroup = viz.append("g").attr("class","yaxis");
yAxisGroup.call(d3.axisLeft(yScale)).attr("transform","translate(" + xPadding + "," + xPadding + ")");

//---------------------------------------





}

d3.csv("data.csv").then(gotData);
