import { Component, OnInit } from '@angular/core';
import pnp from "@pnp/pnpjs";
import {  sitefield } from '../Shared/models/sitemodel';
import { ApiService } from '../Shared/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-sub-site',
  templateUrl: './add-sub-site.component.html',
  styleUrls: ['./add-sub-site.component.css']
})
export class AddSubSiteComponent implements OnInit {
  site:sitefield=new sitefield();


  constructor( private apiservice :ApiService,private router: Router) { }

  ngOnInit() {
   // this.getall();

    
  }
  // getall(){
  //   pnp.sp.web.get().then(function(web) {
  //     alert ("Title: " + web.Title + "\r\n" + "Description: " + web.Description);
  // });
  // }
   

  

 addsite(site)
  {
    console.log("site fields:",site);
    pnp.sp.web.webs.add(site.siteTitle,site.siteUrl, site.siteDiscription, "STS", 1033, true).then( function (result){
      if (result.data.Created){
        alert("Subsite is created successfully!!!!");
        
      }
    });
    this.router.navigate(['sitetable']);
    
  }

  
}
