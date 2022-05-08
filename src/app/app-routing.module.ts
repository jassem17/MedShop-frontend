import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { CardiologueComponent } from './components/sub-categories/cardiologue/cardiologue.component';
import { Covid19Component } from './components/sub-categories/covid19/covid19.component';
import { InstrumentationsComponent } from './components/sub-categories/instrumentations/instrumentations.component';
import { KinesitherapieComponent } from './components/sub-categories/kinesitherapie/kinesitherapie.component';
import { MobilierComponent } from './components/sub-categories/mobilier/mobilier.component';
import { SoinsPansementsComponent } from './components/sub-categories/soins-pansements/soins-pansements.component';
import { Dafalgan1gComponent } from './dafalgan1g/dafalgan1g.component';
import { FoldablemtComponent } from './foldablemt/foldablemt.component';
import { HairComponent } from './hair/hair.component';
import { HeadacheComponent } from './headache/headache.component';
import { TablemassageComponent } from './tablemassage/tablemassage.component';


const routes: Routes = [
  {path: 'product-list' ,component: ProductListComponent},
  {path:'soins-pansement',component:SoinsPansementsComponent},
  {path:'cardiologue',component:CardiologueComponent},
  {path:'instrumentations',component:InstrumentationsComponent},
  {path:'kinesitherapie',component:KinesitherapieComponent},
  {path:'mobilier',component:MobilierComponent},
  {path:'covid19' , component:Covid19Component},
  {path:'purchase', component :PurchaseComponent},
  
  { path: 'headache', component: HeadacheComponent },
  { path: 'dafalgan1g', component: Dafalgan1gComponent},
  { path: 'tablemassage', component: TablemassageComponent},
  { path: 'foldablemt', component: FoldablemtComponent},
  {path :'category/:id',component: ProductListComponent},
  {path:'product-list/:key' , component: ProductListComponent },
  {path: 'product-detail/:id',component:ProductDetailComponent},
  {path: '', component:HomeComponent },
  {path: 'hair', component:HairComponent },
  {path: 'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }