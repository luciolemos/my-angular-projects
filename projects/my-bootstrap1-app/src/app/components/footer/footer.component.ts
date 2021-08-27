import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faUnlock} from '@fortawesome/free-solid-svg-icons';
import { faUserCircle} from '@fortawesome/free-solid-svg-icons';
import { faHome} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  // Ícones do FontAwesome
  faCoffee=faCoffee;
  faUnlock=faUnlock;
  faUserCircle=faUserCircle;
  faHome=faHome;



  constructor() { }

  ngOnInit() {
  }

}
