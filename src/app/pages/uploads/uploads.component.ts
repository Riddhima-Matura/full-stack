import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.css']
})
export class UploadsComponent implements OnInit {

  allowedType =['.pdf', '.application/pdf']
  constructor() { }

  ngOnInit() {
  }

  OnFileUpload(event:any){
console.log(event);
const data = event.target.files[0]
console.log(data.name);

if(data.size > 2052 ){
  alert('size too large')
  return
}
// if(data.type != this.allowedType){
//   alert("not include this type")
// }


  }
}
