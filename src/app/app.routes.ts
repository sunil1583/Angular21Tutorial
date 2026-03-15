import { Routes } from '@angular/router';
import { DataBinding } from './components/data-binding/data-binding';
import { Variables } from './components/variables/variables';
import { SignalComponent } from './components/signal/signal';
import { NotFound } from './components/not-found/not-found';
import { ControlFlow } from './components/control-flow/control-flow';
import { DynamicCssClass } from './components/dynamic-css-class/dynamic-css-class';
import { UserMaster } from './components/user-master/user-master';
import { ReactiveUser } from './components/reactive-user/reactive-user';
import { BatchMaster } from './components/batch-master/batch-master';
import { SignalForm } from './components/signal-form/signal-form';
import { Login } from './components/login/login';
import { Layout } from './components/layout/layout';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'home',
    component: Layout,
    canActivate: [authGuard],
    children: [
      {
        path: 'databinding',
        component: DataBinding,
      },
      {
        path: 'variables',
        component: Variables,
      },
      {
        path: 'signal',
        component: SignalComponent,
        canActivate: [authGuard],
      },
      {
        path: 'controlFlow',
        component: ControlFlow,
      },
      {
        path: 'dynamicCss',
        component: DynamicCssClass,
      },
      {
        path: 'users',
        component: UserMaster,
      },
      {
        path: 'reactiveUsers',
        component: ReactiveUser,
      },
      {
        path: 'signalUsers',
        component: SignalForm,
      },
      {
        path: 'batches',
        component: BatchMaster,
      },
    ],
  },
  {
    path: '**',
    component: NotFound,
  },
];
