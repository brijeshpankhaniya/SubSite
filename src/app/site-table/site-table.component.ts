import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Shared/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-site-table',
  templateUrl: './site-table.component.html',
  styleUrls: ['./site-table.component.css']
})
export class SiteTableComponent implements OnInit {
  SubArray: any[] = [];

  constructor(private api: ApiService,private router: Router) { }

  ngOnInit() {
    
    this.getAllSubsite();
  }
  getAllSubsite(){
    this.api.getAllSubsite().then((result) => {
      console.log("responce form service:",result);
      this.SubArray = result;
    }).catch((error) => {
      console.log(" Api error is:", error);
     });
  }

  back(){
    this.router.navigate(['']);

  }

  deleteSite(Url,Id){
    console.log("site path:",Url);
   this.api.deleteSite(Url).then((res)=> {
     console.log( "delete responce",res);
     this.SubArray.splice(Id);
      alert("Site deleted successfully.");
     // this.router.navigate(['sitetable']);
  });
 
  }

}
