import url from "url";

const urlString = "https://google.com/search?q=hello+world";

// Url object

const urlObj = new URL(urlString);
console.log(urlObj.hostname);

// format()

console.log(url.format(urlObj));

// import.meta.url -file Url
console.log(import.meta.url);

// fileURLToPath()
console.log(url.fileURLToPath(import.meta.url));

const param = new URLSearchParams(urlObj.search);
console.log(param);

// appending Data to the Url String
param.append("limit", "250");

// Delete data from the Url String
param.delete("limit");
console.log(param);

// NodeJs Basics End Here
