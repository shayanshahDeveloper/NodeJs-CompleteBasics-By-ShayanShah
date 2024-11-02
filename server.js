import http from "http";

const PORT = process.env.PORT || 8040;

const server = http.createServer((req, res) => {
  // Set Header for Data
  res.setHeader("Content-Type", "text/html");

  // Set Header along with Status code
  res.writeHead(201, { "Content-Type": "text/html" });

  res.write("<h1>Welcome to the Wesbite</h1>");

  // You Can aslo pass your Data in end() Statement Like..
  res.end("<h2>Data from the End..</h2>");

  res.end();
});

server.listen(PORT, () => {
  console.log(`Server is runnig on the Port ${PORT}`);
});
