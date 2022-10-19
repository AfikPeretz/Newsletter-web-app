# Newsletter web app
## _Simple and useful guide_


[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

In this guide we will learn how to build a web application that will be used by us to manage and collect the contact Details of our customers in a database and use it later for our needs as business owners, page managers or for any Need.
So, what technologies are we going to use?

- Node.js
- Express.js
- Basic HTML, CSS
- Bootstrap
- API
- Heroku



## Assumptions

In this guide I assume that you have already installed Node.js, that you have a basic knowledge of HTML, CSS and That you have a basic knowledge of writing code.
If so, let's get started.

## First step - init and installations

1. Open a new project and choose a name for it.
2. Move the files I attached to the folder here into the project.
3. Open a terminal inside the project and run the following command - npm init, the terminal will start asking You how you would like to configure everything - just press enter and it will configure the deployment Settings for you - which will work just fine for us, you will know that you have finished configuring if a new Packgae.json folder has been created in the project And in the terminal the option to give new commands Will appear again.
4. Run this command in the terminal "npm i express body-parser request" - if it worked properly you will be Able to see the names of the dependencies we downloaded in packgae.json.

## Second step - Opening accounts
1. Open a Mailchimp account through the following link - https://mailchimp.com/
2. Open a Heroku account through the following link - https://signup.heroku.com/


## Third step - Opening accounts
Take the required keys from mailchimp.
If you open the app.js file you will see that there are places where you will need to complete 2 things:
1. API key
2. Audience id

To obtain the API key after opening the account, click on this link - https://us10.admin.mailchimp.com/account/api/.
After that, the site will require you to connect and then you will reach the page of creating an API key, create a key and update the key (the combination of numbers and letters that will appear under the words API key) in the required place in the app.js file.
Our next step will be to get the Audience id - to get it you will first need to create a new Audience list, and then if you register in the Audience search and choose the first option, a list of the lists you created will open for you, enter the settings of the list and go down to the end of the page, where the id you are looking for will be waiting for you .
It also needs to be updated in app.id where required (there are comments in the file that explain what each thing is).
One last thing that is very important to pay attention to, notice that at the end of your API key there is a dash and then "us" followed by a certain number, in the app.js file there is a constant called url, change the part of the number next to us in the url to the same number as they have in the API key.

## Fourth step - Edit the HTML files
So the newsletter I made is for a group of German shepherd dogs that I have that I keep my friends/clients up to date with. What content would you like to present to the client?
This is where the basic knowledge of HTML comes in, you are welcome to edit the files as you wish and continue with me to the stage of uploading our newsletter to the World Wide Web.























