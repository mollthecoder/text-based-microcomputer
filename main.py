from os import system as exec
print("Starting system...")
exec("node start/cleartemp.js")
exec("python3 start/allowexe.py")
exec("python3 bootup.py")