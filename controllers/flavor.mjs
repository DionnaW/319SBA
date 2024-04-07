import express from 'express';
const router = express.Router();
import Flavor from '../models/flavor.mjs';
import db from '../db/conn.mjs';

//seed route for testing purposes only
router.get('/seed', async (req, res) => {
    console.log('in seed');
    try {
        await Flavor.create([
            { name: 'raspberry', color: 'blue', readyToUse: true },
            { name: 'banana', color: 'yellow', readyToUse: false },
            { name: 'root beer', color: 'brown', readyToUse: true }
        ])
        res.status(200).redirect('/flavors');
    } catch (error) {
        res.status(400).send(error);
    }
})

router.get('/', async (req, res) => {
    try {
        const foundFlavors = await Flavor.find({});
        res.status(200).render('flavors/Index', { flavors: foundFlavors })
        // res.status(200).send(foundFlavors);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.get('/new', (req, res) => {
    res.render('flavors/New');
})

router.post('/', async (req, res) => {
    //this if statement will be for when we have a user input form
    //this is the boolean so we want it to be true
    // if (req.body.readyToUse === 'on') { //if checked req.body.ready.. is set to 'on' or the checkbox is checked
        // req.body.readyToUse = 'true';
    // } else {   //this says if box not checked then it was undefined
        // req.body.readyToUse = false;
    // }

    try {
        const createdFlavor = await Flavor.create(req.body);
        res.status(200).send(createdFlavor);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.get('/:id', async (req, res) => {
    try {
        const foundFlavor = await Flavor.findById(req.params.id);
        res.render('flavors/Show', {flavor: foundFlavor});
    } catch (error) {
        res.status(400).send(error);
    }
})

export default router;