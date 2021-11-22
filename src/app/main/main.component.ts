import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
  constructor(private formBuilder: FormBuilder,private consultService: ConsultService) { }

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
    this.consult.first=this.predictform.value.primer;
    this.consult.second=this.predictform.value.second;
    this.consult.third=this.predictform.value.thrid;
    this.consult.fourth=this.predictform.value.fourth;
    this.consult.fifth=this.predictform.value.fifth;
    console.log(this.consult.second);
  }
}
