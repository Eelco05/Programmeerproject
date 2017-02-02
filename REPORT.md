# Final report
By **Eelco Alink** ***10459006***
## Short description 
This website is meant to give a short impression of the perliminairy results of an archaeological survey, in this case the 3-year Sacred Landscape Project. Here in it is the aim to visualise quickly certain aspects of the data gathered in the field to the viewer that aren't directly evident from the source data, while at the same time placing them within a broader framework.
<br>
My aim is be see if this can be done for the Sacred Landscape Project as a test case, this building toward making a framework for other projects. This way, complex findings and data can be shared between researchers and students, but also with the public.

## Technical design
**index.html:** homepage and first page the user sees. This give the user a short overview of the site's intentions and functionality. From here, the user can visit any of the other pages via the navigation bar.

**nav.html:** tool that lets the user navigate from every page to every other. This is the only instance where html code links all the pages together. It is imported into the other html pages via jquery. This does seem to slow down the load time of each page, but considering that adding an extra page now only requires editing a simple file instead of all, this is a fair trade-off.

**project.html:** name of the textual part of the website also a page in its own right. Here is detailed the general goals and methodology of the project. All the text here are direct quotes from the linked articles.

**history.html and sites.html:** both give textual background to the location of the project, both again qouted from the linked articles, with a small section from wikipedia. Sites.html has the added feature of a google maps API, wherin the towns of the two main sites have been highlighted.

**findtypes.html:** here are displayed the two visualisations that show when, how many and what kind of finds were done during the project. This makes use of two svg objects, written in d3.v3, and a css based switch. Code for the d3 elements is found in dashboard.js, whereas the switch can be found in style.css.

**Dashboard.js:** contains multiple functions, all of which support the two d3 visualisations. Some information about each function can be found as a comment above it.

**findperiod.html:** shows visualisation where finds are show in amounts per dating range. Uses d3.v4, which is way this html is the only one with a d3.v4 included in the header instead of d3.v3. This visualisation calls 4 seperate javascript files.

**changeYear.js:** simple function to change the used data file in the visualisation, in this case to a different year.

**timeline.html:** main function, constructs the bar chart

**timeline_periods.js:** function that uses a seperate csv file to construct a table, in this case a appendix of the periods shorthand.

**timeline_legend.js:** creates a color scale legend for the logarithmically scaled colors in the barchart. Done in d3.

**references.html:** shows a short acnownolidgment to all the people that have helped me get this far and a list of references.

**about.html:** tells the user a bit about the author. Linked to linkedin.

## Challenges
My first challange was the data. This was in part due to the seaming complexity of the data, the errors it contained, its general vagueness, but mostly because i haven't really mastered data manipulation just. It was only until the end of the second and start of the third week that i started to get a good feel for both the data and how to handle it.
<br>
My second, and biggest challange, was my timeline visualisation. In this i had a lot of difficulty. Firstly, i needed be figure out how i wanted to visualize the data in terms of finds per historical period. Because dating can be a really vague thing in archaeology, this gave me some problems. I spend to much time going through different visualisation examples, asked other teammembers about it, put it to the group at the presentation, to no avail. Luckely, it was in week three that Sasha came with the idea of making a stacked bar chart, with only one stack. This at took some major redesigning of a stacked bar chart example, but i must say i'm quite pleased with the result.
<br>
My final difficulty was the dashboard example i used. Initially this worked great and looked nice without the data. It's a nifty set of visualisations, but i found out it's quite a complex piece of code that took me some while to get to grips with and even more to import my data. The end result i think is quite nice, but still quite limited by its rigid, conveluted structure.

## Design decisions
I had to make a few. The first thing to go was my plan to include find images. Considering how much time it finally took for me to get all my visualisations running, showing find pictures linked to a visualisation proved far beyond the time i had.
<br>
The second design choice i had to make, was about spreading my visualisations on multiple pages. I would have loved to have them all on one page, interacting with one another. I just don't have the skill or time yet to do this.

## Future goals
A lot. I want to be able to have all visualisation on one page, interacting with one another. I want to have a more appropriate, personolized text to give the visualisations context, instead the now hastily plugged in quotes from the research papers.
<br>
I would love to implement a picture database, to be able to show the user just the kinds of material that was found. This would add a lot to a more attractive website for the public.
<br>
Furthermore i want to refine my timeline visualisation. I'm still not quite happy with it. I feel more could be done with this.
<br>
Another thing i definitly want to include, is a refinement of the data. At the moment, all i show is raw numbers of finds. However, in recent year a lot of math and methodology had been developed to filter out finds and find numbers that are really significant. For instance, the is a big difference between the number of finds between years. However, because there are so many factors in play that influence this, no real meaning can be found in what is shown.
<br>
But the most important things i want to do, is to make the site more universal in the way it can take in data. This way, it will become a data structure that could be used quickly after a field campaign to gleam meaning, convey findings to colleges and student, and show the public in general what it is we as archaeologist do with our time in the sun.