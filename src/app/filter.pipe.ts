import { Pipe, PipeTransform, ɵConsole } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Array<any>, ...args: any): any {
   
    console.log("Value", value);
    console.log("arg", args);
    debugger;
    
    return value.filter((resultData)=>{
      if(args==''){
        return resultData;
      }
      else{ 
          return resultData.alt_description==args
    }
    //return null;
    })
  }

}
