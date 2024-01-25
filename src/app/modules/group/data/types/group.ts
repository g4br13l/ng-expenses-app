import { Timestamp } from "@angular/fire/firestore/lite/firebase"



export type Group = {

  id?: string,
  title: string,
  spent: number,
  category: groupCategory,
  status: statusGroup,
  created: Timestamp
}


export enum groupCategory {
  House = 'House',
  Travel = 'Travel',
  Food = 'Food',
  Shopping = 'Shopping',
  Gift = 'Gift',
  Other = 'Other',
}

export enum statusGroup {
  opened = 'opened',    // aberto
  pending = 'pending',  // pendente
  paid = 'paid',        // pago
}
