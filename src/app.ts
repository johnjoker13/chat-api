import 'reflect-metadata';
import express, { Router } from 'express';

export class App {
  private _app: express.Application;

  constructor() {
    this._app = express();
    this._app.use(express.json());
  }

  public startServer(): void {
    this._app.listen(3001);
  }

  public addRouter(router: Router): void {
    this._app.use(router);
  }

  public getApp(): express.Application {
    return this._app;
  }
}
