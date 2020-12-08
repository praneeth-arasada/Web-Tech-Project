# Web-Tech-Project

This repo contains the files for our 3rd Sem Web Tech Project.
This file contains details on how to set up these files in order to be able to run the game.

If you want to know what this project does open the ppt file present here it will tell you about the game in more details
Also info about the technologies used and the creators info is mentioned

Now the other two folder game and client present here are the files you will need.
the game folder represents the backend server and the client helps in implementing the frontend 
which can be replicated for any number of users

So lets Start:

Before doing Any of these steps ensure that you have node and mongoDB installed on your system and is working properly

1)Backend: 

    i)make a new folder call it 'temp' in your system 
    ii)Then open a command prompt(cmd) in that folder
    iii)Then run the command 'npm init'
    iv)Now download the game folder 
    v)Copy the 'node_modules' folder from 'temp' and paste it into the game folder
    vi)Finally open a cmd in the game folder and run the command 'npm install'(Ensure you are connected to the net)


2)Frontend:

    i)Open a command prompt(cmd) in any directory in your system  
    ii)Run the command 'npx create-react-app temp2' (a folder called temp2 should get created)
    iii)Now download the client folder 
    iv)Copy the 'node_modules' folder from 'temp2' and paste it into the 'client/player' folder
    v)Finally open a cmd in the 'client/player' folder and run the command 'npm install'(Ensure you are connected to the net)



To Run The Code:

    1)Open a cmd for the game folder and run 'npm start'
    2)Open a cmd for the 'client/player' folder and run 'npm start'
 
This will start the game and open it in your default browser
Now play and enjoy the game!
