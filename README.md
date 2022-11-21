# Shakespeare Audition App
### Or, A Player's Foul Papers 

## Why do we need this?

This app is for the all the aspiring actors out there running to and fro, hoping for the ever elusive "callback" and make their name on the stage. But when does the busy actor have time to prepare all the monologues they'll need for all the impromptu auditions ("Get there in 20!") that are always 40 minutes away? Well, they don't. Until now! This app will help the busiest of actors tuck more of those essential roles "under their belt" to crush their next audition and amaze the director.

## What it does?

- Allows users to collect and save audition cards of monologues (like the roll scripts of the early modern period that became the "roles" actors embody today - they also, literally, tucked them under their belt when they finished memorizing) with key information; the play, the character, the scene, and the text.

-Allows users to submit new monologues into their audition collection, as well as, removing any unwanted audition cards.

-Allows users to "star" or "favorite" an individual monologue as important.

-Allows users to "heart" or "like" an individual monologue as beloved.

-Allows users to search the app's database for more selections. (mostly non-functional)

https://github.com/maryellison/shakespeare_audition_app/blob/master/shakespeareapp.png


## How to run it?

### Start up the server

All of the monologue data is stored in the `db.json` file. You'll want to access this data using a JSON server. Run `json-server --watch db.json` to start the server.

[live-server]:
  https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
[live-server settings]:
  https://gist.github.com/ihollander/cc5f36c6447d15dea6a16f68d82aacf7

This will create a server storing all of our lost toy data with restful routes at `http://localhost:3000/monologues`. You can also check out the information for each individual monologue at `http://localhost:3000/monologues/:id`, e.g. `http://localhost:3000/monologues/1`

Open a second tab in the terminal then open `index.html` in the browser and take a look at the page. The CSS has all been provided for you so that, when you create the audition cards to display each monologue, you just need to add a CSS class to style them.

If you click on the "Add a newe monologue!" button, you'll see that it exposes a form where the user can submit information for a new audition card. To re-hide the form, click the button a second time.

### Warning:
this app is a work in progress and not the playhouse powerhouse it'll be when it grows up.
