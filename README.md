# 19 Progressive Web Applications (PWA): Text Editor
[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)

## Description

This is a single-page application text editor that runs in the browser using the the Progressive Web App criteria. Additionally, the application will function offline so the user can retrieve their input.

In this application I implement methods for getting and storing data to an IndexedDB database by using `idb` which is a lightweight wrapper around the IndexedDB API.

I deployed this full-stack application to Heroku. The URL link is provided at the bottom of this file along with the GitHub Repository link. 

## Image of Deployed Application
<img width="835" alt="PWA" src="https://user-images.githubusercontent.com/107374333/213848340-b2c28d43-df52-4ed7-8393-4d8e9c8b83d5.png">

## Addtional Information

Node Package Manager was used for the installation of this application. NPM is an open-source software registry with over 800,000 packages and is intalled using Node.js. 

Node.js is  asynchronous event-driven JavaScript runtime designed to build scalable network applications. All NPM packages are defined in files called package.json, which is written in JSON. 

NPM can manage dependecies which are also defined in the package.json file.

## NPM Packages Used
IBD
Webpack
Babel
CSS-loader
IndexedDB
Express.Js 


## Main Purpose of the Project

```md
Create notes or code snippets with or without an internet connection
in order to retrieve them for later use
```

## Functionality Explained

```md
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client

WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack

WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file

WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors

WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage

WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB

WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB

WHEN I click on the Install button
THEN I download my web application as an icon on my desktop

WHEN I load my web application
THEN I should have a registered service worker using workbox

WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets

WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application
```

### Link to the Heroku URL and instrutions 
```md
The link to the application was on Heroku but is no longer available. I will add a new link soon.
```




