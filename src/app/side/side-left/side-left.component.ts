import {Component, Input} from '@angular/core';


@Component({
  selector:'side-left',
  styleUrls:['./bar-left.css'],
  templateUrl:'./side-left.component.html'
})

export class SideLeftComponent{
  @Input() navChildrenList:any;
public  list:any=[{title:'1'},{title:'1'},{title:'1'},{title:'1'},{title:'1'}]



}

