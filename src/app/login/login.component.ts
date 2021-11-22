import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


import { AppComponent } from '../app.component';
import { Cliente } from '../module/client';
import { ClientService } from '../Services/client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLogged = false;
  cliente = new Cliente();
  hide = true;
  password_confirm:string;
  password_check:string;

  
  constructor(private formBuilder: FormBuilder,private appComponent:AppComponent, private clientService: ClientService,private router:Router,
    private _snackBar: MatSnackBar) { }
  
  profileForm = this.formBuilder.group({
    email: [''],
    password: [''],
  });
  registerForm = this.formBuilder.group({
    email: [''],
    password: [''],
    checkPassword:[''],
  });
  ngOnInit(): void {
  }
  login() {
    this.cliente.email = this.profileForm.value.email;
    this.cliente.password = this.profileForm.value.password;
    this.clientService.loginUser(this.cliente).subscribe(data => {
      if (data) {
        this.appComponent.acountID=data['data']["id"];
        console.log(this.appComponent.acountID);
        this.router.navigate(['/main']);
        // this.isLogged = true;
      }else{
        console.log("no se puede entrar");
      }
     });
  }

  
  registerClient(){
    this.password_confirm = this.registerForm.value.password;
    this.password_check = this.registerForm.value.checkPassword;
    this.cliente.email=this.registerForm.value.email;
    this.cliente.password=this.registerForm.value.password;
    if(this.password_confirm==this.password_check && this.password_confirm!=""&& this.password_check!="" ){
      this.cliente.password = this.registerForm.value.password;
    }else{
      return alert("poner contraseña");
    }
    this.clientService.registerUser(this.cliente).subscribe(
      data=>{
        this.router.navigate(['/']);
      }
    );
    this._snackBar.open("Registrado!!","done!");
    // console.log(this.cliente);
    this.registerForm.reset();
  }

}
