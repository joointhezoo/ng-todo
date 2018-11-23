import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store'

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoService } from './todo.service';
import { AuthService } from './auth/auth.service';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AppRoutingModule} from './app-routing.model';
import { FormsModule } from '@angular/forms';
import { TodoItemComponent } from './todo-list/todo-item/todo-item.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { reducers } from './store/app.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects} from '../app/auth/store/auth.effects';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    SigninComponent,
    SignupComponent,
    TodoItemComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AuthEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [TodoService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
