# ioetTest
This a repository for the ioet Senior and Mid-Level Software Developer position

To see the result of the solution, follow the next steps:

1. Clone this repository.\n
2. Enter into the repository root via cmd and run the command 'npm i'. This will install the node modules dependencies.\n
3. There's a schedule.txt file with the input data taht you can edit adding the person's name and schedule as you need.\n
3.1. To avoid errors reading the data please be careful with this sintaxis:\n\n
3.1.1 Every new person must have a new line.\n
3.1.2 The person's name and their schedule must be separeted by the equal(=) sign.\n
3.1.3 For the person's schedule, every day must be separeted by comma(,) sign.\n
5. Enter into de /src folder and run the command 'node app.js' then you can see the output of the solution.\n
6. To run the unit testing, run the command 'jest app.js'\n

i.e. for the input data: \n

RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00\n
ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00\n
ANDRES=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00\n
DANIEL=MO10:00-12:00\n
