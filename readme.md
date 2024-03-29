# Music Tracker

## Goals

- save music listening in a MongoDB database
- add entries using a web interface or web app
- entries should be expandable, able to add new things in the future
- create an import from/export to csv function
- view database contents:
  - display by album and artist
  - filter by genre, subgenre, label, etc.
- add a log in page so that I can control who has write access

## Stretch Goals

- user databases so that other people can make their own listening databases
- interface with library APIs such as Discogs, Bandcamp, or MusicBrainz APIs to get suggestions for entry fields, such as label and subgenre
- integrate album art from some source, e.g. [MusicBrainz](https://musicbrainz.org/doc/Cover_Art_Archive/API) API

## Tech Stack

- goal is to use MERN stack
- database: mongodb
- front end: start with vanilla HTML/CSS
- eventually use React for front end
- express.js for server side things

## Backend

- Example format:

```csv
artist, album, year, genre, subgenre (array), label, country of origin, on spotify or not (bool)
```

## Front End

Overview:

- main page presents data
- have an add entry option
- have an edit entry option
- have a login page
  - edit and add only available once logged in
