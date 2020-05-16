//// CLI CODE FOR GETTING WEATHER AND THE LATITUDE AND LONGITUDE OF A LOCATION USING WEATTHERSTACK AND MAPBOX API??????????????????????????/
const request =require('request');
const geocode= require('./geocode.js');
const forecast= require('./forecast.js');
// if you want to run these PLEASE COMMENT OUT THE UPPER CODE
const add=process.argv[2]
/////////////////
// these are the callback function that are provided from the
// geocode.js
if(!add)
{
    console.log('ERROR')
}
else{
    geocode(add,(error,data)=>{
        if(error)
        {
            return console.log('ERROR')
        }
        // forecast.js
        // here i have done callback chaining which is bascially providing the
        // output of the geocode.js to the forecast.js and we dont need to give any separate input to the forecast.js
        forecast(data.lat,data.lon,(error,fdata)=>{
            if(error)
            {
                return console.log('Error')
            }
            console.log(data.loc)
            console.log(fdata)
    })
    })
}