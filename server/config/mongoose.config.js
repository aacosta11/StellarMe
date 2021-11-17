const mongoose = require('mongoose');
module.exports = DB => {
    mongoose.connect(`mongodb://localhost/${DB}`,
    {useNewUrlParser:true,useUnifiedTopology:true})
        .then(()=>console.log(`database: ${DB}`))
        .catch(err=>console.log(err))
};