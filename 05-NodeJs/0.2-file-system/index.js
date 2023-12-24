const fs = require("fs");

// Create a new txt file
fs.writeFileSync("file1.txt", "this is some text I'm writing inside file1.txt");
// https://nodejs.org/docs/latest/api/fs.html#fswritefilesyncfile-data-options

// Create a copy of the newly created txt file
fs.copyFileSync("file1.txt", "file1copy.txt");
// https://nodejs.org/docs/latest/api/fs.html#fscopyfilesyncsrc-dest-mode

// Rename one of the files using a method from the fs module
fs.renameSync("file1copy.txt", "file2.txt");
// https://nodejs.org/docs/latest/api/fs.html#fsrenamesyncoldpath-newpath

// Get a list of all the file names of the current directory
const listOfFiles = fs.readdirSync("./");
console.log('listOfFiles', listOfFiles);
// https://nodejs.org/dist/latest-v20.x/docs/api/fs.html#fsreaddirsyncpath-options
// https://stackoverflow.com/questions/2727167/how-do-you-get-a-list-of-the-names-of-all-files-present-in-a-directory-in-node-j

//  Find out and implement another method for the fs module.

// readFileSync - used to read file data synchronously 
const file1Data = fs.readFileSync("./file1.txt", { encoding: 'utf8', flag: 'r' });
console.log('file1Data:', file1Data);
// https://www.geeksforgeeks.org/node-js-fs-readfilesync-method/
// https://nodejs.org/dist/latest-v20.x/docs/api/fs.html#fsreadfilesyncpath-options

// appending - if file exists it appends to it, if it doesnt exist it creates it
fs.appendFileSync("./file2.txt", " (copied to file2.txt) <- and this text was appended");
// https://nodejs.org/dist/latest-v20.x/docs/api/fs.html#fsappendfilesyncpath-data-options