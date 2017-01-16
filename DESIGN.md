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
	- Campain year; Site ID; Find type; (Ceramic) Ware; Number (of vinds); Weight; Era;

## Visualisation 1: *Map of the area*

- Map of the research area, overlay with a grid
- grid shows the defined areas that have been surveyed
- each polygon of the grid is color coded to indicate the find density
- Will have (at least innitially) a drop down to select a specific area to examine in visualisation 2

## Visualisation 2: *Barchart of the different amount of vinds per selected square*

- This needs to show at least two variables, namelijk the different types of vinds and their amounts
- Will initially show the total amount of vinds of the entire area, but will change according to the selected polygon in Vis1
- Also linked to this is the image database. This will initialy show a random or prominent vind of the entire assemblage, but will change according to the highlighted polygon.
- Further changes and datamanipulation will be possible for the user via a slider. However, what this will actually be changing will strongly depend on the research aims of the project which data i will be using

## Visualisation 3: *Diverging bar chart*

- Must finds should have, at least, a rough dating attached to them. This visualisation is meant to convey the relation between the amount of find, their type and their date. This way, the user can compare the amount of find per area to their historical period.

## Visualisation 4: *Nog niet duidelijk wat*

- Een manier om toch weer te geven weer te geven waar in het gebied vondst hoge vondstconcentraties zijn gevonden.
- Deze moet ook onderscheid kunnen maken in het weergeven van vondsten uit verschillende perioden.

## Images

- shows an image of the the vinds done in a specific spot, selected via vis1
