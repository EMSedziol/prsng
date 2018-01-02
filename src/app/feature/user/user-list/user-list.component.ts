import { Component, OnInit } from '@angular/core';

import { User } from '../../../model/user';
import { UserService } from '../../../service/user.service';
import { SortPipe } from '../../../util/sort-pipe';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  title = 'User List';

  selectedSortKey = 'id';
  sortDesc = 'asc';
  sortKeys: string[] = ['id', 'userName', 'firstName', 'lastName'];
  selectSortKey: string[] = ['id', 'userName', 'firstName', 'lastName'];
  users: User[];


  constructor(private UserSvc: UserService) { }

  ngOnInit() {
    this.UserSvc.list()
      .subscribe(users => {
        this.users = users;
        console.log(users);
      });
  }

}
