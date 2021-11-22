import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AppComponent } from '../app.component';
import { Consult } from '../module/consult';
import { ConsultService } from '../Services/consult.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  sideBarOpen=true;
  isShow = false;
  consult = new Consult();
  consults:Array<Consult>[];
  constructor(private formBuilder: FormBuilder,private consultService: ConsultService, private appComponent:AppComponent) { }

  ngOnInit(): void {
  }
  sideBarToggler() {
    this.sideBarOpen=!this.sideBarOpen;
  }

  predictform = this.formBuilder.group({
    primer: [''],
    second: [''],
    third:[''],
    fourth:[''],
    fifth:[''],
  });
  toggleDisplay() {
    this.isShow = !this.isShow;
  }
  test() {
    console.log("Hola");
  }

  predictResult() {
    this.consult.cantMultas=this.predictform.value.primer;
    this.consult.creditHistory=this.predictform.value.second;
    this.consult.loanAmount=this.predictform.value.third;
    this.consult.nivelGravedadNum=this.predictform.value.fourth;
    this.consult.propertyAreaNum=this.predictform.value.fifth;
    this.consultService.postc( this.consult,this.appComponent.acountID).subscribe(
      data=>{
        console.log(this.consult);
      }
    );
    this.predictform.reset();
    
  }

  ConsultGet(){
      this.isShow = !this.isShow;
      this.consultService.Getconsult(this.appComponent.acountID).subscribe(
        (data: Consult[])=>{
          this.consults=data['data'];
          console.table(this.consults);
          
        }
      );
      
  }
}
