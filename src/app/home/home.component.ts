import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
//import { select, Store } from "@ngrx/store";
import { Observable, Subject, Subscription } from "rxjs";
import { Message } from "../models/message";
import { SignalRService } from "../services/signalr/signalr.service";
import {​​​​​ BroadcastService }​​​​​ from "src/app/broadcast.service";
import { StockDemo } from "../models/stock";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
//  styleUrls: ["./home.component.scss"],
})

export class HomeComponent implements OnInit, OnDestroy {
   
  subscription:Subscription;
  message:string = "blank";

  //let jsonResult : any = JSON.parse(JSON.stringify(broadcastMessage));
  //let messageReceived: Models.HeaderBroadcastMessageModel = (<Models.HeaderBroadcastMessageModel>jsonResult);

  constructor(
    private router: Router,
    private signalRService: SignalRService,
    private broadcastService: BroadcastService)
   {

    this.subscription = this.broadcastService.onSignalR().subscribe(broadcastMessage => {
      if (broadcastMessage) 
      {
        console.log(broadcastMessage);
       // this.message = JSON.parse(JSON.stringify(broadcastMessage));
   
      let jsonResult:any=JSON.parse(JSON.stringify(broadcastMessage));
      let messageReceived:StockDemo = (<StockDemo>jsonResult);
      this.message = messageReceived.SignalR;

      } 
    });

  }

  ngOnInit(): void {

        // start the service to connect to azure signalR
        this.signalRService.init();

    /*
    this.store.pipe(select(selectName)).subscribe((name) => {
      this.name = name;
    });
    this.messages$ = this.store.pipe(select(selectMessages));
    this.loginError$ = this.store.pipe(select(selectError));
    this.store.dispatch(MessagesActions.loadMessages());
    // start the service to connect to azure signalR
    this.signalRService.init();
    this.signalRService.messages.subscribe((message) => {
      // create message
      const result = message.split("|");
      const sendMessage = new Message();
      sendMessage.sender = result[0];
      sendMessage.body = result[1];
      // this.messages.unshift(sendMessage);
      this.store.dispatch(
        MessagesActions.messageRecieved({ message: sendMessage })
      );
    });
    */

  }

  logout() {
   // this.router.navigateByUrl("/login");
  }
  
  send() {

    /*
    let sendMessage = new Message();
    sendMessage.body = this.messageInput;
    sendMessage.sender = this.name;
    this.store.dispatch(MessagesActions.messageSend({ message: sendMessage }));
    */
  }

  clear() {
   // this.store.dispatch(MessagesActions.clearMessages());
  }

  ngOnDestroy() {

   // this.unsubscribe$.next();
  //  this.unsubscribe$.complete();

  }

}
