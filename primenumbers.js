var fs = require('fs');
var outfile = "results.txt";


var out = "";
fs.writeFileSync(outfile, out);  
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);