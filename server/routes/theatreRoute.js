const router = require("express").Router();
const Theatre = require("../model/theatreModel");

//Add a theatre
router.post("/add-theatre", async (req, res) => {
  try {
    const newTheatre = new Theatre(req.body);
    await newTheatre.save();
    res.send({
      success: true,
      message: "New Theatre have been added!",
    });
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
});

//Update theatre
router.put("/update-theatre", async (req, res) => {
  try {
    await Theatre.findByIdAndUpdate(req.body.theatreId, req.body);
    res.send({
      success: true,
      message: "Theatre has been updated!",
    });
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
});

//Delete theatre
router.delete("/delete-theatre/:theatreId", async (req, res) => {
  try {
    console.log("deleting theatre", req.params.theatreId);
    await Theatre.findByIdAndDelete(req.params.theatreId);
    res.send({
      success: true,
      message: "The theatre has been deleted!",
    });
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
});

// Get all theatres for Admin route
router.get("/get-all-theatres", async (req, res) => {
  try {
    const allTheatres = await Theatre.find().populate("owner");
    res.send({
      success: true,
      message: "All theatres fetched!",
      data: allTheatres,
    });
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
});

// Get the theatres of a specific owner
router.get("/get-all-theatre-by-owner/:ownerId", async (req, res) => {
  try {
    const allTheatres = await Theatre.find({ owner: req.params.ownerId });
    res.send({
      success: true,
      message: "All theatres fetched successfully!",
      data: allTheatres,
    });
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;
