const fs = require("fs");
if(fs.existsSync("storage/temp")){
  fs.readdirSync("storage/temp").forEach(val=>{
    fs.unlinkSync(`storage/temp/${val}`);
  });
}