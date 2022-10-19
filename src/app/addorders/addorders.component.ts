import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addorders',
  templateUrl: './addorders.component.html',
  styleUrls: ['./addorders.component.css']
})
export class AddordersComponent implements OnInit {

  constructor() { }

  name=""
  contactNo=""
  email=""
  deliveryAddress=""

  status:boolean=false

  readValues=()=>{
    let data={
      "name":this.name,
      "contactNo":this.contactNo,
      "email":this.email,
      "deliveryAddress":this.deliveryAddress
    }

    console.log(data)
    this.status=true
  }

  ngOnInit(): void {
  }

}
