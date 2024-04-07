//i would like the customer to be able to choose 2 of the available toppings at the price of free, 
//3 - 5 of the available toppings at a price of $5 dollars extra, 
//and if all available toppings are choose the price would be $10 extra...for the big project
//for this 319 i'll keep it simple & ready to eat will go away after this

import mongoose from 'mongoose';

const toppingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    readyToEat: Boolean
    // quanity: {
        // type: Number,
        // required: true,
        // validate: {
            // validator: function(value) {
                // return value >= 1 && value <= 5;
            // },
            // message: 'Quanity must be between 1 and 5'
        // }
    // }
});

// toppingSchema.virtual('totalPrice').get(function() {
    // if (this.quanity === 1 || this.quanity === 2) {
        // return 0;
    // } else if (this.quanity >= 3 && this.quanity <= 5) {
        // return 5;
    // } else {
        // return 10;
    // }
// });
// 
const Topping = mongoose.model('Topping', toppingSchema);

export default Topping;