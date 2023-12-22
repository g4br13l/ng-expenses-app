import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
})
export class InputComponent {

  /*@Input({required: true})
  label!: string;*/

  @Input({required: true})
  placeholder!: string;

  @Input()
  icon?: string;

}
