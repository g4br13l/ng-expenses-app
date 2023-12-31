import {Component, Input, OnInit} from '@angular/core';
import {Group} from "../../group";
import {NgClass} from "@angular/common";
import {GroupStyle} from "../../group-style";
import {GroupItemStyle} from "../../group-item-style";
import {toGroupItemStyle} from "../../toGroupItemStyle";


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

  @Input({ transform: toGroupItemStyle })
  style: GroupItemStyle = {
    'text_color': 'text-neutral',
    'badge_color': 'badge-neutral',
    'icon': 'question_mark'
  };


}
