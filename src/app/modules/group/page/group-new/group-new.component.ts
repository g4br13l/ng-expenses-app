import {Component, inject, OnInit, Signal} from '@angular/core';
import {BreadCrumbService} from "../../../../shared/ui/bread-crumb/bread-crumb.service";
import {GroupItemComponent} from "../../ui/group-item/group-item.component";
import {InputComponent} from "../../../../shared/ui/input/input.component";
import {KeletonComponent} from "../../../../shared/ui/keleton/keleton.component";
import {RouterLink} from "@angular/router";
import {SelectComponent} from "../../../../shared/ui/select/select.component";
import {FormsModule} from "@angular/forms";
import {Firestore, collectionData, collection} from '@angular/fire/firestore'
import {Observable} from "rxjs";
import {Group} from "../../group";

@Component({
  selector: 'app-group-new',
  standalone: true,
  imports: [
    GroupItemComponent,
    InputComponent,
    KeletonComponent,
    RouterLink,
    SelectComponent,
    FormsModule
  ],
  templateUrl: './group-new.component.html'
})



export class GroupNewComponent implements OnInit {

  firestore = inject(Firestore);

  group$?: Observable<Group[]>;
  protected title?: string;
  protected  category?: string;
  participants: [] = [];


  ngOnInit(): void { }


  addGroup(group: any): void {
    console.log('group.value => ', group.value);
    console.log('group.value.title => ', group.value.title);


    try {
      const itemCollection = collection(this.firestore, 'groups');
      this.group$ = collectionData(itemCollection) as Observable<Group[]>;

      /*const groupDoc = addDoc(collection(this.firestore, 'groups'), group.value).then(data => {
        console.log("Document written with ID: ", data.id);
      })*/

      //console.log("Document written with ID: ", groupDoc.id);
    }
    catch (err) {

    }
  }


}
