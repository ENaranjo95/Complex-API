# My Awesome Project
This project is a complex API. This runs two APIs that displays the top 4 highly traded crypto currency.

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, API

This was an awesome project to build. This was a complex API that starts when the user clicks on the button. To start we listen for the event listener, the click of the button, then the value from the input tag and the select tag get stored in local variables, this also starts our first API. Using the value from our select tag to search for the corresponding foreign currency and pulls the buy price for bitcoin, and the selling price for bitcoin to USD and stores in a local variables. Then we call on the function that will that will pass the value of the input, the buy price and sell price variables as parameters in the function bitcoin(). The bitcoin function then takes these parameters and finds how much bitcoin is valued in the selected foreign currency, stores that in a local variable, then our bitcoin value is converted into how much its worth in USD and stores that in a local variable.

Our final function options() takes the local variable of USD and passes that as a parameter to call on our second API. In the second API we hard coded to get the top 4 trade cryptocurrency, in terms of market value, and take the parameter and divide it by the price of each coin. The values are then displayed in the DOM for the user to see how much of his invest for each foreign currency would it be valued for each coin. 

## Optimizations

I want to include a select tag for all the coins available in the API and not restrict it to only the 4 coins displayed.

## Lessons Learned:

I learned to use less global variables and use local variables to pass their values in functions as parameters.
