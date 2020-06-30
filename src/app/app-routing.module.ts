import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddSubSiteComponent } from './add-sub-site/add-sub-site.component';
import { SiteTableComponent } from './site-table/site-table.component';


const routes: Routes = [

   
  { path:'',component:AddSubSiteComponent},
  { path:'sitetable',component:SiteTableComponent}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
