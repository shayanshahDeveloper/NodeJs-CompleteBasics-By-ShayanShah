console.log(process.argv);
console.log(process.argv[3]);

// Process.env
console.log(process.env);
console.log(process.env.USERNAME);

// Pid
console.log(process.pid);

// cwd()
console.log(process.cwd());

// title
console.log(process.title);

// memoryUsage()
console.log(process.memoryUsage());

// upTime()
console.log(process.uptime());

process.on("exit", (code) => console.log(`About to Exit with Code: ${code}`));

// exit
process.exit(0);
