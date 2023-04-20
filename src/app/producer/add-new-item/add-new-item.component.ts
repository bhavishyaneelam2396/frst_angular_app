import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-new-item',
  templateUrl: './add-new-item.component.html',
  styleUrls: ['./add-new-item.component.scss']
})
export class AddNewItemComponent implements OnInit {
  title!:string
  constructor(  public dialogRef: MatDialogRef<AddNewItemComponent>,@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
