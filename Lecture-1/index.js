const fs = require('fs');

let type = process.argv
let fileName = process.argv
let data = process.argv

if (type[2] == 'create') {
    fs.writeFile(fileName[3], data[4], (err) => {
        if (err) {
            console.log(err.message);
        } else {
            console.log('File written successfully');
        }
    });
}
else if (type[2] == 'read') {
    fs.readFile(fileName[3], (err, data) => {
        if (err) {
            console.log(err.message);
        } else {
            console.log(data.toString());
        }
    });
}
else if (type[2] == 'update') {
    fs.writeFile(fileName[3], data[4], (err) => {
        if (err) {
            console.log(err.message);
        } else {
            console.log('File updated successfully');
        }
    });
}
else if (type[2] == 'delete') {
    fs.unlink(fileName[3], (err) => {
        if (err) {
            console.log(err.message);
        } else {
            console.log('File deleted successfully');
        }
    });
}
else if (type[2] == 'rename') {
    fs.rename(fileName[3], fileName[4], (err) => {
        if (err) {
            console.log(err.message);
        }
        else {
            console.log("File renamed successfully");
        }
    })
}


// fs.rename("index.txt","index.html",(err)=>{
//     if(err){
//         console.log(err.message);
//     }
//     else{
//         console.log("File renamed successfully");
//     }
// })

// fs.readFile("index.html",(err,data)=>{
//     if(err){
//         console.log(err.message);
//     }
//     else{
//         console.log(data.toString());
//     }
// })

// fs.appendFile("index.html","<h1>New Content</h1>",(err)=>{
//     if(err){
//         console.log(err.message);
//     }
//     else{
//         console.log("Content appended successfully");
//     }
// })

// fs.unlink("index.html",(err)=>{
//     if(err){
//         console.log(err.message);
//     }
//     else{
//         console.log("File deleted successfully");
//     }
// })