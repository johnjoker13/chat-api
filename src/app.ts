/* eslint-disable no-console */
import 'reflect-metadata';
import express, { Router } from 'express';
import { config as DataSource } from './database/config/app-data-source';

export class App {
  private _app: express.Application;

  constructor() {
    this._app = express();
    this._app.use(express.json());
  }

  public startServer(PORT: number): void {
    this._app.listen(PORT);
  }

  public initDataBase(): void {
    DataSource.initialize()
      .then(() => console.log('Data source has been initialized'))
      .catch((err: Error) => console.log('Error during Data Source initialization:', err));
  }

  public addRouter(router: Router): void {
    this._app.use(router);
  }

  public getApp(): express.Application {
    return this._app;
  }
}
