import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductslistComponent } from './productslist/productslist.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ErrorComponent } from './error/error.component';
import { CatMenComponent } from './cat-men/cat-men.component';
import { CatWomenComponent } from './cat-women/cat-women.component';
import { CatJewelComponent } from './cat-jewel/cat-jewel.component';
import { CatElectComponent } from './cat-elect/cat-elect.component';

const routes: Routes = [
  {
    path:'',
    component:ProductslistComponent
  },
  {
    path:'log-in',
    component:LoginComponent
  },
  {
    path:'Men',
    component:CatMenComponent
  },
  {
    path:'Women',
    component:CatWomenComponent
  },
  {
    path:'Jewel',
    component:CatJewelComponent
  },
  {
    path:'Electronics',
    component:CatElectComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'**',
    component:ErrorComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
