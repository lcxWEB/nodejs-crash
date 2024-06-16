// console.log(process);

// command line args
// argv
console.log(process.argv);

console.log(process.argv[3]);

// process.env
console.log(process.env);

console.log(process.env.LOGNAME);

// pid
console.log(process.pid);

// cwd
console.log(process.cwd());


// title
console.log(process.title);

// memoryUse()
console.log(process.memoryUsage());

// uptime()
console.log(process.uptime());

// register event
process.on('exit', (code) => {
    console.log(`about to exit with code: ${code}`);
});

// exit()
process.exit(0);
console.log('Hello from after exit');
