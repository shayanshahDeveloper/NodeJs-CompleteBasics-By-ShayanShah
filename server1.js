import http from "http";
const PORT = process.env.PORT || 8040;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.end("<h2>Welcome to the Homepage</h2>");
  } else if (req.url === "/about") {
    res.setHeader("Content-Type", "text/html");
    res.end("<h2>Welcome to the About Page</h2>");
  } else {
    res.writeHead(404, "Not Found", { "Content-Type": "text/plain" });
    res.end("404 page not found");
  }
});

server.listen(PORT, () => console.log(`Server is Running on the Port ${PORT}`));
