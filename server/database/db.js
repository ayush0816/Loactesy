const mongoose=require('mongoose');
const url="mongodb://localhost:27017/Locatesy";
mongoose.connect(url,{
    useNewUrlParser : true,
    useUnifiedTopology : true
});
const dbcon = mongoose.connection;
dbcon.on("error", console.error.bind(console, "Connection Error"));
dbcon.on("open", () => {
  console.log("DB CONNECTED");
});
module.exports = dbcon;
