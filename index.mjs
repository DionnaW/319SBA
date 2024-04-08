//everything here thta's coded out is for the purposes of my bigger project!

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import jsxViewEngine from 'jsx-view-engine';
import methodOverride from 'method-override';
import db from './db/conn.mjs';
import flavorRoutes from './controllers/flavor.mjs';
import toppingRoutes from './controllers/topping.mjs';
import drinkRoutes from './controllers/drink.mjs';

//express application specifically for the Login/Profile page & other variables.....for bigger project
const profile = express();
const PORT = process.env.PORT || 5050
//====eng. views===
profile.set('view engine', 'jsx');
profile.set('views', './views');
profile.engine('jsx', jsxViewEngine());
//=====middleware
profile.use(express.urlencoded({extended: false}))
profile.use(methodOverride('_method'));
//===routes====
profile.use('/flavors', flavorRoutes);
profile.use('/toppings', toppingRoutes);
profile.use('/drinks', drinkRoutes); 

profile.get('/', function(req, res) {
    res.send(
        `<div>Future Profile Pg route 4 big 1 <br/><a href='/flavors'>Flavors</a> <br/><a href='/toppings'>Toppings</a> <br/><a href='/drinks'>Drinks</a></div>`  
    )
    // let content =  `<div>Book Your Next Event<br>Choose up to 5 *EXTRA* Exclusive Flavors</div>`   //for bigger project
    // res.send(content);
})

profile.listen(PORT, () => {
    console.log(`port is listening`);
});

