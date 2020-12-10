const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'h.json'), function(err, data){
    if(err){
        throw err;
    }
    console.log(data.toString());
})

