const express = require('express');
// const router = require('express.Router');
const app = express();
const vehicleRoutes = require('./routes/getVehicleRoute')
const cors = require('cors');

const port = process.env.PORT || 5000;

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})
// app.use('*', (req, res, next) => {
//     res.json = (...args) => res.type('json').send(JSON.stringify(...args))
//     next()
// })

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200, // For legacy browser support
    methods: "GET, PUT"
}

app.use(cors(corsOptions));

app.set('json spaces', 2)
app.use("/", vehicleRoutes);
app.use("/getVehicles", vehicleRoutes);



// app.get('/', (req, res)=>{
//     res.send(`This route is for application root`);
// });

app.listen(port, ()=>{
    console.log(`app is successfully runnning on port ${port}`);
});