const fs = require("fs");
const {spawn} = require("child_process");
async function execute_python(code){
  fs.writeFile("storage/temp/exec.py", code, ()=>{
      let ls = spawn("python3", ["storage/temp/exec.py"]);
      let output = "";
      let err = "";
      ls.stdout.on("data", data=>{
        if(output!=="") output+="\n";
        output+=data;
        });
      ls.stderr.on("data", data=>err+=data);
      ls.on("close", () => {
        if(err===""){
          return output;
        }else{
          return err;
        }
      });
  });
}
module.exports = {execute_python};