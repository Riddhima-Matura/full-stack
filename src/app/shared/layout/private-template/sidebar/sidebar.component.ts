import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  items =[
    {label:'Dashboard', route:'/main/pages/dashboard'},
    {label:'User',route:'/main/pages/user'},
    {label:'Learning Material' , route:'/main/pages/learning-material'},
    {label:'Quiz', route:'/main/pages/quiz'},
    {label:'Uploads', route:'/main/pages/upload'},
    {label:'Score', route:'/main/pages/score'},
    {label:'Chat', route:'/main/pages/chat'}

  ]

}
