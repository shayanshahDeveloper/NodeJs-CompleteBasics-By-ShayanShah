import crypto from "crypto";

// createHash()
const pass = crypto.createHash("sha256");
pass.update("This is Secret Password");
console.log(pass.digest("hex"));

// randomBytes()
crypto.randomBytes(24, (err, buff) => {
  if (err) throw err;
  console.log(buff.toString("hex"));
});

// CreateHash( ) Parctice
const password = crypto.createHash("sha256");
password.update("this is Secret Password");
console.log(password.digest("hex"));

// radnomBytes()
crypto.randomBytes(24, (err, buff) => {
  if (err) throw err;
  console.log(buff.toString("hex"));
});

// createCipheriv contain 3 main elements
const algorithm = "aes-256-cbc";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update("I need helped Im Exposed", "utf8", "hex");
encrypted += cipher.final("hex");
console.log(encrypted);

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, "hex", "utf8");
decrypted += decipher.final("utf8");
console.log(decrypted);
