//everything here thta's coded out is for the purposes of my bigger project!

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import jsxViewEngine from 'jsx-view-engine';
import methodOverride from 'method-override';
import db from './db/conn.mjs';
import flavorRoutes from './controllers/flavor.mjs';

//express application specifically for the Login/Profile page & other variables.....for bigger project
const profile = express();
const PORT = process.env.PORT || 5050

// profile.use(express.json());

profile.set('view engine', 'jsx');
profile.set('views', './views');
profile.engine('jsx', jsxViewEngine());

profile.use(express.urlencoded({extended: false}))

profile.use('/flavors', flavorRoutes);

profile.get('/', function(req, res) {
    res.send(
        `<div>Future Profile Pg route 4 big 1 <br/><a href='/flavors'>Flavors</a> <br/><a href='/toppings'>Toppings</a> <br/><a href='/schedules'>Schedules</a></div>`  
    )
    // let content =  `<div>Book Your Next Event<br>Choose up to 5 *EXTRA* Exclusive Flavors</div>`   //for bigger project
    // res.send(content);
})

profile.listen(PORT, () => {
    console.log(`port is listening`);
});
