import { Component, OnInit , ComponentFactoryResolver} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserdataService } from '../services/userdata.service';
import { RouterModule, Routes } from '@angular/router';
import { Users } from '../models/users';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-user-create',
  standalone: true,
  imports: [FormsModule, HttpClientModule, RouterModule],
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.css',
  animations: [
    trigger('iderrorState', [
      state('show', style({
      opacity:1,
      display:'block'
    })),
      state('hide',style({
        opacity:0,
        display:'none'
      })),
      transition('show => hide', animate('1000ms ease-out')),
      transition('hide => show', animate('400ms ease-out')),
  ]),
      trigger('noticeState',[
        state('show', style({
          opacity:1,
          display:'none'
        })),
      transition('show => hide', animate('1000ms ease-out')),
      transition('hide => show', animate('400ms ease-out')),
      ])
  ]
})
export class UserCreateComponent implements OnInit { 
  username:string = "";
  password:string = "";
  email:string = "";
  roles:string = "";
  userid:number | null = null;
  userobjid:string = "";
  newuser?: Users;
  newUserMessage="";
  iderrormsg:string =" ID already exists";
  iderrormsg2:string ="";
  iderrorshow:boolean = false;
  noticeshow:boolean = false;

  constructor(private userdata: UserdataService) {}
  ngOnInit(){
    
  }
  get stateName(){
    return this.noticeshow? 'show':"hide";
  }
  get noticeName(){
    return this.noticeshow? 'show':"hide";
  }
  addnewUser(event: Event){
    event.preventDefault();
    if(this.userid == null){
      this.iderrorshow = !this.iderrorshow;
    }else{
      this.newuser = {
        id: this.userid,
        username: this.username,
        password: this.password,
        email: this.email
      } as Users;
      this.userdata.add(this.newuser).subscribe((data)=>{
      console.log(data);
    this.noticeshow = true;
    if( data == null){
      this.newUserMessage = "new use (" + this.username + ") was created";
    }else{
      this.newUserMessage = "error";
    }
  this.userid = null;
  this.username = "";
  this.password = "";
  this.email = "";
  this.roles = "";
    });
    }
  }
  checkvalidid(event: Event) {
    const target = event.target as HTMLInputElement;
    const userId = Number(target.value);
    this.noticeshow = false;
    this.userdata.verify(userId).subscribe((data) => {  
      if (data.success === 0) {
        this.iderrormsg2 = "something above " + data.topnum;
        this.iderrorshow = true;
      } else {
        this.iderrorshow = false;
        this.iderrormsg2 = "";
      }
    });
  }
  
}
