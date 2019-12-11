# "How Couples Meet and Stay Together" -- an Internet Data graph project by Jannie Zhou
My project is about the love life of Americans, based on a survey that Standford University carried out in 2010. HoW Couples Meet and Stay Together (HCMST) is a study of how Americans meet their spouses and romantic partners. It was fielded in 2010 and following up surveys were completed during the past decade.

### The Process###
####Dataset Mining####
I went through a lot of datasets while looking for the one for my project. I found this dataset in one edition of Data is Plural. I looked into the abstract and found it extermly intersting to me. And this dataset includes many aspects and I feel like I could play with it a lot.

But after I landed on this dataset, since it is in the format of dta. I stuggled to convert it using Python to csv. Even after I found the csv file, the dataset is still hard to understand because it is a huge survey that a lot of people put hard work in, there are many codes to represent each attribute of one element. So in an office hour with Leon, he helped me to look into the guidebook and codebook to understand this dataset better. Then I looked into all the instrucitons on the dataset page and get more familiar with the data set and decided what aspects I want to highlight.


####Original Inspiration####
Because this dataset oversamples same-sex couple, originally what I want to do is to highlight the sextual orientation, religion and eduacation. To discover how these attributes could influence or contribute to one's relationship experience. But after I present my idea to the class, Leon reminded me that it could be potentially tricky and risy to talk about this in your project because you don't want to make it look like your claim and your statement. So I thought about it for a while.

The major thing I want to discover is definitly the way the meet each other. But the dataset is the original one which was fielded in 2010. I decided to focus on this one only because the second one's respondants are fresh and non-overlapping with the first one. And I thought the first one could provide more raw information that could reveal much more about this topic. So the percentage of couples meeting online is still comparably low.


####Coding Process####
#####Stage One: Random Positioning#####
I pulled out some aspects from the dataset and tried to work with them. I used the filter funciton to sort the incoming data into different groups and created different datagroups for them. At that time I did not know about the simulation function that d3 has. So I placed them randomly on the page, each in a tiny box. At that time my page looks like this:
![Prototype](/pics/stage1.png)
![Prototype2](/pics/stage1-.png)

#####Stage Two: Simulation & Dividing the Dataset#####
After I learned the simulation technique, I decided that it is what I want with my project, so I tried to implement it into my code. At first what I did is seperating the dataset. I filtered them into sub-datasets and create one simulation for each of them. It worked in the first graph, but when I tried to move on to the next graph I encoutered problem. The two simulations could work properly.

At first I thought it was because the first simulation didn't stop. So I tried the simulation.stop(), simulation.tick(), and simulation.restart(). But no matter what I tried it still won't work as it's expected to. So I asked Leon for help.

This my code at that time:
![stage2code](/pics/stage2.png)
![stage2code](/pics/stage2..png)
![stage2code](/pics/stage2...png)
![stage2code](/pics/stage2.....png)
My page looked like this:
![stage2page](/pics/stage2....png)


Leon and I closely examined my code but we couldn't figure out what went wrong. The tick function means that it will stop after 300 times. But the second simulation won't work as the way they are supposed to. This question remains and I still would like to know why.
#####Stage Three: Scroller#####

At first I want to make this page change as user scroll down the page. So I used the window.onscroll function.

This is what I tried:
![stage3code](/pics/stage3.png)

But later I thought of the leonScroller we learned in class and consider it a better way to present the information since it has a textbox which could go with the graph and explains with it. So I integrated it into my project and put my text in it.


#####Stage Four: New Coding Structure & Proper Simulation#####
Leon suggests that the coding structure I had at that time was not very good. He suggests that I should use one simulation and change the forceX and forceY when certain conditions are met. I adopted this wonderful suggestion and restructured my code. Now the simulation works just fine and all thoses pretty dots are dancing happily on the page. I wrapped all the filterring in functions which makes the code looks much neater. And I updated the simulation when certain conditions are met.


This is what the new structure looks like:
![stage4code](/pics/stage4.png)
![stage4code](/pics/stage4..png)

And I added a floating box onto the page when one dot is clicked. And made the hovering function. I make the floating box to present individual information that could also reveal a lot. The hovering function is to highlight the dot that you are on and make the duration as easy to see as possible.

####Evaluation####
#####What Went Well#####
######Conceputal Aspect######
This project reveals mostly how couples met both offline and online. It fulfills my goal of presenting the viewers with an overall look on how couples meet and the proportion of online meeting couples. It also provides the viewer with the possibilty with looking at individual case and discover more things.
######Coding Aspect######
I did well in using the simulation to make my graph dynamic. Also integrating the scroller into my graph. And using the filterring function properly to make the graph work.

#####Improvements#####
######Conceptually######
I wanted to put more emphasis on other aspects beside the relationship duration and how they meet in order to make my graph more meaningful and have more context. But instead of putting them individuall, I wanted to put the couples together and in comparision with other couples. That way it is less offensive and coule have more implications.

Also I would love to integrate the following up surveys into my graph to make cute and smart comparisions, which I believe could reveal much more.

######Coding######
I want to make the graph more diverse. Instead of always using the same format, I wonder if I could do something more than this and give it a more divese body. And the transition could be smoother comparing to the one I'm having right now.

The hover function somehow does not work and I would very much want to know why and fix it if I have time.
