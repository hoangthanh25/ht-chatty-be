import { SignIn } from '@auth/controllers/signin';
import { SignOut } from '@auth/controllers/signout';
import { SignUp } from '@auth/controllers/signup';
import express, { Router } from 'express';

class AuthRoutes {
  private route: Router;

  constructor() {
    this.route = express.Router();
  }

  public routes(): Router {
    this.route.post('/signup', SignUp.prototype.create);
    this.route.post('/signin', SignIn.prototype.read);

    return this.route;
  }

  public signoutRoute(): Router {
    this.route.post('/signout', SignOut.prototype.update);

    return this.route;
  }
}

export const authRoutes: AuthRoutes = new AuthRoutes();
