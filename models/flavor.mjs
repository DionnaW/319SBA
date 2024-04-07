//i will give the customer 10 exclusive flavors to choose from, but they can only choose 5 for their booking
//i'll need to remove readyToUse and code in my enum, size, and pre save function
//and these 5 will be extra with the already included flavors....just fyi for big project
//for the purpose of this project i'll do it like the fruit example where they can add update and delete flavors

import mongoose from 'mongoose';

const flavorSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true, 
        // enum: ['Sponge Bob', 'Shrek', 'Barbie', 'Tigers Blood', 'Candy Apple', 'Wedding Cake', 'Chocolate Fudge', 'Bahama Mama', 'Egg Custard', 'Tutti Fruitti']
    },

    color: {
         type: String, 
        //  enum: ['dye', 'clear'],
         required: true 
    },

    readyToUse: Boolean

    // size: {
        // type: String,
        // enum: ['Quart', 'Gallon'],
        // required: true
    // }
});

// flavorSchema.pre('save', function (next) {
    // const flavors = this.constructor.countDocuments({}) + 1;
    // if (flavors > 5) {
        // return next(new Error('You can only choose 5 flavors out of the 10 available flavors.'));
    // }
    // next();
// });

const Flavor = mongoose.model('Flavor', flavorSchema);

export default Flavor;