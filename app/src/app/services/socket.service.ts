import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { io, Socket } from 'socket.io-client';
// import io, { Socket } from 'socket.io-client';
const SERVER_URL = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private socket!: Socket;
  private userJoinedSubject = new Subject<string>();
  constructor(){}


  initSocket(){
    this.socket = io(SERVER_URL);

    this.socket.on('user-joined', (username: string) => {
      this.userJoinedSubject.next(`${username} has joined the chat`);
    });

    return()=>{this.socket.disconnect();}

  }

  notifyUserJoined(username: string) {
    this.socket.emit('user-joined', username);
  }

  send(message:string) {
      if (this.socket) {
      this.socket.emit('message', message); 
    } else {
      console.error('Socket is not initialized.');
    }
  }
  getMessage(): Observable<string> {
    return new Observable((observer) => {
      if (this.socket) {
        this.socket.on('message', (data: string) => {
          observer.next(data);  
        });
      } else {
        console.error('Socket not initialized.');  
      }
  
    });
  }
  
  // onMessage(): Observable<any> {
  //   return new Observable(observer => {
  //     const messageHandler = (data: any) => {
  //       observer.next(data);
  //     };

  //     this.socket.on('message', messageHandler);

  //     // Cleanup function
  //     return () => {
  //       this.socket.off('message', messageHandler);
  //     };
  //   });
  // }
  
}
  // constructor() {
  //   this.socket = io('http://localhost:3000');

  //   this.socket.on('connect', () => {
  //     console.log('Connected to server with id:', this.socket.id);
  //   });

  //   this.socket.on('disconnect', () => {
  //     console.log('Disconnected from server');
  //   });    
  //  }
  //  listenForMessages(): Observable<any> {
  //   return new Observable((subscriber) => {
  //     this.socket.on('new-message', (message) => {
  //       subscriber.next(message);
  //     });
  //   });
  // }

  // emitMessage(eventName: string, data: any): void {
  //   this.socket.emit(eventName, data);
  // }

  //  public disconnect(): void {
  //   this.socket.disconnect();
  // }

