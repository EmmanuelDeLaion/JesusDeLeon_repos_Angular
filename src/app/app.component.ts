import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'JesusDeLeon-repos';

  constructor(public dataService: DataService){}

  setPopUp(){
    this.dataService.isActivePopUp = false;
    window.location.reload();
  }


}
