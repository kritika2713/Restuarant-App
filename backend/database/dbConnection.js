import mongoose from "mongoose";
export const dbConnection = () => {
    mongoose
        .connect(process.env.MONGO_URI, {
            dbName: "Restaurantss",
        })
        .then(() => {
            console.log("Connected to database sucessfully!");
        })
        .catch((err) => {
            console.log(`Some error occured while connecting to database!${err}`);
        });
    
}

// PORT = 4000
// FRONTEND_URL=http://localhost:5173
// MONGO_URI=mongodb+srv://kritikasonkar:KritI@2003@cluster0.w5ttrw3.mongodb.net/?retryWrites=true
// KritI@2003