const fs = require("fs");

fs.open("./static/text.txt", "r", function (err, fd) {
    if (err) throw err;
    console.log(fd);
    fs.fstat(fd, (err, data) => {
        if (err) throw err;
        console.log(data);

        fs.close(fd, (err) => {
            if (err) throw err;
        })
    })
});