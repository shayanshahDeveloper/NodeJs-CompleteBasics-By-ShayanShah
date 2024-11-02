import fs from "fs/promises";

// readFile()
const readFile = async () => {
  try {
    const data = await fs.readFile("./test.txt", "utf8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// writeFile()
const writefile = async () => {
  try {
    const data = await fs.writeFile("./test.txt", "This is new Text Buddy");
    console.log("text Added..");
  } catch (error) {}
};

// appendFile()
const appendFile = async () => {
  try {
    const data = await fs.appendFile(
      "./test.txt",
      "\nThis is Appneded text Bro"
    );
    console.log("text is appended..");
  } catch (error) {
    console.log(error);
  }
};

writefile();
appendFile();
readFile();
