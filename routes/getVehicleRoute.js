console.log('inside route');

const express = require('express');
const router = express.Router();
const getVehicleController = require('../controllers/getVehicleController');

router.route("/").get((req, res)=>{
    res.send('Welcome to Techno Capstone');
});
router.route("/getVehicles").get(getVehicleController)

module.exports = router; 