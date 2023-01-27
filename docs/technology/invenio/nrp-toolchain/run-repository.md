---
sidebar_position: 2
---
# Test-run the repository

Go to the repository directory and run:

```bash
./nrp-cli run
```

After a couple of seconds, your new (and empty) repository will pop up at [https://localhost:5000/](https://localhost:5000/).


Initially, the repository has no index page. If the call above gives an <span style={{color: "red", fontWeight: "bold"}}>Internal server error</span> with 
"RecursionError: maximum recursion depth exceeded in comparison" output on command line, please restart the server (the error is non deterministic so you might
have to do it multiple times) and try again.

This error will be removed later when UI is installed.

