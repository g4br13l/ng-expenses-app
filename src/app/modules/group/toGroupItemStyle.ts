import {GroupStyle} from "./group-style";


export function toGroupItemStyle(styleReceived: GroupStyle) {
  if (styleReceived.color == 'primary') {
    return {
      'text_color': 'text-primary',
      'badge_color': 'badge-primary',
      'icon': 'question_mark'
    };
  }
  else if (styleReceived.color == 'success') {
    return {
      'text_color': 'text-success',
      'badge_color': 'badge-success',
      'icon': 'question_mark'
    };
  }
  else return {
      'text_color': 'text-success',
      'badge_color': 'badge-neutral',
      'icon': 'question_mark'
    };
}
