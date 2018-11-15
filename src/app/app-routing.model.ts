import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoListComponent } from './todo-list/todo-list.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ErrorPageComponent } from './error-page/error-page.component';

export const appRoute: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full'},
  { path: 'todo', component: TodoListComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'error', component: ErrorPageComponent },
  { path: '**', redirectTo: '/error'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}



