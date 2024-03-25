"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', (req, res) => {
    res.send('hi there!');
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
    if (email) {
        res.send(email.toUpperCase());
    }
    else {
        res.send('You must provide an email');
    }
});
