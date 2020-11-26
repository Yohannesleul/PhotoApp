import { Component, OnInit } from '@angular/core';
import { GetApiService } from '../../get-api.service';


@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.sass']
})
export class ImageComponent implements OnInit {

  isRated=false;

  resultData:any;
public listImages=[];
  constructor(private api:GetApiService){

  }
  changerating(){
    this.isRated=true;
  }

  

  ngOnInit(){
    this.api.apiCall().subscribe((res)=>{
       console.log(res);
      // var result=data;    
      this.resultData=res;
this.listImages=[]
    })
  }

  // search(){
  //   this.listImages= this.listImages.filter(res=>{
  //     return "id" in res;
  //   });
  //}
  
}
