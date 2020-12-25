from os import system as exec
#print('[fork this repl] To change boot mode, write to the bootup.py file. First, import os. Then, if you want to run in full mode, call os.system("./full"). Otherwise, call os.system("./part")')
print("Starting system...")
exec("node start/cleartemp.js")
exec("python3 start/allowexe.py")
exec("python3 bootup.py")