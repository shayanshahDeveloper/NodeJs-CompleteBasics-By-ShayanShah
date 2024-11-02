import { createServer } from "http";
import url from "url";
const PORT = process.env.PORT || 8060;

const users = [
  { id: 1, name: "Shayan Shah" },
  { id: 2, name: "Faizan Shah" },
  { id: 3, name: "Farhan Shah" },
  { id: 4, name: "Sahil Shah" },
  { id: 5, name: "Haris Shah" },
];

//Logger Middleware
const logger = (req, res, next) => {
  console.log(req.method, req.url);
  next();
};

// Json Middlware
const jsonMiddleware = (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
};

// Route handler fro Users /api/users
const userhandler = (req, res) => {
  res.write(JSON.stringify(users));
  res.end();
};

// Route handler for Saecrhing using id:
const idhandler = (req, res) => {
  const id = req.url.split("/")[3];
  const user = users.find((user) => user.id === parseInt(id));
  if (user) {
    res.write(JSON.stringify(user));
  } else {
    res.statusCode = 404;
    res.write(JSON.stringify({ message: "user not found..." }));
  }
  res.end();
};

// Create user using POST
const createUser = (req, res) => {
  let body = "";
  // Listen for the Data
  req.on("data", (chunk) => {
    body += chunk.toString();
  });
  req.on("end", () => {
    const newUser = JSON.parse(body);
    users.push(newUser);
    res.statusCode = 201;
    res.write(JSON.stringify(newUser));
    res.end();
  });
};

// Not Found handler
const notfound = (req, res) => {
  res.write(JSON.stringify({ message: "Route not found..." }));
  res.end();
};

const server = createServer((req, res) => {
  logger(req, res, () => {
    jsonMiddleware(req, res, () => {
      if (req.url === "/api/users" && req.method === "GET") {
        userhandler(req, res);
      } else if (
        req.url.match(/\/api\/users\/([0-9]+)/) &&
        req.method === "GET"
      ) {
        idhandler(req, res);
      } else if (req.url === "/api/users" && req.method === "POST") {
        createUser(req, res);
      } else {
        notfound(req, res);
      }
    });
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on the Port ${PORT}`);
});
