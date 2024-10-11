import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SocketService } from '../services/socket.service';
import { FormsModule} from '@angular/forms';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit{
   messagecontent: string="";
   messages: string[] = [];
   ioConnection: any;
   username: string = 'User';

   constructor(private socketService: SocketService){

   }
   ngOnInit() {
     this.initIoConnection();
     this.notifyUserJoin(); 
   }
   private initIoConnection(){
    this.socketService.initSocket();
    this.ioConnection = this.socketService.getMessage().subscribe((message:string) => {
        this.messages.push(message);
    });
   }

   chat(){
      if(this.messagecontent){
        this.socketService.send(this.messagecontent);
        this.messagecontent = "";
      }else{
        console.log("no message")
      }
   }
   notifyUserJoin() {
    const joinMessage = `${this.username} has joined the chat.`;
    this.socketService.send(joinMessage); 
   
  }
   
}






//   message: string;
//   messages: string[] = [];

//   constructor(private socketService: SocketService) { }

//   ngOnInit() {
//     this.socketService.getMessages().subscribe((message: string) => {
//       this.messages.push(message);
//     });
//   }

//   sendMessage() {
//     this.socketService.sendMessage(this.message);
//     this.message = '';
//   }
  
  
  
  
  
  
  
  
  
  // public messages: string[] = [];

  // constructor(private socketService: SocketService, private messageSubscription: Subscription) {}

  // ngOnInit(): void {
  //   this.messageSubscription = this.socketService.listenForMessages()
  //     .subscribe((message: string) => {
  //       console.log('New message:', message);
  //       this.messages.push(message);  
  //     });
  // }
  // ngOnDestroy(): void {
  //   if (this.messageSubscription) {
  //     this.messageSubscription.unsubscribe();
  //   }
  //   this.socketService.disconnect();
  // }

  //   sendMessage(message: string): void {
  //     this.socketService.emitMessage('send-message' , message);
  //   }


