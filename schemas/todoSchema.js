const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    status: {
        type: String,
        enum: ['active', 'inactive']
    },
    date: {
        type: Date,
        default: Date.now,
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }
});

// instance methodes
todoSchema.methods = {
    findActive: function () {
        return mongoose.model('Todo').find({status: "inactive"});
    },
    findActiveCallBack: function (cb) {
        return mongoose.model('Todo').find({status: "inactive"}, cb);
    }
}

// static methods
todoSchema.statics = {
    findByJs: function(){
        return this.find({description: /end/i});
    }
}

//query helpers
todoSchema.query = {
    byLanguage: function(language) {
        return this.find({description: new RegExp(language, "i")}) // new RegExp()
    }
}

module.exports = todoSchema;