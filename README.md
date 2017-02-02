# README
<img src='https://bettercodehub.com/edge/badge/Eelco05/Programmeerproject'>

## Nieuwe manier om Archeologische Fieldsurvey's te visualiseren
By **Eelco Alink** ***10459006***

This is wat an archaeological survey looks look:

![Field survey](/doc/image1.jpg)

And this is what they find:

![Field survey](/doc/image2.jpg)

Plus nog een hele hoop data. Deze wordt echter maar op een beperkte manieren gevisualiseerd (naast de standaard grafieken):

![Field survey](/doc/image3.jpg),![Field survey](/doc/image4.jpg),![Field survey](/doc/image5.jpg)

In de archeologie is context erg belangrijk voor het begrijpen en interpreteren van je materiaal, maar de data die deze context weergeeft is vaak complex, veelzijdig en moeilijk te overzien. Visualisaties zoals hierboven zeggen wel iets over het onderzoek, maar vaak los aan gerefereerd en dan alleen in de zin "Dit is onze data. Hier gaat onder verhaal over". De visualisaties zelf vertellen geen verhaal.

Omdat archeologische data zo veel aspecten bevat, is het zeker mogelijk om deze op een veelvoud van manieren weer te geven. Gekoppeld aan een gebruiksvriendelijke interface kan eigenlijk als tijdens een onderzoek de resultaten zichtbaar gemaakt worden, wat erg handig kan zijn voor langere projecten over grotere gebieden. Zo kan duidelijk gemaakt worden wat de belangrijkste onderdelen zijn, welke tijdsperiodes het bevat en waar nog eventuele gaten zitten. Zo kunnen onderzoeksgegevens niet alleen snel van archeoloog op archeoloog worden doorgegeven, maar ook op een duidelijke, snelle manier aan het publiek gepresenteerd worden.

![Field survey](/doc/image6.png)

Ieder van de bovenstaande visualisaties heeft een dropdown balk om the selecteren welke data zichtbaar wordt gemaakt. Omdat het nog niet zeker is of de kaart interactief gaat worden, komt hiervoor in ieder geval een dropdown menu naar waarin uit de verschillende vakken kan worden gekozen.

In de visualisatie rechtsboven wordt weergegeven hoeveel vondsten van bepaalde types zijn gedaan in een vak, gelinkt aan het vak dat via de eerdere visualisatie is geselecteerd. Dit aan de hand van een barchart.

In de derde visualisatie, rechts-midden, geeft het scala en hoeveelheden aan vondsten per periode over het hele gebied.

Mocht het zo zijn dat de eerste visualisatie niet interactief gemaakt kan worden, dan kan er nog een vierde visualisatie hiervoor in de plaats komen. Deze weergeven in welke vakken zich de hoogste concentraties van vondsten uit een bepaalde periode zijn gevonden.

Rechts onder is niet echt een visualisatie, maar wel een eyecatcher in de zin dat het foto('s) weergeeft van de vondsten uit een bepaald vak in het gebied.

Links onder komt wat informatie over het gebied, het onderzoek, de locale geschiedenis en verwijzingen naar gerelateerd onderzoek.

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

![Find periods page](/doc/screenshot_findperiods_final.png)

