var data = [
    {
        "timestamp": "2019-09-10T08:02:26.903Z",
        "westworld": 5,
        "reasonsWhy": 8,
        "brokeGirls": 7,
        "friends": 6,
        "euphoria": 5
    },
    {
        "timestamp": "2019-09-10T08:03:55.963Z",
        "westworld": 9,
        "reasonsWhy": 10,
        "brokeGirls": 6,
        "friends": 1,
        "euphoria": 7
    },
    {
        "timestamp": "2019-09-10T08:05:43.151Z",
        "westworld": 5,
        "reasonsWhy": 6,
        "brokeGirls": 5,
        "friends": 7,
        "euphoria": 3
    },
    {
        "timestamp": "2019-09-10T08:06:19.132Z",
        "westworld": 5,
        "reasonsWhy": 2,
        "brokeGirls": 7,
        "friends": 8,
        "euphoria": 2
    },
    {
        "timestamp": "2019-09-10T08:07:27.691Z",
        "westworld": 7,
        "reasonsWhy": 5,
        "brokeGirls": 6,
        "friends": 6,
        "euphoria": 5
    },
    {
        "timestamp": "2019-09-10T08:07:46.526Z",
        "westworld": 6,
        "reasonsWhy": 6,
        "brokeGirls": 9,
        "friends": 8,
        "euphoria": 4
    },
    {
        "timestamp": "2019-09-10T08:08:42.379Z",
        "westworld": 8,
        "reasonsWhy": 4,
        "brokeGirls": 7,
        "friends": 8,
        "euphoria": 1
    },
    {
        "timestamp": "2019-09-10T08:11:17.503Z",
        "westworld": 4,
        "reasonsWhy": 8,
        "brokeGirls": 6,
        "friends": 3,
        "euphoria": 10
    },
    {
        "timestamp": "2019-09-10T08:12:08.579Z",
        "westworld": 6,
        "reasonsWhy": 9,
        "brokeGirls": 9,
        "friends": 10,
        "euphoria": 1
    },
    {
        "timestamp": "2019-09-10T08:16:19.279Z",
        "westworld": 9,
        "reasonsWhy": 2,
        "brokeGirls": 2,
        "friends": 2,
        "euphoria": 2
    },
    {
        "timestamp": "2019-09-10T08:34:52.348Z",
        "westworld": 5,
        "reasonsWhy": 10,
        "brokeGirls": 10,
        "friends": 9,
        "euphoria": 6
    },
    {
        "timestamp": "2019-09-10T08:45:22.787Z",
        "westworld": 4,
        "reasonsWhy": 9,
        "brokeGirls": 9,
        "friends": 10,
        "euphoria": 5
    },
    {
        "timestamp": "2019-09-10T08:59:24.138Z",
        "westworld": 10,
        "reasonsWhy": 1,
        "brokeGirls": 6,
        "friends": 10,
        "euphoria": 10
    },
    {
        "timestamp": "2019-09-10T08:59:39.678Z",
        "westworld": 8,
        "reasonsWhy": 5,
        "brokeGirls": 9,
        "friends": 8,
        "euphoria": 5
    },
    {
        "timestamp": "2019-09-10T09:28:30.692Z",
        "westworld": 10,
        "reasonsWhy": 3,
        "brokeGirls": 3,
        "friends": 9,
        "euphoria": 3
    },
    {
        "timestamp": "2019-09-10T10:58:24.772Z",
        "westworld": 1,
        "reasonsWhy": 1,
        "brokeGirls": 7,
        "friends": 10,
        "euphoria": 1
    }
]

// the function dates a data
// arrayn as an argument
function averageData(data){
  // new empty array to be filled
  // with data in new structure
  let newData = [];
  // assuming each data point has the same
  // keys/categories, we extract an array of them from the
  // first data point in the array
  // in class we changed it to the last element instead
  // as the first one did not have all the categories filled out
  // there is more thorough ways to do this, but for out purposes
  // now, this will be enough
  let keys = Object.keys(data[0]);
  // now we loop over the keys/categories
  for(let i = 0; i < keys.length; i++){
    // store the current key/category in
    // a variable:
    let key = keys[i];
    // now we will loop over each data point
    // in the data set, check if it has a value
    // for the key/category and add them to
    // a total sum variable
    // as well as count the occurences in order to
    // calulate the averae in the end
    let sum = 0;
    let num = 0;
    for(let j = 0; j < data.length; j++){
      let datum = data[j];
      // check if the key exists
      // for this datapoint
      if(key in datum){
        // add to sum
        sum += datum[key];
        // increase count
        num++;
      }
    }
    // now calculate the average
    let avg = sum/num;
    // make sure the value is a number
    // (some value might be strings)
    if(!isNaN(avg)){
      // create an object with both the average
      // and also the number of measurements that
      // went into the average
      let newDataPoint = {"name": key, "average": avg, 'numMeasurements': num};
      // add the new datapoint to the new data array
      newData.push(newDataPoint);
    }
  }
  // return everything when it is done
  return newData;
}
var transformatedData = averageData(data);
console.log(transformatedData);

for(let i=0;i<transformatedData.length;i++)
{
let datapoint = transformatedData[i];
let tvShow = datapoint.name;
let ave = datapoint.average;
let bar = document.createElement("div");
bar.className = "bar";
bar.style.width = (ave * 50) + "px";
let tvName = document.createElement("p");
tvName.innerHTML = tvShow;
bar.appendChild(tvName);
document.body.appendChild(bar);




}
