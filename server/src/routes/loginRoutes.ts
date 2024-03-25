import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('hi there!');
});

router.get('/login', (req: Request, res: Response) => {
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

router.post('/login', (req: Request, res: Response) => {
  const { email, password } = req.body;
  res.send(email + password);
});

export { router };
