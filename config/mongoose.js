/** ------------------ IMPORTING PACKAGE ------------------ **/
const mongoose = require("mongoose");


/** ------------------ MAKING CONNECTION ------------------ **/

 mongoose.connect('mongodb://127.0.0.1:27017/csvUploads');
//const DB = 'mongodb+srv://himadrinayak:12345@cluster0.h7n86ah.mongodb.net/csv-upload?retryWrites=true&w=majority';

// mongoose.connect(DB).then(()=>{
//     console.log('Connection successful!');
// }).catch((err) => console.log("no connection " + err));

//setting it to db
const db = mongoose.connection;

/** ------------------ CHECKING CONNECTION ------------------ **/
//if error occurs
db.on("error", console.error.bind(console, "Error connecting to DB"));
// when db connects successfully
db.once("open", function(){
    console.log("Successfully connected to DB");
});

/** ------------------ EXPORTING DB ------------------ **/
module.exports = db;

// echo "# CSV_file_Uploaded." >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin git@github.com:Kasif17/CSV_file_Uploaded..git
// git push -u origin main