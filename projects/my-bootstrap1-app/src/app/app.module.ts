import { BadgeComponent } from './components/badge/badge.component';
import { EmptyComponent } from './components/empty/empty.component';
import { ChekoutComponent } from './components/chekout/chekout.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { UsersComponent } from './components/users/users.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { AccordionComponent } from './components/accordion/accordion.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { SideWidgetComponent } from './components/side-widget/side-widget.component';
import { CategoriesWidgetComponent } from './components/categories-widget/categories-widget.component';
import { SearchWidgetComponent } from './components/search-widget/search-widget.component';
import { PostContentComponent } from './components/post-content/post-content.component';
import { ResponsiveNavbarComponent } from './components/responsive-navbar/responsive-navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import {DomSanitizer} from '@angular/platform-browser';
// import { MatIconRegistry } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetStartedWithBootstrapComponent } from './components/get-started-with-bootstrap/get-started-with-bootstrap.component';

@NgModule({
  declarations: [
    AppComponent,
    ResponsiveNavbarComponent,
    PostContentComponent,
    SearchWidgetComponent,
    CategoriesWidgetComponent,
    SideWidgetComponent,
    FooterComponent,
    JumbotronComponent,
    AccordionComponent,
    UsersComponent,
    ProductsComponent,
    AboutComponent,
    ChekoutComponent,
    GetStartedWithBootstrapComponent,
    EmptyComponent,
    BadgeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    FontAwesomeModule,
    MatSliderModule,
    MatIconModule,
    // MatIconRegistry
    // FaIconLibrary
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
