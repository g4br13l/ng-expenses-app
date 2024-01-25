import {Component, Input, OnInit} from '@angular/core';
import {Group} from "../../data/types/group";
import {NgClass} from "@angular/common";
import {groupStyle, GroupStyleI} from "../../data/types/groupStyle";


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

  @Input({required: false})
  style: GroupStyleI = groupStyle.neutral;

  /*@Input({ transform: toGroupItemStyle })
  style: GroupItemStyle = {
    'text_color': 'text-neutral',
    'badge_color': 'badge-neutral',
    'icon': 'question_mark'
  };*/


}
