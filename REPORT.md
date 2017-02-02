# Final report
By **Eelco Alink** ***10459006***
## Short description 
This website is meant to give a short impression of the perliminairy results of an archaeological survey, in this case the 3-year Sacred Landscape Project. Here in it is the aim to visualise quickly certain aspects of the data gathered in the field to the viewer that aren't directly evident from the source data, while at the same time placing them within a broader framework.
<br>
My aim is be see if this can be done for the Sacred Landscape Project as a test case, this building toward making a framework for other projects. This way, complex findings and data can be shared between researchers and students, but also with the public.

## Technical design
Consists of three main components:

### (Con)Text
Firstly there is the information about the study. This was gleaned from two preliminary reports. These are direct quotes. The original articles have been added for the more scientific minded site visiter.

![Text page](/doc/screenshot_text_final.png)

### Dashboard: Pie chart and Histogram (Find types)
These two visualizations, intimately linked, show the amount of certain types of archaeological finds per campaign year. Initialy it shows in the pie chart and accompaniïng legend the total amount of ceramic finds per year. Next to this the viewer can see the total amount of the different types of ceramic, represented in a histogram. 
<br>
When the user hovers over the piechart, the histogram changes to represent the different find ceramic type found in the year the user had highlighted. In this same way, the pie chart changes how many of a ceramic type was found over the different years.
<br>
Lastly, the user can click on the switch above the histogram to change from displaying ceramic as a find category, to showing other find categories.
<br>
At the bottom of the page an additional link is added to the complete preliminary report, which includes an appendix that shows what every abbreviation means.

![Find types page](/doc/screenshot_findtypes_final.png)

### Timeline (Find periods)
The timeline shows the relative dating of the finds. This visualisation has three elements. Firstly the horizontal bar chart. This shows on the x-axis a timeline, where every date visible corrisponds to a time period. The different bars show dating ranges of finds. Hovering over each bar will show its dating, both in abreviated periods and in dates AD, and the amount of finds with this dating range. The coloring of the bars indicates the amount of finds that per dating range, scaled logarithmicelly. This is shown in the bar at the bottom right of the graph, above which is a legend is shown that diplays to the user the meaning of each shorthand period signifiër and its dating range.

![Find periods page](/doc/screenshot_findtypes_final.png)

## Challenges

## Design decisions

## Future goals