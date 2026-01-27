const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors= require('cors');

dotenv.config();
const app = express();

/* ✅ JSON parser (safe) */
app.use(express.json({ strict: false }));

/* ✅ Log every request (TEMP – helps debug) */
app.use((req, res, next) => {
    console.log(req.method, req.url, req.headers['content-type']);
    next();
});
app.use(cors());
/* ✅ MongoDB */
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

/* ✅ Routes */
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/task', require('./routes/taskRoutes'));

/* ✅ Test route (GET only) */
app.get('/api', (req, res) => {
    res.send('hi from madhu');
});

/* ✅ JSON error handler */
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.status(400).json({ message: "Invalid or empty JSON body" });
    }
    next();
});

/* ✅ Server */
const port = 3000;
app.listen(port, () => {
    console.log('server is running on port ' + port);
});