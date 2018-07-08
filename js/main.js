var apiURL = 'https://blockchain.info/ticker';
var apiURL2 = 'https://api.coinmarketcap.com/v2/ticker/';

// Function that passes 'funds', 'buyPrice', 'sellPrice' as parameters
function bitcoin(funds, buyPrice, sellPrice){
  // Converts any of the currency selections into bitcoin
  var btcValue = funds / buyPrice
  // Converst Bitcoin back into USD cash value
  var cash = btcValue * sellPrice
  // Calls on the options function/2nd API, passes the arguement cash
  options(cash)
};
// Event listener for the convert button
$('#convert').on('click', function(currency){
  //Takes the option value attribute and stores it into the variable currency
  var currency = $('select').val();
  //Takes the numerical value from the input and stores into the variable funds
  var funds = parseFloat( $('#money').val() );
  // Removes the span append on the html
  $('span').remove()
  $.ajax({
    url: apiURL,
    success: function(res){
      console.log(res);
      // Takes the value from the property 'buy' and stores it in the buyPrice variable
      var buyPrice = res[currency].buy
      // Takes the value from the property 'sell' and stores it in the sellPrice variable
      var sellPrice = res['USD'].sell
      // Calls on the bitcoin function, passes 'funds', 'buyPrice', 'sellPrice' as parameters
      bitcoin(funds, buyPrice, sellPrice);
    },
    error: function(er){
      console.log(er);
    },
  });
});
// 2nd API, the arguement cash is passes as an parameter "usd"
function options(usd){
  $.ajax({
    url: apiURL2,
    success: function(r){
      console.log(r)
      // var cc = $('#crypto').val()
        // Converts your usd funds into the the value as Bitcoin and then displays in the DOM
      $('#btc').html(usd / r.data[1].quotes.USD.price)
        // Converts your usd funds into the the value as Ripple and then displays in the DOM
      $('#xrp').html(usd / r.data[52].quotes.USD.price)
        // Converts your usd funds into the the value as Litecoin and then displays in the DOM
      $('#ltc').html(usd / r.data[2].quotes.USD.price)
        // Converts your usd funds into the the value as Ethereum and then displays in the DOM
      $('#eth').html(usd / r.data[1027].quotes.USD.price)
    },
    error: function(err){
      console.log(err)
    },
  });
};
