import express from "express";
import fs from "fs";

const app = express();

const books = [
  { title: "吾輩は猫である", author: "夏目漱石" },
  { title: "こころ", author: "夏目漱石" },
  { title: "坊つちやん", author: "夏目漱石" },
  { title: "舞姫", author: "森鴎外" },
  { title: "高瀬舟", author: "森鴎外" },
];

app.use(express.static("static"));

app.get("/send", (request, response) => {
  const selectedBooks = books.filter(
    (book) => book.author === request.query.author,
  );
  const html_template = fs.readFileSync("./send.html");
  const html = html_template.replace(
    "{books}",
    selectedBooks.map((book) => `<li>${book.title}</li>`).join(""),
  );
  response.send(html);
});

app.listen(3000);
