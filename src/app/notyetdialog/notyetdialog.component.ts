import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-notyetdialog',
  templateUrl: './notyetdialog.component.html',
  styleUrls: ['./notyetdialog.component.css']
})
export class NotyetdialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NotyetdialogComponent>) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

}
