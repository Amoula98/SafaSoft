import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import { NewUserDialogComponent } from './new-user-dialog/new-user-dialog.component';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.css']
})
export class TableUsersComponent implements OnInit {
  numOfUsers: number;
  displayedColumns = ['ExportedName', 'Email' , 'Country' , 'JoinedDates', 'Action'];
  users: {id: number, exportedImg: string; name: string; email: string, country: string; 'JoinedDates': Date; }[];
  dataSource: any;
  newUser: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    country: new FormControl(''),
    exportedImg: new FormControl('')
  });

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.numOfUsers = 2227;
    this.users = [
      {'id': 1, 'exportedImg': '../../../assets/images/table/Profile Avatar.png',
      'name' : 'Amel Youssef' , 'email': 'amal@sdd.com', 'country': 'country' , 'JoinedDates' : new Date()},
      {'id': 2, 'exportedImg': '../../../assets/images/table/Profile Avatar-1.png',
      'name' : 'Amel Youssef' , 'email': 'amal@sdd.com' , 'country': 'country' , 'JoinedDates' : new Date()},
      {'id': 3, 'exportedImg': '../../../assets/images/table/Profile Avatar-2.png',
      'name' : 'Amel Youssef' , 'email': 'amal@sdd.com' , 'country': 'country' , 'JoinedDates' : new Date()},
      {'id': 4, 'exportedImg': '../../../assets/images/table/Profile Avatar-3.png',
      'name' : 'Amel Youssef' , 'email': 'amal@sdd.com' , 'country': 'country' , 'JoinedDates' : new Date()},
      {'id': 5, 'exportedImg': '../../../assets/images/table/Profile Avatar-4.png',
      'name' : 'Amel Youssef' , 'email': 'amal@sdd.com' , 'country': 'country' , 'JoinedDates' : new Date()},
      {'id': 6, 'exportedImg': '../../../assets/images/table/Profile Avatar-5.png',
      'name' : 'Amel Youssef' , 'email': 'amal@sdd.com', 'country': 'country' , 'JoinedDates' : new Date()},
      {'id': 7, 'exportedImg': '../../../assets/images/table/Profile Avatar-6.png',
      'name' : 'Amel Youssef' , 'email': 'amal@sdd.com' , 'country': 'country' , 'JoinedDates' : new Date()},
      {'id': 8, 'exportedImg': '../../../assets/images/table/Profile Avatar-7.png',
      'name' : 'Amel Youssef' , 'email': 'amal@sdd.com', 'country': 'country' , 'JoinedDates' : new Date()},
      {'id': 9, 'exportedImg': '../../../assets/images/table/Profile Avatar-8.png',
      'name' : 'Amel Youssef' , 'email': 'amal@sdd.com', 'country': 'country' , 'JoinedDates' : new Date()},
      {'id': 10, 'exportedImg': '../../../assets/images/table/Profile Avatar-9.png',
      'name' : 'Amel Youssef' , 'email': 'amal@sdd.com', 'country': 'country' , 'JoinedDates' : new Date()},
      {'id': 11, 'exportedImg': '../../../assets/images/table/Profile Avatar-10.png',
      'name' : 'Amel Youssef' , 'email': 'amal@sdd.com', 'country': 'country' , 'JoinedDates' : new Date()},
  ];
  this.dataSource  = new MatTableDataSource(this.users);
  }
  addNewUser() {
      const dialogRef = this.dialog.open(NewUserDialogComponent, {
        width: '250px',
        data: this.newUser
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed', result, this.users.length, this.users.length + 1);
        const newUser = {id: this.users.length + 1, ...result.value, JoinedDates: new Date()};
        this.users.push(newUser);
        console.log('The dialog was closed', newUser,  this.users);
        this.dataSource  = new MatTableDataSource(this.users);
      });
  }
}
