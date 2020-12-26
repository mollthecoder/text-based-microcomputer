const {exec} = require("child_process");
const fs = require("fs");
console.log("Partial boot mode.");
console.log("Testing for partial boot mode compatible files...");
if(fs.existsSync("storage/executables/main.py")){
  console.log("Loading python3 file...");
  //exec("python3 storage/executables/main.py");
  console.log("python3 file partial boot is coming soon!");
}else if(fs.existsSync("storage/executables/index.js")){
  console.log("Starting node.js file...");
  require("../storage/executables/index.js");
}else if(fs.existsSync("storage/recovery.py")){
  console.log("Recovery file found. Starting...");
  exec("python3 storage/recovery.py", (err, stdout, stderr)=>{
    if(stderr){console.log(stderr)}else{console.log(stdout)}
  });
}else{
  console.log("No partial mode bootable file.");
}