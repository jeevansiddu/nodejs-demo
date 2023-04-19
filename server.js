// const http = require("http");
// const { hostname } = require("os");
// const HOSTNAME = process.env.HOSTNAME || "localhost";
// const PORT = process.env.PORT || 3000;

// const server = http.createServer((request, response) => {
//   response.statusCode = 200;
//   response.setHeader("Content-Type", "text/plain");
//   response.end("Hello World");
// });

// server.listen(PORT, HOSTNAME, () => {
//   console.log(`Server Running at http://${HOSTNAME}:${PORT}`);
// });

const fs = require("fs");
// fs.readFile("sample.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   } else {
//     console.log(data.toString());
//   }
// });

// try {
//   const data = fs.readFileSync("sample.txt", "utf8");
//   console.log(data);
// } catch (e) {
//   console.error(e);
// }
// console.log("hella after");
const data = "\nwriting to a file";
// fs.writeFile("hi.txt", data, { flag: "a" }, (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   } else {
//     console.log("Process completed");
//   }
// });
// try {
//   fs.writeFileSync("hi.txt", data);
//   console.log("completed");
// } catch (e) {
//   console.log(e);
// }
// fs.appendFile("hi.txt", data, (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   } else {
//     console.log("Process completed");
//   }
// });
// fs.rename("hi.txt", "new name", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   } else {
//     console.log("File renamed");
//   }
// });
// fs.unlink("new name", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   } else {
//     console.log("File deleted");
//   }
// });

// const addNums = require("./addnums");
// const sum = addNums(2, 3);
// console.log(sum);

const http = require("http");
const PORT = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  res.setHeader("Content-Type", "text/html");
  res.write("Hello Wold");
  let path = "./";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    default: //page redirection
      //or
      // res.setHeader("Location", "./");
      // res.statuscode = 301;
      path += "404.html";
      res.statusCode = 404;
  }
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      return;
    } else {
      res.write(data);
      res.end();
    }
  });
});
server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
