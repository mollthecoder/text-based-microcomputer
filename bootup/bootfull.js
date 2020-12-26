const fs = require("fs");
const readline = require("readline");
const {exec} = require("child_process");
var apps = fs.readdirSync("storage/executables");
console.log("\nApps:\n");
apps.forEach(value=>{
  if(value!=="system-addons"&&value!=="echo")console.log(value);
})
rl = readline.createInterface({input:process.stdin, output:process.stdout});
rl.question("\nEnter an app name:\n", ans=>{
  if(ans==="exit") process.exit(0);
  if(fs.existsSync(`storage/executables/${ans}`)){
    if(fs.existsSync(`storage/executables/${ans}/main.py`)){
      console.clear();
      exec(`python3 storage/executables/${ans}/main.py`, (error, stdout, stderr)=>{
        if(stderr){
          console.log("Error: "+stderr)
        }
        console.log(stdout);
      });
      rl.close();
    }else if(fs.existsSync(`storage/executables/${ans}/index.js`)){
      console.clear();
      require(`../storage/executables/${ans}/index.js`);
      rl.close();
    }else{
      if(ans==="hidden apps"){
        console.clear();
        require("./hiddenapps")
      }else{
      console.log("App is missing it's executable files.");
      }
      rl.close();
    }
  }else{
   console.log("App does not exist.");
   rl.close();
  }
});