


export interface GroupStyleI {
  text_color: string,
  badge_color: string,
  /*icon: string*/
}


export const groupStyle = ({
  primary: { text_color: 'text-primary', badge_color: 'badge-primary' },
  success: { text_color: 'text-success', badge_color: 'badge-success' },
  neutral: { text_color: 'text-neutral', badge_color: 'badge-neutral' }
});
