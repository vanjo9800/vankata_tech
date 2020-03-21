import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-medialog',
  templateUrl: './medialog.component.html',
  styleUrls: ['./medialog.component.css']
})
export class MedialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MedialogComponent>) { }

  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close();
  }

}
