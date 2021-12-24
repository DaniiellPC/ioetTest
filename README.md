# ioetTest
This a repository for the ioet Senior and Mid-Level Software Developer position

# solution overview:

I tried to manage the solution as simple as possible, I use the fs node library to read asyncronously  
the file with the input data,then I clean up the data deleting line breaks and others.  
I filter the names and the schedules into arrays and then I go trought these array finding the matchs  
for every person and day.

I use a basic NodeJs architecture.

# To build and run the project, follow the next steps:

1. Clone this repository.  
2. Enter into the repository root via cmd and run the command 'npm i'. This will install the node modules dependencies.  
3. There's a schedule.txt file with the input data taht you can edit adding the person's name and schedule as you need.  
3.1. To avoid errors reading the data please be careful with this sintaxis:  
3.1.1 Every new person must have a new line.  
3.1.2 The person's name and their schedule must be separeted by the equal(=) sign.  
3.1.3 For the person's schedule, every day must be separeted by comma(,) sign.  
5. Enter into de /src folder and run the command 'node app.js' then you can see the output of the solution.  
6. To run the unit testing, run the command 'jest app.js'  

i.e. for the input data:

RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00  
ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00  
ANDRES=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00  
DANIEL=MO10:00-12:00  
