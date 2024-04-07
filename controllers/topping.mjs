import express from 'express';
const router = express.Router();
import Topping from '../models/topping.mjs';
import db from '../db/conn.mjs';

//seed route for testing purposes only
// router.get('/seed', async (req, res) => {
    // console.log('in seed');
    // try {
        // await Topping.create([
            // { name: 'sour spray', price: '0.05', readyToEat: true },
            // { name: 'fudge', price: '0.05', readyToEat: false },
            // { name: 'nerds', price: '0.05', readyToEat: true }
        // ])
        // res.status(200).redirect('/toppings');
    // } catch (error) {
        // res.status(400).send(error);
    // }
// })
//====I=====
router.get('/', async (req, res) => {
    try {
        const foundToppings = await Topping.find({});
        res.status(200).render('toppings/Index', { toppings: foundToppings })
    } catch (error) {
        res.status(400).send(error);
    }
})
//====N====
router.get('/new', (req, res) => {
    res.render('toppings/New');
})
//====D====
router.delete('/:id', async (req, res) => {
    try {
        const deletedTopping = await Topping.findByIdAndDelete(req.params.id);
        console.log(deletedTopping);
        res.status(200).redirect('/toppings');
    } catch (err) {
        res.status(400).send(err);
    }
})
//=====U====
router.put('/:id', async (req, res) => {
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }

    try {
        const updatedTopping = await Topping.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true },
        );
            console.log(updatedTopping);
        res.redirect(`/toppings/${req.params.id}`);
    } catch (err) {
        res.status(400).send(err);
    }
})
//===C=====
router.post('/', async (req, res) => {
    if (req.body.readyToEat === 'on') { 
        req.body.readyToEat = 'true';
    } else {   
        req.body.readyToEat = false;
    }

    try {
        const createdTopping = await Topping.create(req.body);
        res.status(200).redirect('/toppings');
    } catch (error) {
        res.status(400).send(error);
    }
})
//=====E======
router.get("/:id/edit", async (req, res) => {
    try {
        const foundTopping = await Topping.findById(req.params.id);
        res.status(200).render('toppings/Edit', {topping: foundTopping});
    } catch (err) {
        res.status(400).send(err);
    }
})
//=====S=====
router.get('/:id', async (req, res) => {
    try {
        const foundTopping = await Topping.findById(req.params.id);
        res.render('toppings/Show', {topping: foundTopping});
    } catch (error) {
        res.status(400).send(error);
    }
})

export default router;