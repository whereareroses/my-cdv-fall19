# "Screentime" -- a data zine project by Jannie Zhou
My project is about the screentime on my iPhone from September 24th to October 7th, two weeks. I collected the actual screentime on my iPhone each day and the amount of time I spend on different apps.

My project looks like this:
![cover](/screenshots/cover.png)
![page2](/screenshots/page2.png)
![page3](/screenshots/page3.png)
![back](/screenshots/back.png)

I was inspired by the [Gun Death Graph](https://fivethirtyeight.com/features/gun-deaths/). Because screetime is a relatively large dataset that contains a lot of possibilities. So I drew inspiration from this graph and created my own.

The most challenging part I faced is how to convert my dataset. Because the original dataset I have is arranged by date, and the screentime is just a string of number. And turning the dataset to a dataset in which one minute is one object in the dataset is the hardest part. I finally came up with the solution under the help of Leon: multiple for loops and the push function. I created a new array and use it as the new dataset. And after transforming the dataset things became so much easier. I could be able to bind one dot to one object in the array.

Another challenge I faced is the position of the dots. It took me a lot time to come up with the solution. I finally used some math calculations to solve the problem. I also used the Math.floor function.

The backpage is just a combination of what we have learned in this class so far. I used the color scale and the x,y axises function in d3 to create a bar graph of screentime.

I would like to see my project to be beyond paper. I would want it to be an interactive webpage project. So maybe I will continue working on it. Because there are some interactions that I would like to see in my project but they cannot be done on printed paper. All in all, it's been a long way to complete this project and I learned a lot from completing it.
