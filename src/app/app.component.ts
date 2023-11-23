import { Component } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { ApiRestService } from './services/api-rest-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ferreteria-app';

  public readonly VAPID_PUBLIC_KEY = 'BO0dLzEYTs5OEFq4T78yemC5MMtG_rGHxyeNcadC5kbMDj-ai2IOe9D0-8Z2-xZHt19Z6TkkfUJAN7dQ9v_HVj4'

  constructor(private swPush: SwPush, 
              private apiRest: ApiRestService)            
{
    this.subscribeToNotifications();

}



subscribeToNotifications(): any {
    this.swPush.requestSubscription({ serverPublicKey: this.VAPID_PUBLIC_KEY })
      .then(sub => {
        const token = JSON.parse(JSON.stringify(sub));
        console.log('^^***** OJOOO ******', token);
        this.apiRest.saveToken(token).subscribe((res:Object)=>{
            console.log(res)
        }, (err)=>{
            console.log('ERR',err);

        });
      })
      .catch(err => console.error('UPS:(', err));
  }
  




}
