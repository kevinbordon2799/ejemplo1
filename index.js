const path = require("path");
const fs = require("fs");

const FILE_PATH = path.join(__dirname, "/kevin.json");

fs.readFile(FILE_PATH, function(err) {
    console.log({err});
});
