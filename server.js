require("dotenv").config();
//Connect mongodb
const app = require("./index");
const mongoose = require("mongoose");
const {PORT} = require("./configs/baseConfig");

mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
            console.log("Connected to DB")
            app.listen(PORT, () => {
                console.log(`listening on port ${PORT}`);
            });
        }
    )
    .catch((err) => console.error(err));