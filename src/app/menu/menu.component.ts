import { Component, OnInit } from '@angular/core';
import {Menu} from "./menu";
import {Router} from "@angular/router";

@Component({
  selector: 'app-memu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  propertiesMenu:Array<Menu> =[
    {
      id:"1",
      title:"DashBord",
      icon:"fa-solid fa-chart-line",
      url:"",
      sousMenu:[
        {
          id:"11",
          title:"Vue d\'ensemble",
          icon:"fa-solid fa-chart-pie",
          url:""
        },
        {
          id:"12",
          title:"Statistiques",
          icon:"fa-solid fa-chart-bar",
          url:"stats"
        }
      ]
    },
    {
      id:"2",
      title:"Parametrizes",
      icon:"fa-solid fa-bars",
      url:"",
      sousMenu:[
        {
          id:"21",
          title:"Users",
          icon:"fa-solid fa-users",
          url:""
        },
        {
          id:"22",
          title:"Teams",
          icon:"fa-solid fa-people-group",
          url:""
        }
      ]
    },
    {
      id:"3",
      title:"Admission",
      icon:"fa-solid fa-certificate",
      url:"",
      sousMenu:[
        {
          id:"31",
          title:"List Admission",
          icon:"fa-solid fa-cash-register",
          url:""
        },
        {
          id:"33",
          title:"UpComing interviews",
          icon:"fa-solid fa-clipboard-question",
          url:""
        },
      ]
    },
    {
      id:"4",
      title:"Notifications",
      icon:"fa-solid fa-bell",
      url:"",
      sousMenu:[
        {
          id:"41",
          title:"New Posts",
          icon:"fa-solid fa-blog",
          url:""
        },
        {
          id:"42",
          title:"New Comments",
          icon:"fa-solid fa-comments",
          url:""
        },
        {
          id:"43",
          title:"New reacts",
          icon:"fa-solid fa-heart",
          url:""
        }
      ]
    },
    {
      id:"5",
      title:"Reclamations",
      icon:"fa-solid fa-spell-check",
      url:"",
      sousMenu:[
        {
          id:"51",
          title:"list Reclamations",
          icon:"fa-solid fa-list-check",
          url:""
        }
      ]
    },
  ];

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  navigate(url?:string){
    this.router.navigate([url]);
  }

}
