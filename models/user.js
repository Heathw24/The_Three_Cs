const mongoose = require("mongoose");

const user = new mongoose.Schema({
    username: String,
    password: String,
    events: [
        {
            name: {
                type: String,
            },
            transaction: {
                type: Number,
            }
        }
    ],
    totalBudget: {
        type: Number,
        default: 0,
        // set: calcTotal
    }
});

// function calcTotal(totalBudget){
//     var totalBudget = 0;
//     for (i=0; i < this.events.length; i++){
//         totalBudget = totalBudget + this.events[i].transaction;
//     };
//     return totalBudget;
// };

const User = mongoose.model("User", user)

module.exports = User;