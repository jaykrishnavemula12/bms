const express = require("express");
require("dotenv").config();
const app = express();
app.use(express.json());

const connectDB = require("./config/db");
const userRouter = require("./routes/userRoute");
const movieRouter = require("./routes/movieRoute");
const theatreRouter = require("./routes/theatreRoute");
const showRouter = require("./routes/showRoute");
const bookingRouter = require("./routes/bookingRoute");

//console.log("server", process.env.DB_URL);
connectDB();

//Routes//

app.use("/api/users", userRouter);
app.use("/api/movies", movieRouter);
app.use("/api/theatres", theatreRouter);
app.use("/api/shows", showRouter);
app.use("/api/bookings", bookingRouter);

app.listen(8082, () => {
  console.log("Server is Running on 8082");
});
