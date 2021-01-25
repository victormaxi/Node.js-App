const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

router.get('/', (req, res) => res.render('welcome'));

//Login Page
router.get('/login', (req, res) => res.render('login'));

//Register Page
router.get('/register',(req, res) => res.render('register'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) => 
res.render('dashboard', {
    name: req.user.name
}));

module.exports = router;