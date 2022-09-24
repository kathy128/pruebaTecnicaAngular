import { Component, Inject, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormGroup,FormBuilder, Validator, Validators } from '@angular/forms';
import { ApiCrudService } from 'src/app/services/api-crud.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {
postForm!: FormGroup;
actionBtn: string = 'Guardar'; 
  constructor(private formBuilder: FormBuilder, 
    private api: ApiCrudService,
    @Inject(MAT_DIALOG_DATA) public editPost: any,
    private dialogRef: MatDialogRef<AddFormComponent>) { }
    
  ngOnInit(): void {
    this.postForm = this.formBuilder.group({
    userId: ['',Validators.required],
    title: ['',Validators.required],
    body: ['',Validators.required]
});
  if(this.editPost){
    this.actionBtn = 'Actualizar'
    this.postForm.controls['userId'].setValue(this.editPost.userId);
    this.postForm.controls['title'].setValue(this.editPost.title);
    this.postForm.controls['body'].setValue(this.editPost.body);
  }
}

addPost(){
  if(!this.editPost){
    if(this.postForm.valid){
      this.api.postPost(this.postForm.value).subscribe({
        next:(res)=>{alert("Producto añadido Correctamente");
        this.postForm.reset();
        this.dialogRef.close();
      },
      error:()=>{
        alert("Error al añadir el producto")
      } 
      })
    }
}else{
  this.updatePost();
}
}
updatePost(){
  this.api.putPost(this.postForm.value, this.editPost.id)
    .subscribe({
      next:(res) => {alert("Valor actualizado");
    this.postForm.reset();
    this.dialogRef.close('updated');
  },
  error:() => {
    alert("Error al actualizar fila")
  },
});
  
}
}
