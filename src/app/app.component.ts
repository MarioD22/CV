import { Component } from '@angular/core';
import { PersonaService } from './persona.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[PersonaService],
})
export class AppComponent {
  title = 'CV';
  

}
