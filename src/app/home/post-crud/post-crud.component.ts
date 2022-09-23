import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Post } from 'src/app/interfaces/postInterface.type';
import { ApiCrudService } from 'src/app/services/api-crud.service';

@Component({
  selector: 'app-post-crud',
  templateUrl: './post-crud.component.html',
  styleUrls: ['./post-crud.component.scss']
})
export class PostCrudComponent implements OnInit {

  columnsToDisplay = ['userId','title','body']
  data: Post[] = [];
  dataSource : any
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private apicrud: ApiCrudService) {
    this.apicrud.getAll().subscribe((e) => {this.data = e; console.log(this.data)
      this.dataSource = new MatTableDataSource<Post>(this.data)
      this.dataSource.paginator = this.paginator;
      console.log(this.data)
    })
    //this.apicrud.getAll().subscribe(e => {this.data = e
    //console.log(this.data)})

    
  }

  ngOnInit(): void {
    
  }

}
