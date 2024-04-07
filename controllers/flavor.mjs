import express from 'express';
const router = express.Router();
import Flavor from '../models/flavor.mjs';
import db from '../db/conn.mjs';

//seed route for testing purposes only
// router.get('/seed', async (req, res) => {
    // console.log('in seed');
    // try {
        // await Flavor.create([
            // { name: 'raspberry', color: 'blue', readyToUse: true },
            // { name: 'banana', color: 'yellow', readyToUse: false },
            // { name: 'root beer', color: 'brown', readyToUse: true }
        // ])
        // res.status(200).redirect('/flavors');
    // } catch (error) {
        // res.status(400).send(error);
    // }
// })
//====I=====
router.get('/', async (req, res) => {
    try {
        const foundFlavors = await Flavor.find({});
        res.status(200).render('flavors/Index', { flavors: foundFlavors })
    } catch (error) {
        res.status(400).send(error);
    }
})
//====N====
router.get('/new', (req, res) => {
    res.render('flavors/New');
})
//====D====
router.delete('/:id', async (req, res) => {
    try {
        const deletedFlavor = await Flavor.findByIdAndDelete(req.params.id);
        console.log(deletedFlavor);
        res.status(200).redirect('/flavors');
    } catch (err) {
        res.status(400).send(err);
    }
})
//=====U====
router.put('/:id', async (req, res) => {
    if (req.body.readyToUse === 'on') {
        req.body.readyToUse = true;
    } else {
        req.body.readyToUse = false;
    }

    try {
        const updatedFlavor = await Flavor.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true },
        );
            console.log(updatedFlavor);
        res.redirect(`/flavors/${req.params.id}`);
    } catch (err) {
        res.status(400).send(err);
    }
})
//===C=====
router.post('/', async (req, res) => {
    if (req.body.readyToUse === 'on') { 
        req.body.readyToUse = 'true';
    } else {   
        req.body.readyToUse = false;
    }

    try {
        const createdFlavor = await Flavor.create(req.body);
        res.status(200).redirect('/flavors');
    } catch (error) {
        res.status(400).send(error);
    }
})
//=====E======
router.get("/:id/edit", async (req, res) => {
    try {
        const foundFlavor = await Flavor.findById(req.params.id);
        res.status(200).render('flavors/Edit', {flavor: foundFlavor});
    } catch (err) {
        res.status(400).send(err);
    }
})
//=====S=====
router.get('/:id', async (req, res) => {
    try {
        const foundFlavor = await Flavor.findById(req.params.id);
        res.render('flavors/Show', {flavor: foundFlavor});
    } catch (error) {
        res.status(400).send(error);
    }
})

export default router;