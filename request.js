//const request = require('request');
import request from 'request';
//const cheerio = require('cheerio');
import cheerio from 'cheerio';  //  use ESM imports 
//const chalk = require('chalk');
import chalk from 'chalk';

request('https://www.worldometers.info/coronavirus/country/india',cb);

function cb (error, response, html) {
    if(error){
        console.error('error:', error); // Print the error if one occurred
    }
    else{
        htmlHandle(html);
        // console.log('html:', html); // Print the HTML for the Google homepage.-->
    }
};
function htmlHandle(html){
let selTool = cheerio.load(html);
let contentArr = selTool('#maincounter-wrap span');
//console.log(h1s.length);
// [i] -> wrap setTool
/*for(let i=0 ;i<contentArr.length;i++)
{
   let data =  selTool(contentArr[i]).text();
   console.log("data ",data);
}*/
let total = selTool(contentArr[0]).text();
let deaths = selTool(contentArr[1]).text();
let recovered = selTool(contentArr[2]).text();
console.log(chalk.bold.red(` India Covid Cases :-`))
console.log( chalk.yellowBright("Total Cases ") + total );
console.log(chalk.red("Deaths ") + deaths );
console.log(chalk.green("Recovery ") + recovered );

}