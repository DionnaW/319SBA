import express from 'express';
const router = express.Router();
import Schedule from '../models/schedule.mjs';
import db from '../db/conn.mjs';

//seed route for testing purposes only
// router.get('/seed', async (req, res) => {
    // console.log('in seed');
    // try {
        // await Schedule.create([
            // { date: new Date(), startTime: new Date(), endTime: new Date() },
            // { startTime: new Date(), startTime: new Date(), endTime: new Date() },
            // { endTime: new Date(), startTime: new Date(), endTime: new Date() }
        // ])
        // res.status(200).redirect('/schedules');
    // } catch (error) {
        // res.status(400).send(error);
    // }
// })
//====I=====
router.get('/', async (req, res) => {
    try {
        const foundSchedules = await Schedule.find({});
        res.status(200).render('schedules/Index', { schedules: foundSchedules })
    } catch (error) {
        res.status(400).send(error);
    }
})
//====N====
router.get('/new', (req, res) => {
    res.render('schedules/New');
})
//====D====
router.delete('/:id', async (req, res) => {
    try {
        const deletedSchedule = await Schedule.findByIdAndDelete(req.params.id);
        console.log(deletedSchedule);
        res.status(200).redirect('/schedules');
    } catch (err) {
        res.status(400).send(err);
    }
})
//=====U====
router.put('/:id', async (req, res) => {
    if (req.body.dateAllSet === 'on') {
        req.body.dateAllSet = true;
    } else {
        req.body.dateAllSet = false;
    }

    try {
        const updatedSchedule = await Schedule.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true },
        );
            console.log(updatedSchedule);
        res.redirect(`/schedules/${req.params.id}`);
    } catch (err) {
        res.status(400).send(err);
    }
})
//===C=====
router.post('/', async (req, res) => {
    if (req.body.dateAllSet === 'on') { 
        req.body.dateAllSet = 'true';
    } else {   
        req.body.dateAllSet = false;
    }

    try {
        const createdSchedule = await Schedule.create(req.body);
        res.status(200).redirect('/schedules');
    } catch (error) {
        res.status(400).send(error);
    }
})
//=====E======
router.get("/:id/edit", async (req, res) => {
    try {
        const foundSchedule = await Schedule.findById(req.params.id);
        res.status(200).render('schedules/Edit', {schedule: foundSchedule});
    } catch (err) {
        res.status(400).send(err);
    }
})
//=====S=====
router.get('/:id', async (req, res) => {
    try {
        const foundSchedule = await Schedule.findById(req.params.id);
        res.render('schedules/Show', {schedule: foundSchedule});
    } catch (error) {
        res.status(400).send(error);
    }
})

export default router;