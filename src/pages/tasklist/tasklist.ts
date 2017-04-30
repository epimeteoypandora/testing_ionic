import { Component } from '@angular/core';
import {NavController, ItemSliding} from 'ionic-angular';
import { Task } from './task';

import { Country } from '../classes/locations/Country';

import { Category } from '../classes/categories/Category';

import { Advert } from '../classes/general/Advert';

@Component({
  selector: 'page-home',
  templateUrl: 'tasklist.html'
})
export class TaskListPage {
  tasks: Array<Task> = [];
  countries: Array<Country> = [];
  countrySelected:Number;
  stateSelected:Number;  
  provinceSelected:Number;    
  townSelected:Number;    
  pointOfInterestSelected:Number;   

  searcher:String;

  categories: Array<Category> = [];
  categorySelected:Number;   

  adverts: Array<Advert> = [];
  selectedAdverts: Array<Advert> = [];

  constructor(public navCtrl: NavController) {
    this.tasks = [
    {title:'Milk', status: 'open'},
    {title:'Eggs', status: 'open'},
    {title:'Syrup', status: 'open'},
    {title:'Pancake Mix', status: 'open'}
    ];



    this.countries = [
    {name:"España", states:[
        {name:"Andalucía", provinces:[
          {name:"Málaga", towns:[
            {name:"Málaga", pointsOfInterest:[
              {name:"Alcazaba de Málaga"}, 
              {name:"Museo Picasso"}               
            ]},
            {name:"Ronda", pointsOfInterest:[
              {name:"Puente Nuevo"},
              {name:"Baños Arabes"}, 
              {name:"Palacio de Mondragón"}                             
            ]}, 
            {name:"Antequera", pointsOfInterest:[
              {name:"Torcal de Antequera"},
              {name:"Peña de los Enamorados"}, 
              {name:"Caminito del Rey"}   
            ]},                         
          ]},
          {name:"Sevilla", towns:[]},
          {name:"Córdoba", towns:[]},          
        ]}, 
        {name:"Castilla la Mancha", provinces:[]}        

      ]
    },
    {name:"Francia", states:[
        {name:"Andalucía", provinces:[
          {name:"Málaga", towns:[
            {name:"Málaga", pointsOfInterest:[
              {name:"Alcazaba de Málaga"}, 
              {name:"Museo Picasso"}               
            ]},
            {name:"Ronda", pointsOfInterest:[
              {name:"Puente Nuevo"},
              {name:"Baños Arabes"}, 
              {name:"Palacio de Mondragón"}                             
            ]}, 
            {name:"Antequera", pointsOfInterest:[
              {name:"Torcal de Antequera"},
              {name:"Peña de los Enamorados"}, 
              {name:"Caminito del Rey"}   
            ]},                         
          ]},
          {name:"Sevilla", towns:[]},
          {name:"Córdoba", towns:[]},          
        ]}, 
        {name:"Castilla la Mancha", provinces:[]}        

      ]
    }    
    ];

    this.categories=[
      {name:"Motor"},
      {name:"Informática"},
      {name:"Otros"}
      ];



    this.adverts=[
      {name:"Vendo motocicleta",description:"",img:"",initialDate:new Date(99, 5, 24), finalDate:new Date(99, 5, 24)},
      {name:"Vendo motocicleta",description:"",img:"",initialDate:new Date(99, 5, 24), finalDate:new Date(99, 5, 24)},
      {name:"Vendo motocicleta",description:"",img:"",initialDate:new Date(99, 5, 24), finalDate:new Date(99, 5, 24)}
      ];      


    //this.countries = [
    //"España",
    //"Francia",
    //"Italia",
    //"Alemania"
    //];

    //this.countrySelected=this.countries[0];
    this.countrySelected=-1;
    this.stateSelected=-1;   
    this.provinceSelected=-1;   
    this.townSelected=-1;             
    this.pointOfInterestSelected=-1;    

    this.selectedAdverts=[];   
  }
  addItem() {
    let theNewTask: string = prompt("New Task");
    if (theNewTask !== '') {
      this.tasks.push({ title: theNewTask, status: 'open' });
    }
  }
  markAsDone(slidingItem: ItemSliding, task: Task) {
    task.status = "done";
    slidingItem.close();
  }
  removeTask(slidingItem: ItemSliding, task: Task) {
    task.status = "removed";
    let index = this.tasks.indexOf(task);
    if (index > -1) {
      this.tasks.splice(index, 1);
    }
    slidingItem.close();
  }

  see(){
    alert(this.searcher);
    //SE HACE LLAMADO A SERVIDOR CON LOS PARÁMETROS DE BÚSQUEDA Y SE OBTIENEN LOS RESULTADOS
    this.selectedAdverts=this.adverts;
  }
}
