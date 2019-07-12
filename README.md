# Burger

Burger is a Node.js app using the express package as a server, a MySQL database to store the data, and the handlebars package to serve the HTML page.  The program shows two lists: Burgers to Consume and Devoured Burgers.  At the start all burgers are ready to consume, and as more burgers are consumed the list grows larger on the devoured burgers side.  The devoured burgers can be reordered to be consumed again.

Additionall, the user may add new burgers to the list by entering in a Burger Name, selecting the starting state of the burger(either Devoured or Ready to Eat) and clicking on Order Burger.  


## Getting Started

Burger is deployed via Heroku.  A direct link for the Heroku can be found here: https://jl2cburgerapp.herokuapp.com/

Files and other information can be found on GitHub here: https://github.com/JoeLearns2Code/FriendFinder

### Prerequisites

The data can be pulled directly from GitHub via GitBash on PC or via Terminal on Mac.  If you are new to this process, please follow the directions below:

When you have accessed the repository page on GitHub, you may simply download a Zip file and extract it to a directory of your choosing.  Alternatively, you may download the data directly to your device via GitBash if you have an SSH key.  More on adding an SSH key can be found here: https://help.github.com/en/enterprise/2.15/user/articles/adding-a-new-ssh-key-to-your-github-account

To download via GitBash, once you have a working SSH key with GitHub, create a folder you wish to download data into.  Next, click on the green 'Download or Clone' button on the GitHub respoitory page.  Make sure you have SSH key selected(and not HTTPS), and click on the clipboard icon.  This copies the address to your clipboard.

Next, navigate to the folder you wish to download the data into via GitBash or Terminal, and then simply type "git clone" followed by the link you copied onto your clipboard(paste via ctrl/cmd+v).  Press the enter key, and GitBash will pull the entire repository into your folder.

Additionally, you will need to have Node.js installed.  This can be done here: https://nodejs.org/en/


### Installing

Once you have the repository cloned, you will need to install a number of npm packages before you can begin using the program.  

Begin with adding a folder for node_modules by typing the following in the command line: npm init -y

Next you will need to install each package used for Friend Finder.  This can be done by typing each of the following into the command line:

* npm install
* npm install express
* npm install express-handlebars
* npm install mysql

It is also highly reccomended to have nodemon installed.  This is a global package which can be installed as follows:

* npm install -g nodemon

You will then need to build the burgers_db database found on schema.sql, and then add the starting data provided in seeds.sql.  This can be accomplished either through the MySQL Workbench or in the command console by typing: mysql -u root -p, and then entering your password when prompted.

In order to ensure the database will be connected correctly, you will need check the parameters in the connection.js file.  Make sure the port and password match with your localhost settings on MySQL Workbench.


## Instructions

Navigate to the folder location where the server.js found in the console.  Type "nodemon server.js" in the command line.  You should receive a message that it is now listening on port 8080.  If you wish to change this port, you will need to adjust this in the server.js file.

In your browser, navigate to localhost:8080(or whichever port you chose).  You should now see the main page for Burger.  Here you will see three sections: Burgers To Consume, Devoured Burgers, and Order a New Burger.

When a burger is on the Consume side, click on DEVOUR to eat it.  It will now move to the Devoured section.  When you want to move a Devoured burger back to the Consume menu, click on ORDER MORE.

Lastly, if you would like to add a new burger to the list, enter in a Burger Name in the provided input field and click on Order Burger.  You may choose whether the new burger begins devoured or ready to eat.


## Testing

HTML files can be validated here: https://validator.w3.org/#validate_by_input

The API & routing aspects of this program can be tested through use of the command console(GitBash/Terminal, etc.).  Simply add console.log under any section you wish to examine the results from in the console.


  


## Deployment

Navigate to https://github.com/ to clone.  Carefully follow the installation instructions above.


## Built With

Visual Studio Code: https://code.visualstudio.com/  
Node.js: https://nodejs.org/en/
Heroku: https://dashboard.heroku.com

## Contributing

Feel free to fork the repository for your own study.  If you would like to learn more about how I constructed this project you may also message me via GitHub.


## Versioning

Use github for version control (https://github.com/your/project/tags).


## Author

* **Joe Hutchinson**


## Acknowledgments
 
* Joe Rehfuss
* Trae Shanks
* Lan Truong

Thank you again to my Coding Boot Camp instructors for all of the support and constructive feedback.