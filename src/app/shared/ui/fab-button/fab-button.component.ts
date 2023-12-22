import {Component, Input} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-fab-button',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './fab-button.component.html'
})
export class FabButtonComponent {


  @Input()
  link?: string;

  //TODO: implement icon, color, and position variation

}
