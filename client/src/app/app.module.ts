import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './appRouting/app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http"
import { ReactiveFormsModule, FormsModule } from "@angular/forms"
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomInterceptorService } from './services/interceptors/custom-interceptor.service';
import { ProductsListComponent } from './components/products-list/products-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignInComponent,
    SignUpComponent,
    ProductsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [{ useClass: CustomInterceptorService, provide: HTTP_INTERCEPTORS, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
