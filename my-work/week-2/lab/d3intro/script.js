let viz = d3.select("#viz-container")
// not only select by id#, but also by class, and element name
//appenchild.(svg)
                       .append("svg")
                //selection changes here <svg>
                            .attr("id","viz")
                    //change the id attribute of the element to "viz"
                            .attr("width","400px")
                            .attr("height","400px")


;

// let myCircle =  viz.append("circle")
//                              .attr("cx",100)
//                              .attr("cy",100)
//                              .attr("r",100)
//
// ;
// myCircle.attr("fill","white");
//
// let myRect = viz.append("rect")
//                           .attr("x",300)
//                           .attr("y",300)
//                           .attr("width",20)
//                           .attr("height",40)
//                           .attr("fill","blue")
// ;

let myData = [3,6,8,5,4,1,5];
viz.selectAll("circle").data(myData).enter().append("circle")
                                                .attr("cx",120)
                                                .attr("cy",300)
                                                .attr("r",20)
;
