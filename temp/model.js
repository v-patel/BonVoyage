const Papa = require("papaparse");
const fs = require('fs');

function insertionSort(array) {
  for(var i = 0; i < array.length; i++) {
    var temp = array[i];
    var j = i - 1;
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
  return array;
}

function getArrayForIndex(index) {
  var l;
  var tempArr = [];
  for(l = 1;l<parsedFile.length;l++) {
  tempArr.push(parseFloat((String)(parsedFile[l][index]).replace(",",".")));
  }
  return tempArr;
}

let social_support = 10;
let freedom = 10;
let corruption = 1;
let generosity = 10;
let life_expectancy = 10;

let region = 3;
let globe_regions = ["ASIA (EX. NEAR EAST)", "EASTERN EUROPE", "NORTHERN AFRICA", "LATIN AMER. & CARIB", "C.W. OF IND. STATES","OCEANIA","WESTERN EUROPE","NEAR EAST","NORTHERN AFRICA","BALTICS","SUB-SAHARAN AFRICA"];

let area_sq_ft = 10;
let population_density = 10;
let coastline = 10;
let migration = 10;
let infant_mortality = 10;
let literacy = 10;
let phones = 10;

let climate = 4;
let types_climate = ["Dry tropical or tundra and ice","Wet tropical","Temperate humid subtropical and temperate continental","Dry hot summers and wet winters"];

let profession = "";
let domains = ["Agriculture","Industry","Service"];


let data = fs.readFileSync("./world_data.csv","utf8");
let parsedFile;
Papa.parse(data, {
	complete: function(results) {
		parsedFile = results.data;
	}
});

let tempVariable;
let fileWithoutCountryAndHappiness = [];
var i;
let rowEntry = [];
for(i = 1;i<parsedFile.length;i++) {
  rowEntry = [];
  rowEntry.push(parseFloat((String)(parsedFile[i][6]).replace(",",".")));
  rowEntry.push(parseFloat((String)(parsedFile[i][7]).replace(",",".")));
  rowEntry.push(parseFloat((String)(parsedFile[i][8]).replace(",",".")));
  rowEntry.push(parseFloat((String)(parsedFile[i][9]).replace(",",".")));
  rowEntry.push(parseFloat((String)(parsedFile[i][11]).replace(",",".")));
  rowEntry.push(parseFloat((String)(parsedFile[i][14]).replace(",",".")));
  rowEntry.push(parseFloat((String)(parsedFile[i][15]).replace(",",".")));
  rowEntry.push(parseFloat((String)(parsedFile[i][16]).replace(",",".")));
  rowEntry.push(parseFloat((String)(parsedFile[i][17]).replace(",",".")));
  rowEntry.push(parseFloat((String)(parsedFile[i][18]).replace(",",".")));
  rowEntry.push(parseFloat((String)(parsedFile[i][20]).replace(",",".")));
  rowEntry.push(parseFloat((String)(parsedFile[i][21]).replace(",",".")));
  rowEntry.push(parseFloat((String)(parsedFile[i][25]).replace(",",".")));
  rowEntry.push(parseFloat((String)(parsedFile[i][28]).replace(",",".")));
  rowEntry.push(parseFloat((String)(parsedFile[i][29]).replace(",",".")));
  rowEntry.push(parseFloat((String)(parsedFile[i][30]).replace(",",".")));
  fileWithoutCountryAndHappiness.push(rowEntry);
}

let countryNames = [];
var j;
for(j = 1;j<parsedFile.length;j++) {
  countryNames.push(parsedFile[j][1]);
}

let countryScores = [];
let countryScore = 0;
var k;
for(k = 0;k<countryNames.length;k++) {
  countryScore = 0;
  countryScore = countryScore + social_support*(156-getArrayForIndex(6)[k]);
  countryScore = countryScore + freedom*(156-getArrayForIndex(7)[k]);
  countryScore = countryScore + corruption*(getArrayForIndex(8)[k]);
  countryScore = countryScore + generosity*(156-getArrayForIndex(9)[k]);
  countryScore = countryScore + life_expectancy*(156-getArrayForIndex(11)[k]);

  countryScores.push(countryScore);
  
}

console.log(countryScores);
var ind = 0;
var max = 0;
for(k = 0;k<countryNames.length;k++) {
  if(countryScores[k] > max) {
    max = countryScores[k];
    ind = k;
  }
}
console.log(countryNames[ind]);
