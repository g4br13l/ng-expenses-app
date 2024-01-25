import {Component, inject, OnInit} from '@angular/core';
import {GroupItemComponent} from "../../ui/group-item/group-item.component";
import {InputComponent} from "../../../../shared/ui/input/input.component";
import {KeletonComponent} from "../../../../shared/ui/keleton/keleton.component";
import {RouterLink} from "@angular/router";
import {SelectComponent} from "../../../../shared/ui/select/select.component";
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Group, groupCategory, statusGroup} from "../../data/types/group";
import {GroupStoreSig} from "../../data/state/group.storeSig";
import {DatePipe} from "@angular/common";
import { Timestamp } from '@angular/fire/firestore';
import {disableDebugTools} from "@angular/platform-browser";

@Component({
  selector: 'app-group-new',
  standalone: true,
  imports: [
    GroupItemComponent,
    InputComponent,
    KeletonComponent,
    RouterLink,
    SelectComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './group-new.component.html'
})



export class GroupNewComponent {

  groupStore = inject(GroupStoreSig);
  fb = inject(FormBuilder);
  datePipe = inject(DatePipe);

  protected readonly statusGroup = statusGroup;
  protected groupCategory = Object.values(groupCategory);

  protected formNewGroup = this.fb.group({
    title: [ '', [Validators.required, Validators.minLength(3), Validators.maxLength(100)] ],
    category: [ '', [Validators.required] ],
    status: [ {value: statusGroup.opened, disabled: true} , [] ],
    created:[ {value: this.datePipe.transform(Date.now(), 'dd/MM/yyyy'), disabled: true}, [] ]
  })



  addGroup(formGroup: any): void {

    console.log('formGroup.value => ', formGroup.value);
    console.log('formGroup.getRawValue() => ', formGroup.getRawValue());

    const newGroup: Group = {
      ...formGroup.getRawValue(),
      spent: 0,
      created: Timestamp.fromDate(new Date)
    }

    console.log('newGroup => ', newGroup);

    this.groupStore.addGroupsApi(newGroup, 'groups');
  }



}
