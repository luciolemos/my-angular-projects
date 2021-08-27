import { EmptyComponent } from './components/empty/empty.component';
import { ChekoutComponent } from './components/chekout/chekout.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { UsersComponent } from './components/users/users.component';
import { PostContentComponent } from './components/post-content/post-content.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: PostContentComponent},
  {path:'about', component:AboutComponent},
  {path:'users', component:UsersComponent},
  {path:'products', component:ProductsComponent},
  {path:'checkout', component:ChekoutComponent},
  {path:'empty', component:EmptyComponent},







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
