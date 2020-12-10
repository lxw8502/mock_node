const {spawn}  = require('child_process');

const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data)=>{
    console.log(`studout: ${data}`);
});

ls.stderr.on('data', (data)=>{
    console.log(`stderr: ${data}`);
});

ls.on('close', (code)=>{
    console.log(`child process exited with code ${code}`);
});

