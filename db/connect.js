import mongoose from "mongoose";

function connectDB(DB_URL) {
    const options = {
        dbname: 'medium-clone',
    }
    try {
       mongoose.connect(DB_URL, options);
       console.log("Connected successfully") ;
    }
    catch(error) {
        console.log("Unable to connect");
        console.log(error);
    }
}

export default connectDB;


