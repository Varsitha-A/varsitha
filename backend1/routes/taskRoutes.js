const express = require('express');
const router = express.Router();

const { createTask, getTask ,getOneTask,updateTask,deleteTask,updatetaskpatch } = require('../controllers/taskController');
const { protect } = require('../middleware/authmiddleware');

router.post('/createtask', protect, createTask);
router.get('/gettask', protect, getTask);
router.get('/getonetask/:id', protect, getOneTask);
router.put('/updatetask/:id', protect, updateTask);
router.delete('/deletetask/:id', protect, deleteTask);
router.patch('/updatetaskpatch/:id', protect, updatetaskpatch);

module.exports = router;