import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { AddNewItemComponent } from 'src/app/producer/add-new-item/add-new-item.component';
import { PRODUCTS_DATA } from '../app.db';
import { Products } from '../type.def';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss']
})
export class ProductGridComponent implements OnInit {
  userRole!:string
  @ViewChild(MatTable) table!: MatTable<Products>;

  constructor(private route:ActivatedRoute,public dialog: MatDialog) { }

  displayedColumns: string[] = ["ProductID","ProductName","CompanyProduced","ProductDetail","Cost","Edit"];
  dataSource = [...PRODUCTS_DATA];
  ngOnInit(): void {
    this.route.data.subscribe(x=>this.userRole=x['userRole'])
    console.log(this.route)
  }
  openDialog(openType:string,index:number){

    const props={type:openType,
    source:this.dataSource[index]}
    const dialogRef = this.dialog.open(AddNewItemComponent, {
      width: '400px',
      data: props,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.dataSource.push(result);
    });
  }
}
