var allowOrigin = "https://cors-anywhere.herokuapp.com";
var serverURL = "http://dalwadee.com/kc";
var gold999RateChange = 0;
var gold22kRateChange = -1000;
var silverRateChange = 0;

$.ajax({
    type: 'GET',
    url: serverURL + '/getRateChange.php',
    dataType: "json",
    async: false,
    crossDomain: true,
    processData: false,
    cache: false,
    success: function (response) {
        gold999RateChange = parseInt(response.gold999);
        gold22kRateChange = parseInt(response.gold22k);
        silverRateChange = parseInt(response.silver);
    }
});

