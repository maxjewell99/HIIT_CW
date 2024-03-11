
# up2116976 - HIIT CW

## Key Features
### Creating a workout section (Timer Box)
* Timer
    * Users can enter a time range that want for their set activity within their workout

    * When the time reaches 0 the timer will change to "Times up!" 

    * Currently the timer starts immediately just for testing purposes

    * Has got an issue with counting down too fast over 1 minute but will be ammended upon final submission


* Input fields
    * Users can enter the name of their workout, as well as the activity and the description of said activity 

    * Submit button will send this information to a function 'submitActivity()'

    * This function will take the values of the input fields and will be parsed into the 'displayWorkout()' function

    * Finally within the 'submitActivity()' function it will call the 'clearInputFields()' function, this will clear the input fields of the Timer section


### Custom Workout Section
* Workout Grid 
    * From the Timer section the 'displayWorkout()' function is called
    
    * All values from the input fields previously are parsed into this function
    * A grid is initalised in which each of the parsed values are placed into 'span' elements to be displayed for the user

    * When looking at the grid, there are headings for each column

    * Edit button is non-functional at the moment as I need to look more into the simple message-board work

    * When the user clicks the save button at the bottom of the grid, 'displaySelectCustomWorkout()' is called

    * Finally 'clearCustomWorkoutBuilder()' is called upon saving your workout, which will clear the workout grid

    * 'getWorkoutData()' is a working function that collects the users workout and saves it into a list, however I am not using it at the moment


### Select Custom Workout Section
* Select Custom Workout Grid
    * After the user clicks save from the previous section, the name of the users workout will be parsed through to the 'displaySelectCustomWorkout()' function

    * This function will create a grid of buttons in which the user created workouts will be displayed with the name of the workout present on the button

    * The buttons are not functional as of prototype submission but will do upon final submission


### Current issues and future implementations
* Issues
    * As stated before the timer feature if longer than a minute will not function as it should but I believe after looking at it properly should not be a big problem to fix

    * When the user is creating multiple activites the workout name will become empty and would have to input the workout name again upon entering their last activity
        * This is due to the input field being updated each submission but this can be ammended

    * Apart from the title and heading of the webpage, the section (boxes) are not centered correctly, after fidling about with CSS this won't be a problem to fix

* Future implementations, as of current
    * Implement database and server 

    * Save workouts to database so its not saved locally, and so I meet the requirements obviously

    * Once a user selects a pre-made custom workout, I want to make templates for where the Timer section is so it will switch to display the selected workout with a proper implementation of a timer with audio/visual queues etc...

    * Login system, so multiple users can use the webpage


## Use of AI
### Understanding JavaScript
* Keywords/Attributes
    * I have used AI during this coursework to help me understand some of the attributes JavaScript as this is my first time looking and using JavaScript as a whole. 

    * For example, the '.split' attribute. I needed to know how to divide the values in the time input field so I can workout the totalSeconds. Asking AI made finding this out alot quicker as well as an explanation of how it works with an example.

    * Another example is for when I needed to implement a grid. I asked the model to provide an example of how the grid works. This was a massive help

* Function review
    * I was implementing the grid within the 'displayWorkout()' function and was appending the variables into the grid. However I was using '.appen' to achieve this, and to my surprise...it didn't work. I gave the AI the function and asked if it knew the issue and what the best solution was. It gave back information that I was using the wrong method and I needed to use '.appendChild' instead as within the grid it is viewed as a child/parent relationship.

    'In JavaScript, the appendChild() method is used to add a node to the end of the list of children of a specified parent node. The append() method, on the other hand, is used to append nodes or DOMString objects to the end of the specified parent node.'