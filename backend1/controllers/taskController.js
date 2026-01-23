const Task = require('../models/task');

exports.createTask = async (req, res) => {
    try {
        const newtask = await Task.create({
            title: req.body.title,
            description: req.body.description,
            status: req.body.status || "pending",
            user: req.user.id,
        });

        res.status(201).json({
            message: "Task created successfully",
            task: newtask
        });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

exports.getTask = async (req, res) => {
    try {
        const gettask= await Task.find({ user: req.user.id });
        res.status(200).json(gettask);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};
exports.getOneTask = async (req, res) => {
    try {
        const task = await Task.findOne({ _id: req.params.id, user: req.user.id });
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

exports.updateTask = async (req, res) => {
    try {
        const task = await Task.findOneAndUpdate(
            { _id: req.params.id, user: req.user.id },
            {
                title: req.body.title,
                description: req.body.description,
                status: req.body.status
            },
            { new: true }
        );

        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

exports.deleteTask = async (req, res) => {
    try {
        const task = await Task.findOneAndDelete({ _id: req.params.id, user: req.user.id });      
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

exports.updatetaskpatch = async (req, res) => {
    try {
        const task = await Task.findOneAndUpdate(
             { _id: req.params.id, user: req.user.id },
             { $set: req.body },
             { new: true }
        );

        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};