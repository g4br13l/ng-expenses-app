import { Routes } from '@angular/router';
import {GroupListComponent} from "./modules/group/page/group-list/group-list.component";
import {GroupNewComponent} from "./modules/group/page/group-new/group-new.component";
import {ContactListComponent} from "./modules/contacts/page/contact-list/contact-list.component";
import {ContactNewComponent} from "./modules/contacts/page/contact-new/contact-new.component";
import {Observable} from "rxjs";

export const routes: Routes = [

  {
    path: 'contacts',
    children: [
      {
        path: '',
        title: 'Contacts',
        component: ContactListComponent,
      },
      {
        path: 'new',
        title: 'New Contact',
        component: ContactNewComponent
      }
    ]
  },
  {
    path: 'groups',
    children: [
      {
        path: '',
        title: 'Groups',
        component: GroupListComponent
      },
      {
        path: 'new',
        title: 'New Group',
        component: GroupNewComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: 'groups',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'groups',
    pathMatch: 'full'
  },

];
