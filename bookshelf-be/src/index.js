// In src/index.js 
const express = require("express"); 
const bodyParser = require("body-parser");

const v1BookshelfRouter = require("./v1/routes/BookshelfRoutes");

const app = express(); 
const PORT = process.env.PORT || 3000; 

app.use(bodyParser.json());
app.use("/api/v1/bookshelf", v1BookshelfRouter);

app.listen(PORT, () => { 
    console.log(`API is listening on http://localhost:${PORT}`); 
});