# Project473

jquery-comments
jquery-ui
bootstrap
* Start Bootstrap - Creative v3.3.7+1 (http://startbootstrap.com/template-overviews/creative)
https://www.pexels.com/photo/access-adult-blur-business-261628/

---------------------------------------------------------------------------------------------------

Setup Instructions for Snark-A-Boss:

1) Open up a command line (either in Mac/Windows/Linux) and navigate into the same folder/directory Project473 is located in
2) Within the directory, run the following commands to get the project up and running:

To start the backend server for the project, run the following command (Same instructions given from Assgnmt 8)

     json-server --port=3002 --watch data/db.json


To run automation tool for web development, run the following command:

    browser-sync start --server --files "*.html, css/*.css, js/*.js"

** Run both commands to have website/project running


# Using the Web App

-  In landing page choose Find Boss or Add Boss
  - Find Boss
    - Above the comment input field start typing your boss's name and see if it autcompletes! If it Doesn't then it doesnt exist
    - If it exists then start choose that boss and start snarking!
  - Add Boss
    - Type your boss's first and last name and add your boss! If they exist then it will redirect you to their comment page
  - Commenting
    - Just start commenting on the your boss's page and you're good to go!
