import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCrudComponent } from './post-crud.component';
import { PostCrudRoutingModule } from './post-crud-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    PostCrudComponent,
  ],
  imports: [
    CommonModule,
    PostCrudRoutingModule,
    MatTableModule,
    MatPaginatorModule,
  ]
})
export class PostCrudModule { }
