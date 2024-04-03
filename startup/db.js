const mongoose = require('mongoose');
const config = require('config');

const uri = "mongodb+srv://jasonchanwq:" + process.env.APP_PASSWORD +"@bookstoreapp.ptpmmkx.mongodb.net/Bookstore?retryWrites=true&w=majority&appName=bookstoreapp";
//const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

module.exports = function () {
    const db = config.get('db');
    mongoose.connect(uri)
        .then(() => console.log(`Connected to ${db}`))
        .catch(err => console.error(`Could not connect to ${db}...`));

    //async function run() {
    //    try {
    //        // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    //        await mongoose.connect(uri, clientOptions);
    //        await mongoose.connection.db.admin().command({ ping: 1 });
    //        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    //    } finally {
    //        // Ensures that the client will close when you finish/error
    //        await mongoose.disconnect();
    //    }
    //}
    //run().catch(console.dir);
}