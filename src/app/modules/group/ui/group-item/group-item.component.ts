import {Component, Input, OnInit} from '@angular/core';
import {Group} from "../../group";
import {NgClass} from "@angular/common";
import {GroupStyle} from "../../group-style";

@Component({
  selector: 'app-group-item',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './group-item.component.html'
})


export class GroupItemComponent {

  @Input({required: true})
  group!: Group;

  @Input()
  style: GroupStyle = { 'color': 'text-neutral', 'icon': 'question_mark' };


}
