import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BroadcastService 
{
    private signalRSubject = new Subject<any>();

    // broadcast username
    sendSignalR(SignalRText: string) 
    {
        console.log(SignalRText);
        this.signalRSubject.next({"SignalR":SignalRText});
    }
    clearSignalR() 
    {
        this.signalRSubject.next();
    }
    onSignalR(): Observable<any> 
    {
        return this.signalRSubject.asObservable();
    }  
}