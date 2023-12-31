import {Component, computed, inject, Inject, OnInit, signal, Signal, WritableSignal} from '@angular/core';
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
import {AsyncPipe, NgForOf} from "@angular/common";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {debounceTime, Observable} from "rxjs";

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
    NgForOf,
    FormsModule,
    AsyncPipe,
    ReactiveFormsModule

  ],
  templateUrl: './group-list.component.html'
})


export class GroupListComponent implements OnInit {

  private groupService = inject(GroupService);
  private breadCrumbService = inject(BreadCrumbService);

  protected groupsFetchedSig = signal<Group[] | undefined>(undefined);
  protected groupsVisibleSig = signal<Group[] | undefined>(undefined);

  titleSearch = new FormControl;

  stylePending: GroupStyle = { 'color': 'primary', 'icon': 'attach_money' };
  styleFinished: GroupStyle = { 'color': 'success', 'icon': 'done' };
  styleUnknown: GroupStyle = { 'color': 'neutral', 'icon': 'question_mark' };



  ngOnInit(): void {

    this.breadCrumbService.setPathSig(['Groups']);
    this.fetchAllGroups();
    this.titleSearch.valueChanges.pipe(debounceTime(400))
      .subscribe(searchText => this.filterByTitle(searchText) )
  }



  protected filterByTitle(searchText: string): void {
    console.log(searchText);

    this.groupsVisibleSig.update(groups => {

      if (!searchText || searchText == '') return this.groupsFetchedSig();

      const searchTextLow: string = searchText.toLowerCase();

      return this.groupsFetchedSig()?.filter((group) => {
        const titlesLow: string[] = group.title.toLowerCase().split(' ');
        return (
          group.title.toLowerCase().startsWith(searchTextLow) ||
          titlesLow.find(titleLow => titleLow.startsWith(searchTextLow))
        )
      })

    })

  }



  protected filterByStatus() {

  }



  fetchAllGroups(): void  {

    this.groupService.getAllGroups().subscribe({
      next: (resp) => {
        this.groupsFetchedSig.set(resp);
        this.groupsVisibleSig.set(resp);
      },
      error: (err) => {
        console.log('error getting all groups: ', err);
      }
    })
  }


}



















