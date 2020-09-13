import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.css']
})
export class TableUsersComponent implements OnInit {
  numOfUsers: number;
  users: {id: number, exportedImg: string; name: string; email: string, Country: string; 'JoinedDates': Date; }[];

  constructor() { }

  ngOnInit() {
    this.numOfUsers = 2227;
    this.users = [
      {'id': 1, 'exportedImg': '../../../assets/images/table/Profile Avatar.png',
      'name' : 'Amel Youssef' , 'email': 'amal@sdd.com', 'Country': 'Country' , 'JoinedDates' : new Date()},
      {'id': 2, 'exportedImg': '../../../assets/images/table/Profile Avatar-1.png',
      'name' : 'Amel Youssef' , 'email': 'amal@sdd.com' , 'Country': 'Country' , 'JoinedDates' : new Date()},
      {'id': 3, 'exportedImg': '../../../assets/images/table/Profile Avatar-2.png',
      'name' : 'Amel Youssef' , 'email': 'amal@sdd.com' , 'Country': 'Country' , 'JoinedDates' : new Date()},
      {'id': 4, 'exportedImg': '../../../assets/images/table/Profile Avatar-3.png',
      'name' : 'Amel Youssef' , 'email': 'amal@sdd.com' , 'Country': 'Country' , 'JoinedDates' : new Date()},
      {'id': 5, 'exportedImg': '../../../assets/images/table/Profile Avatar-4.png',
      'name' : 'Amel Youssef' , 'email': 'amal@sdd.com' , 'Country': 'Country' , 'JoinedDates' : new Date()},
      {'id': 6, 'exportedImg': '../../../assets/images/table/Profile Avatar-5.png',
      'name' : 'Amel Youssef' , 'email': 'amal@sdd.com', 'Country': 'Country' , 'JoinedDates' : new Date()},
      {'id': 7, 'exportedImg': '../../../assets/images/table/Profile Avatar-6.png',
      'name' : 'Amel Youssef' , 'email': 'amal@sdd.com' , 'Country': 'Country' , 'JoinedDates' : new Date()},
      {'id': 8, 'exportedImg': '../../../assets/images/table/Profile Avatar-7.png',
      'name' : 'Amel Youssef' , 'email': 'amal@sdd.com', 'Country': 'Country' , 'JoinedDates' : new Date()},
      {'id': 9, 'exportedImg': '../../../assets/images/table/Profile Avatar-8.png',
      'name' : 'Amel Youssef' , 'email': 'amal@sdd.com', 'Country': 'Country' , 'JoinedDates' : new Date()},
      {'id': 10, 'exportedImg': '../../../assets/images/table/Profile Avatar-9.png',
      'name' : 'Amel Youssef' , 'email': 'amal@sdd.com', 'Country': 'Country' , 'JoinedDates' : new Date()},
      {'id': 11, 'exportedImg': '../../../assets/images/table/Profile Avatar-10.png',
      'name' : 'Amel Youssef' , 'email': 'amal@sdd.com', 'Country': 'Country' , 'JoinedDates' : new Date()},
  ];
  }

}
