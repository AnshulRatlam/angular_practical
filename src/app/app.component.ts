import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Anshul_Angular_Practical';
  formGroupDetail! : FormGroup;
  formGroupGallery! : FormGroup;
  formGroupCost! : FormGroup;
  formGroupIncludes! : FormGroup;
  formGroupDates! : FormGroup;
  costArr!:FormArray;
  projectDetail : boolean = true;
  projectGallery : boolean= false;
  projectCost : boolean = false;
  projectIncludes : boolean = false;
  projectDates : boolean = false;
  last:boolean = false;
  data:any =[];
    constructor (private formBuilder:FormBuilder){}
  ngOnInit(){
    this.createProjectForm();
  }
  createProjectForm(){
    this.formGroupDetail = this.formBuilder.group({
      organization:[null,Validators.required],
      activity:[null,Validators.required],
      category:[null,Validators.required],
      title:[null,Validators.required],
      minimumAge:[null,Validators.required],
      MaximumAge:[null,Validators.required],

    });
   
    this.formGroupCost = this.formBuilder.group({
      name:[null,Validators.required],
      cost:''
    });
    this.formGroupIncludes = this.formBuilder.group({
      name:[null,Validators.required],
      includes:[null,Validators.required],
    });
   
  }
  createCost():FormGroup{
    return this.formBuilder.group({
      duration:'',
      cost:''
    })
  }
  addCost():void{
    this.costArr = this.formGroupCost.get('cost') as FormArray;
    this.costArr.push(this.createCost());
  }
  activateNextSec(sec:any){
     if(sec == 1 ){
      this.projectDetail = false;
      this.projectCost = true;
      this.projectIncludes = false;
     }
     if(sec == 2 ){
      this.projectDetail = false;
      this.projectCost = false;
      this.projectIncludes = true;
     }
     if(sec == 3 ){
      this.projectDetail = false;
      this.projectCost = false;
      this.projectIncludes = false;
      this.last = true
     }
        this.data.push(this.formGroupDetail.value)
        this.data.push(this.formGroupIncludes.value)
        this.data.push(this.formGroupCost.value)
  }
}
