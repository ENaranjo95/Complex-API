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
      // Takes the parameter usd and passes as an arguement
      var btc = usd / r.data[1].quotes.USD.price // Converts your usd funds into the the value as Bitcoin
      // Appends the value stored in btc to the html
      $('.BTC').append('<span>' + btc + '</span>')
      var xrp = usd / r.data[52].quotes.USD.price
      // Appends the value stored in xrp to the html
      $('.XRP').append('<span>' + xrp + '</span>')
      var ltc = usd / r.data[2].quotes.USD.price
      // Appends the value stored in ltc to the html
      $('.LTC').append('<span>' + ltc + '</span>')
      var eth = usd / r.data[1027].quotes.USD.price
      // Appends the value stored in eth to the html
      $('.ETH').append('<span>' + eth + '</span>')
    },
    error: function(err){
      console.log(err)
    },
  });
};
