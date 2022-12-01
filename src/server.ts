import { App } from './app';
import { userRouter } from './routes/user.router';

export const Server = new App();

Server.startServer(3001);

Server.initDataBase();

Server.addRouter(userRouter);
