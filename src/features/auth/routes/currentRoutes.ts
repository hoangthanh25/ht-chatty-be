import { CurrentUser } from '@auth/controllers/current-user';
import { authMiddleWare } from '@global/helpers/auth-middleware';
import express, { Router } from 'express';

class CurrentUserRoutes {
  private route: Router;

  constructor() {
    this.route = express.Router();
  }

  public routes(): Router {
    this.route.post('/currentuser', authMiddleWare.checkAuthentication, CurrentUser.prototype.read);

    return this.route;
  }
}

export const currentUserRoutes: CurrentUserRoutes = new CurrentUserRoutes();
