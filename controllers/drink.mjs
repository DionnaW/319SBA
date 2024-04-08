import express from 'express';
const router = express.Router();
import Drink from '../models/drink.mjs';
import db from '../db/conn.mjs';

//seed route for testing purposes only
// router.get('/seed', async (req, res) => {
    // console.log('in seed');
    // try {
        // await Drink.create([
            // { name: 'fanta', price: '1.00', readyToDrink: true },
            // { name: 'sprite', price: '1.00', readyToDrink: false },
            // { name: 'powerade', price: '1.00', readyToDrink: true }
        // ])
        // res.status(200).redirect('/drinks');
    // } catch (error) {
        // res.status(400).send(error);
    // }
// })
//====I=====
router.get('/', async (req, res) => {
    try {
        const foundDrinks = await Drink.find({});
        res.status(200).render('drinks/Index', { drinks: foundDrinks })
    } catch (error) {
        res.status(400).send(error);
    }
})
//====N====
router.get('/new', (req, res) => {
    res.render('drinks/New');
})
//====D====
router.delete('/:id', async (req, res) => {
    try {
        const deletedDrink = await Drink.findByIdAndDelete(req.params.id);
        console.log(deletedDrink);
        res.status(200).redirect('/drinks');
    } catch (err) {
        res.status(400).send(err);
    }
})
//=====U====
router.put('/:id', async (req, res) => {
    if (req.body.readyToDrink === 'on') {
        req.body.readyToDrink = true;
    } else {
        req.body.readyToDrink = false;
    }

    try {
        const updatedDrink = await Drink.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true },
        );
            console.log(updatedDrink);
        res.redirect(`/drinks/${req.params.id}`);
    } catch (err) {
        res.status(400).send(err);
    }
})
//===C=====
router.post('/', async (req, res) => {
    if (req.body.readyToDrink === 'on') { 
        req.body.readyToDrink = 'true';
    } else {   
        req.body.readyToDrink = false;
    }

    try {
        const createdDrink = await Drink.create(req.body);
        res.status(200).redirect('/drinks');
    } catch (error) {
        res.status(400).send(error);
    }
})
//=====E======
router.get("/:id/edit", async (req, res) => {
    try {
        const foundDrink = await Drink.findById(req.params.id);
        res.status(200).render('drinks/Edit', {drink: foundDrink});
    } catch (err) {
        res.status(400).send(err);
    }
})
//=====S=====
router.get('/:id', async (req, res) => {
    try {
        const foundDrink = await Drink.findById(req.params.id);
        res.render('drinks/Show', {drink: foundDrink});
    } catch (error) {
        res.status(400).send(error);
    }
})

export default router;