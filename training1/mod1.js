// let tempCounter = 1;
// let newFilename = `new${tempCounter}.html`;

// // fs.readdir(dir, (err, files) => {
// //   console.log(files);
// //   console.log(files.length);
// //   console.log(err);
// //   tempCounter = files.length + 1;
// //   newFilename = `new${tempCounter}.html`;
// //   createNewFile(newFilename);
// // });

// function createNewFile(fileName) {
//   const html = `<h1>Hello ${tempCounter}</h1>`;
//   fs.appendFile(dir + "/" + fileName, html, (err) => {
//     if (err) throw err;
//     console.log(`save file ${fileName}`);
//   });
// }

// function overMyLog(val) {
//   const html = ` - ${val}`;
//   fs.writeFile(dir + "/log.html", html, (err) => {
//     if (err) throw err;
//     console.log(`Updated writeFile ${val}`);
//   });
// }

// function delFile(val) {
//   fs.unlink(val, (err) => {
//     if (err) throw err;
//     console.log(`file deleted ${val}`);
//   });
// }
// // delFile(dir + "/log.html");

// function removeAll() {
//   fs.readdir(dir, (err, files) => {
//     files.forEach((myFile) => {
//       delFile(dir + "/" + myFile);
//     });
//   });
// }
// // removeAll();

// function renameFiles(fileName, newName) {
//   fs.rename(fileName, newName, (err) => {
//     if (err) throw err;
//     console.log(`File renamed - ${newName} from ${fileName}`);
//   });
// }
// // renameFiles("./public/new3.html", "./public/abc.html");
