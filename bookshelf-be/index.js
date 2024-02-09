// packages
const express = require("express"); 
const bodyParser = require("body-parser");

// import routes
const BookshelfRouter = require("./src/v1/routes/BookshelfRoutes");
const UserRouter = require("./src/v1/routes/UserRoutes");

const app = express(); 
const PORT = process.env.PORT || 3000; 

// middleware
app.use(bodyParser.json());

// routes
app.use("/api/v1/bookshelf", BookshelfRouter);
app.use("/api/v1/user", UserRouter);

app.listen(PORT, () => { 
    console.log(`API is listening on http://localhost:${PORT}`); 
});
