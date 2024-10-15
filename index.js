const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(cors());

app.get("/download", (req, res) => {
    console.log("object");
    const filePath = path.join(__dirname, 'android-studio-2023.1.1.27-windows.exe');
    console.log(filePath);

    const stat = fs.statSync(filePath);
    const total = stat.size;
    res.setHeader('Content-Length', total);
    res.setHeader("Access-Control-Expose-Headers", "Content-Disposition, Content-Length");

    const readStream = fs.createReadStream(filePath);

    readStream.on('data', (chunk) => {
        res.write(chunk);
    });

    readStream.pipe(res);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
