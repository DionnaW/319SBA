import mongoose from 'mongoose';

const drinkSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    readyToEat: Boolean
});

const Drink = mongoose.model('Drink', drinkSchema);

export default Drink;