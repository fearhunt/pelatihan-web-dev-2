const fs = require('fs');

// // sync write
// fs.writeFileSync("writeSync.txt", "hahahaha halo");
// console.log('sudah selesai');

// // async write
// fs.writeFile("writeAsync.txt", "helo ini bukan async tp", (err) => {
//     if (err) throw err;
// });
// console.log("hahahah belum tentu brooo");

// // syync read
// var text = fs.readFileSync('readme.txt', 'utf8');
// console.log(text);
// console.log('nah baru kebaca ya kan');

// async read 
fs.readFile('readme.txt', 'utf8', (err, data) => {
    if (err) throw err;
    text=data; 
});
console.log(text);