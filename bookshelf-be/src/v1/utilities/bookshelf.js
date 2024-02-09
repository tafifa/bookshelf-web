const fs = require("fs");

const saveToDatabase = (DB) => {
  fs.writeFileSync("./src/v1/models/bookshelf/books.json", JSON.stringify(DB, null, 2), {
    encoding: "utf-8",
  });
};

module.exports = { saveToDatabase };