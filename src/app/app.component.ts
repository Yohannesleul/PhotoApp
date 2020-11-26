import { Component } from '@angular/core';
import { GetApiService } from './get-api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'photo-app';
 resultData:any;

  constructor(private api:GetApiService){

  }
  
  ngOnInit(){
    this.api.apiCall().subscribe((res)=>{
       console.log(res);
      // var result=data;
      
      this.resultData=res;




    })
  }
  
}
