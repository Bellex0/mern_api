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
    ParkModel.update({_id: req.body._id}, req.body)
    .then(park => {
        if (!park) res.json({ success: false, result: "No such park exists"})
      
        res.json(park)
    })
      .catch(err => {
          res.json({ success: false, result: err})
      })
    },

    retrieve: (req, res) => {
        ParkModel.find()
        .then(result => {
            if (!result) res.json({ success: false, result: "No parks found"})

            res.json({ sucess: true, result: result})
        })
        .catch(err => {
            res.json({ success: false, result: err})
        })
    },

    delete: (req, res) => {
        ParkModel.remove({ _id: req.body._id})
        .then(result => {
            if (!result) res.json({ success: false, result: "No park with such ID was found" })
            res.json({ success: true, result: result })
        })
        .catch(err => res.json({success: false, result: err}))
    }
}