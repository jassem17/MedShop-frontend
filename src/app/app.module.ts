import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductService } from './services/product.service';
import { SubCategoriesComponent } from './components/sub-categories/sub-categories.component';
import { HomeComponent } from './components/home/home.component';
import {  RouterModule, Routes } from '@angular/router';
import { Covid19Component } from './components/sub-categories/covid19/covid19.component';
import { SoinsPansementsComponent } from './components/sub-categories/soins-pansements/soins-pansements.component';
import { CardiologueComponent } from './components/sub-categories/cardiologue/cardiologue.component';
import { InstrumentationsComponent } from './components/sub-categories/instrumentations/instrumentations.component';
import { KinesitherapieComponent } from './components/sub-categories/kinesitherapie/kinesitherapie.component';
import { MobilierComponent } from './components/sub-categories/mobilier/mobilier.component';
//import { AppRoutingModule } from './app-routing.module';
import { HeadacheComponent } from './headache/headache.component';
import { Navbar1Component } from './navbar1/navbar1.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { FooterComponent } from './footer/footer.component';
import { Dafalgan1gComponent } from './dafalgan1g/dafalgan1g.component';
import { TablemassageComponent } from './tablemassage/tablemassage.component';
import { FoldablemtComponent } from './foldablemt/foldablemt.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HairComponent } from './hair/hair.component';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { SearchComponent } from './components/search/search.component';
import { CardStatusComponent } from './components/card-status/card-status.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';

/*const appRoutes: Routes =[
  {path: 'product-list' ,component: ProductListComponent},
  {path:'soins-pansement',component:SoinsPansementsComponent},
  {path:'cardiologue',component:CardiologueComponent},
  {path:'instrumentations',component:InstrumentationsComponent},
  {path:'kinesitherapie',component:KinesitherapieComponent},
  {path:'mobilier',component:MobilierComponent},
  {path:'covid19' , component:Covid19Component},
  { path: 'headache', component: HeadacheComponent },
  { path: 'dafalgan1g', component: Dafalgan1gComponent},
  { path: 'tablemassage', component: TablemassageComponent},
  { path: 'foldablemt', component: FoldablemtComponent},
  {path :'category/:id',component: ProductListComponent},
  {path:'product-list/:key' , component: ProductListComponent },
  {path: '', component:HomeComponent },
  {path: 'hair', component:HairComponent }

]*/

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    SubCategoriesComponent,
    HomeComponent,
    Covid19Component,
    SoinsPansementsComponent,
    CardiologueComponent,
    InstrumentationsComponent,
    KinesitherapieComponent,
    MobilierComponent,
    HeadacheComponent,
    Navbar1Component,
    Navbar2Component,
    FooterComponent,
    Dafalgan1gComponent,
    TablemassageComponent,
    FoldablemtComponent,
    HairComponent,
    SkeletonComponent,
    SearchComponent,
    CardStatusComponent,
    LoginComponent,
  
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    //RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
