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



## Design decisions

## Future goals