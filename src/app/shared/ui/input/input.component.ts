import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    NgClass,
    ReactiveFormsModule
  ],
  templateUrl: './input.component.html',
})


export class InputComponent {

  @Input()
  name?: string;

  /*@Input()
  model: boolean = false;*/

  @Input()
  label?: string;

  @Input()
  placeholder: string = '';

  @Input()
  icon?: string;

}
