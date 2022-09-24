import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Post } from 'src/app/interfaces/postInterface.type';
import { ApiCrudService } from 'src/app/services/api-crud.service';
import { AddFormComponent } from './forms/add-form/add-form.component';
import { DeleteFormComponent } from './forms/delete-form/delete-form.component';

@Component({
  selector: 'app-post-crud',
  templateUrl: './post-crud.component.html',
  styleUrls: ['./post-crud.component.scss']
})
export class PostCrudComponent implements OnInit {

  columnsToDisplay = ['userId','title','body','actions']
  data: Post[] = [];
  dataSource : MatTableDataSource<Post>;
  
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  constructor(private apicrud: ApiCrudService,
              public dialog: MatDialog) {
  };
  addPost(){
    this.dialog.open(AddFormComponent,{
      width:'30%'
    }).afterClosed().subscribe(val=>{
      if (val === 'Guardar'){
        this.getAllPost();
      }
    });
  }
  ngOnInit(): void { 
    this.getAllPost();
  }
  getAllPost(){
    this.apicrud.getAll().subscribe((e) => {this.data = e;
      this.dataSource = new MatTableDataSource<Post>(this.data)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
  editPost(row: any){
    this.dialog.open(AddFormComponent,{
      width: '30%',
      data:row
    }).afterClosed().subscribe(val=>{
      if (val === 'Actualizar'){
        this.getAllPost();
      }
    });;
  }
  deletePost(id:number){
    this.apicrud.deletePost(id).subscribe({
      next:(res) => {
        alert("Producto eliminado");
        this.getAllPost();
      },
      error:()=>{
        alert("Error al eliminar el elemento")
      }
    })
  }
}
