const neatCsv = require('neat-csv');
const fs = require('fs');
function readCsv() {
    fs.readFile('./data.csv',async(err,data) => {
        if(err) {
            console.log("read csv file content failed" +err);
            return
        }
        console.log(await neatCsv(data));
    })
}


readCsv();
