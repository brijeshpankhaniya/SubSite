import { Injectable } from '@angular/core';
import  pnp, { Web }  from '@pnp/pnpjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  getAllSubsite(){
     return pnp.sp.web.webs.get();
  }
  
  deleteSite(Url){
    let web = new Web(Url);
    return web.delete();
  }
}
 