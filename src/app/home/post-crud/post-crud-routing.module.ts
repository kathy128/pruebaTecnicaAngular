import { NgModule } from '@angular/core';
import {PostCrudComponent} from './post-crud.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: PostCrudComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostCrudRoutingModule { }
