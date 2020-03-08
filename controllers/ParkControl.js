const ParkModel = require('../models/ParkModel');

module.exports = {
    create: (req, res) => {
        let park = new ParkModel({
           name: req.body.name,
        location: req.body.location,
        ranking: req.body.ranking
        })
        park.save()
        .then(result => {
            res.json({ success: true, result: result})
        })
        .catch(err => {
             res.json({ success: false, result: err})
            })
    },

    update: (req, res) => {
    ParkModel.findById(req.body._id)
    .then(park => {
        if (!park) res.json({ success: false, result: "No such park exists"})
      park = req.body

      park.save()
      .then(result => {
          res.json({ success: true, result: result})
      })
      .catch(err => {
          res.json({ success: false, result: err})
      })
    })
    }
}