"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', (req, res) => {
    if (req.session && req.session.loggedIn) {
        res.send(`
      <div>
        <p>You are logged in</p>
        <a href="/logout">Logout</a>
      </div>
    `);
    }
    else {
        res.send(`
    <div>
      <p>You are not logged in</p>
      <a href="/login">Login</a>
    </div>
  `);
    }
});
router.get('/login', (req, res) => {
    res.send(`
    <form method="POST">
      <div>
        <label>Email: </label>
        <input name="email" placeholder="Email address"/>
      </div>
      <div>
        <label>Password: </label>
        <input type="password" name="password" placeholder="*******"/>
      </div>
      <button>Submit</button>
    </form>
  `);
});
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email &&
        password &&
        email === 'test@test.com' &&
        password === 'password') {
        req.session = { loggedIn: true };
        res.redirect('/');
    }
    else {
        res.send('Invalid email or password');
    }
});
router.get('/logout', (req, res) => {
    req.session = undefined;
    res.redirect('/');
});
