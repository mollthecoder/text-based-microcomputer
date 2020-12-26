const {spawn} = require("child_process");
const fs = require("fs")
var node = spawn("node", ["bootup/bootfull.js"]);
node.stdout.on("data", data=>console.log(data.toString().replace("\n","").replace("\n","")));