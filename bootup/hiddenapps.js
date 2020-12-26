const fs = require("fs");
var apps = fs.readdirSync("storage/executables");
console.log("Hidden Apps:\n");
apps.forEach(value=>{
  if(value==="system-addons"||value==="echo")console.log(value);
})