import { Request, Response, Router } from 'express';

export const userRouter = Router();

userRouter.post('/users', (_request: Request, response: Response) => {
  return response.status(201).send();
});
