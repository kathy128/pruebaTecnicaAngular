import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCrudComponent } from './post-crud.component';
import { PostCrudRoutingModule } from './post-crud-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AddFormComponent } from './forms/add-form/add-form.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    PostCrudComponent,
    AddFormComponent,
  ],
  imports: [
    CommonModule,
    PostCrudRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
  ]
})
export class PostCrudModule { }
