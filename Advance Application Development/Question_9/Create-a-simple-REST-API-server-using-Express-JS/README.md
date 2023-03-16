## Create a simple REST API server using Express JS.

1. First, create a new directory for your project and navigate to it in your terminal:

        mkdir express-rest-api
        cd express-rest-api


2. Initialize a new `Node.js` project:

        npm init -y 

3. Install `Express`:

        npm install express

4. Create a new file called `server.js` and add the following code:

    ```js
    const express = require("express")
    const app = express()

    app.get("/", (req,res)=>{
        res.send("Hello world")
    })

    app.post("/", (req,res)=>{
        console.log(req.body)

        res.send(req.body)
    })


    app.listen(3000, ()=>{
        console.log("Listening on port http://localhost:3000")
    })
    ```

5. Start the server by running the following command:

        node server.js
