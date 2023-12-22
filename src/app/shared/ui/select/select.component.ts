import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [],
  templateUrl: './select.component.html'
})
export class SelectComponent {

  @Input({required: true})
  label!: string;

  @Input({required: false, transform: (check: boolean) => check ? 'checked' : ''})
  checked: string = '';

}


