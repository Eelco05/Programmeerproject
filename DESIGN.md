# Design

## What do i need?

- data
- 3/4 visualisations
- brief description of the area and its history
- research goals
- links to other relevant research
- (optional) find pictures

## Think about

- what is the story i'm telling? Depends on the data, but will likely be the story of the research area

## Data

<!-- - data will be a combination of MS access database, shapefiles, ESRI Geodatabase, .tiff images (often RAW)
- to restructure and use this data for visualisations is going to take some time
- best suggested way of doing so will probably be to convert seperate elements of the database to json files
- shapefile might be used to create the first visualisation -->
- Data is an access database about the finds done in three years of the Sacred Landscapes Project.
More about these projects <a href="http://www.surveyarchaeology.eu/Sacred+Landscape+Project"> here </a> and <a href="https://landscapesofearlyromancolonization.com/fieldwork/slp/">here</a>
- Variables i can work with:
	- Campaign year; 2004, 2005, 2008 
	- Site ID; G14, G17, S
	- Find type; CER, GLA, MET, STO, VAR
	- (Ceramic) Ware; +/- 30 types
	- Number (of finds); (need to be added, stil per unit) (multiples of 1 unit, why? need to ask)
	- Weight; (not all units have a weight)
	- Era; 13 different units, of which about half is a range between two periods
- What i can visualize:
	- Total/weight finds per Campaign year/Site/Era;
	- Find types per Site/Era
	- Amount of different ceramic wares

## Map of the area

<!-- - Map of the research area, overlay with a grid
- grid shows the defined areas that have been surveyed
- each polygon of the grid is color coded to indicate the find density
- Will have (at least innitially) a drop down to select a specific area to examine in visualisation 2 -->
- Map will be interactive, but not really functional other that showing the google maps API with a marker on the research area
- Drop down to zoom into the two main research area's
- Maybe highlight surveyed area as a polygon, if coördinates becaume available and i have time to implement this

## Visualisation 1: **

<!-- - This needs to show at least two variables, namelijk the different types of vinds and their amounts
- Will initially show the total amount of vinds of the entire area, but will change according to the selected polygon in Vis1
- Also linked to this is the image database. This will initialy show a random or prominent vind of the entire assemblage, but will change according to the highlighted polygon.
- Further changes and datamanipulation will be possible for the user via a slider. However, what this will actually be changing will strongly depend on the research aims of the project which data i will be using -->

## Visualisation 2/3: *Connected pie and barchart*

<!-- - Must finds should have, at least, a rough dating attached to them. This visualisation is meant to convey the relation between the amount of find, their type and their date. This way, the user can compare the amount of find per area to their historical period. -->
- Piechart shows the percentages of the different types of finds
	- CER will take up about 98%
	- Others will combine to abvout 2%
	- Both will be clickable
		- When clicking on CER, it will update to show the different ceramic wares
		- When clicking on Other, it will show the

## Visualisation 3: *Not Clear*



## Images

- shows an image of the the vinds done in a specific spot
- don't have the images yet, can ask for them if i have time to implement this
