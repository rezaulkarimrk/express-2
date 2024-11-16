const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const todoSchema = require('../schemas//todoSchema')

const Todo =  new mongoose.model('Todo', todoSchema);

//GET ALL THE TODOS
router.get('/', async (req, res) => {
    try {
        // const todo = await Todo.find({status: "active"});
        const todo = await Todo.find({status: "active"}).select({
            _id: 0,
            __v: 0,
            date: 0
        }).limit(2);

        res.status(200).json({
            result: todo
        })
    } catch (err) {
        res.status(500).json({
            error: "There was a server side error!"
        })
    }

});

// GET A TODO BY ID
router.get('/:id', async (req, res) => {
    try {
        const todoData = await Todo.find({_id: req.params.id});

        res.status(200).json({...todoData});
    } catch (err) {
        res.status(500).json({
            error: "There was server side error!"
        })
    }
});

// POST A TODO
router.post('/', async (req, res) => {
    try {
        const newTodo = new Todo(req.body);
        const todtData = await newTodo.save();
        res.status(202).json({
            message: "Todo was inserted successfully"
        });
    } catch(err) {
        res.status(500).json({
            error: 'There was a server side error!'
        })
    }
    
});

// POST MULTIPLE TODO
router.post('/all', async (req, res) => {
    try {
        const todoData = await Todo.insertMany(req.body);
        res.status(202).json({
            message: "Todos was inserted successfully"
        })
    } catch (err) {
        res.status(500).json({
            error: 'There ware a server side error!'
        })
    }
    
});

//PUT TODO
router.put('/:id', async (req, res) => {
    // updateOne
    // try{
    //     const todoData = await Todo.updateOne({_id: req.params.id}, {
    //         $set: {
    //             status: 'active'
    //         }
    //     })
    //     res.status(203).json({
    //         message: todoData
    //     })
    // } catch(err){
    //     res.status.json({
    //         error: "There was a server side error!"
    //     })
    // }

    //update many
    try {
        const todoData = await Todo.findByIdAndUpdate(
            {_id: req.params.id},
            {
                $set: {
                    status: "active"
                }
            },
            {
                new: true,
                useFindAndModify: false
            }
        )
        res.status(203).json(todoData);
    } catch (err) {
        res.status(500).send("There was a server side error!");
    }
})

// DELETE TODO
router.delete('/:id', async (req, res) => {
    try {
        const todoData = await Todo.deleteOne({_id: req.params.id});

        res.status(200).json({...todoData});
    } catch (err) {
        res.status(500).json({
            error: "There was a server side error!"
        })
    }
})

module.exports = router;