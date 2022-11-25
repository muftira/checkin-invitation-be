const router = require("express").Router();

//import model
const guestItemModel = require("../models/guestItems");

//add data
router.post("/api/guest", async (req, res) => {
  try {
    const stamp = new Date();
    const d = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

    const day = d[stamp.getDay()];
    const date = stamp.getDate();
    const month = stamp.getMonth();
    const year = stamp.getFullYear();
    const hour = stamp.getHours();
    const minute = stamp.getMinutes();
    const second = stamp.getSeconds();

    const _date = `${day}, ${date}-${month}-${year}`;
    const _time = `${hour}:${minute}:${second}`

    const newGuest = new guestItemModel({
      name: req.body.name,
      address: req.body.address,
      date: _date,
      time: _time,
      isArrived: req.body.isArrived,
      isSpread: req.body.isSpread,
    });

    const saveGuest = await newGuest.save();
    res.status(200).json(saveGuest);
  } catch (error) {
    res.json(error);
  }
});

//get data
router.get("/api/guest", async (req, res) => {
  try {
    const allGuestItems = await guestItemModel.find({});
    res.status(200).json(allGuestItems);
  } catch (error) {
    res.json(error);
  }
});

//update data
router.put("/api/guest/:id", async (req, res) => {
  try {
    const stamp = new Date();
    const d = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

    const day = d[stamp.getDay()];
    const date = stamp.getDate();
    const month = stamp.getMonth();
    const year = stamp.getFullYear();
    const hour = stamp.getHours();
    const minute = stamp.getMinutes();
    const second = stamp.getSeconds();

    const _date = `${day}, ${date}-${month}-${year}`;
    const _time = `${hour}:${minute}:${second}`
    const guest = await guestItemModel
      .findByIdAndUpdate({ _id: req.params.id }, req.body)
      .updateMany({ date: _date }, {time: _time});
    res.json("Guest Updated");
  } catch (error) {
    res.json(error);
  }

  //CARA KEDUA

  //   guestItemModel
  //     .findByIdAndUpdate({ _id: req.params.id }, req.body)
  //     .then(() => {
  //       guestItemModel.updateOne({ date: time }).then(() => {
  //         res.status(200).json("Guest updated");
  //       });
  //     })
  //     .catch((err) => {
  //       res.json(err);
  //     });
});

//delete data
router.delete("/api/guest/:id", async (req, res) => {
  try {
    const deleteGuest = await guestItemModel.findByIdAndDelete({
      _id: req.params.id,
    });
    res.json("Guest Deleted");
  } catch (error) {
    res.json(error);
  }
});

//delete all data
router.delete("/api/removeall", async (req, res) => {
  try {
    const deleteAllGuest = await guestItemModel.remove({});
    res.json("All Guest Deleted");
  } catch (error) {
    res.json(error);
  }
});

//export router
module.exports = router;
