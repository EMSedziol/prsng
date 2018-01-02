import { Component } from '@angular/core';
import { Menu } from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  menuItems: Menu[] = [
    new Menu('UserList', '/user/List', 'List of Users')
  ];
  constructor() { }



}