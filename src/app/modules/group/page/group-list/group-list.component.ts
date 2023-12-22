import {Component, inject, Inject, OnInit, Signal} from '@angular/core';
import {GroupService} from "../../group.service";
import {Group} from "../../group";
import {GroupItemComponent} from "../../ui/group-item/group-item.component";
import {Router, RouterLink} from "@angular/router";
import {BreadCrumbService} from "../../../../shared/ui/bread-crumb/bread-crumb.service";
import {InputComponent} from "../../../../shared/ui/input/input.component";
import {SelectComponent} from "../../../../shared/ui/select/select.component";
import {KeletonComponent} from "../../../../shared/ui/keleton/keleton.component";
import {FabButtonComponent} from "../../../../shared/ui/fab-button/fab-button.component";
import {GroupStyle} from "../../group-style";
import {BreadCrumbComponent} from "../../../../shared/ui/bread-crumb/bread-crumb.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-groups',
  standalone: true,
  imports: [
    GroupItemComponent,
    InputComponent,
    SelectComponent,
    KeletonComponent,
    RouterLink,
    FabButtonComponent,
    BreadCrumbComponent,
    NgForOf

  ],
  templateUrl: './group-list.component.html'
})


export class GroupListComponent implements OnInit {

  private groupService = inject(GroupService);
  private breadCrumbService = inject(BreadCrumbService);

  groups?: Group[];
  titleSearch = '';

  styleFinished: GroupStyle = { 'color': 'text-success', 'icon': 'done' };
  stylePending: GroupStyle = { 'color': 'text-primary', 'icon': 'attach_money' };
  styleUnknown: GroupStyle = { 'color': 'text-neutral', 'icon': 'question_mark' };



  ngOnInit(): void {
    this.breadCrumbService.setPathSig(['Groups']);
    this.fetchAllGroups();
  }


  fetchGroupsByTitle() {
    this.groupService.getGroups(this.titleSearch).subscribe(resp => {
      this.groups = resp;
    });
  }


  fetchAllGroups(): void  {

    /*this.groups = [{  "id": 1,  "title": "Título1", "spent": "emprestou 10.000",
                      "category": "Home", "status": "pending", "created": "20 dez" }];*/

    this.groupService.getAllGroups().subscribe(resp => {
      this.groups = resp;
    });
  }


}



















