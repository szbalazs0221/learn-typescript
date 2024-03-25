import { Router, Request, Response } from 'express';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

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

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;
  if (email) {
    res.send(email.toUpperCase());
  } else {
    res.send('You must provide an email');
  }
});

export { router };
