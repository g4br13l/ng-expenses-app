import {Component, computed, inject, OnInit, signal} from '@angular/core';

import {GroupItemComponent} from "../../ui/group-item/group-item.component";
import {Router, RouterLink} from "@angular/router";
import {BreadCrumbService} from "../../../../shared/ui/bread-crumb/bread-crumb.service";
import {InputComponent} from "../../../../shared/ui/input/input.component";
import {SelectComponent} from "../../../../shared/ui/select/select.component";
import {KeletonComponent} from "../../../../shared/ui/keleton/keleton.component";
import {FabButtonComponent} from "../../../../shared/ui/fab-button/fab-button.component";
import {BreadCrumbComponent} from "../../../../shared/ui/bread-crumb/bread-crumb.component";
import {AsyncPipe, NgForOf} from "@angular/common";
import {FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {GroupStoreSig} from "../../data/state/group.storeSig";
import {getState, patchState, signalStore} from "@ngrx/signals";
import {debounceTime, fromEvent, Observable} from "rxjs";
import {groupStyle} from "../../data/types/groupStyle";
import {statusGroup} from "../../data/types/group";

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

  protected groupStore = inject(GroupStoreSig);
  private breadCrumbService = inject(BreadCrumbService);
  private fb = inject(FormBuilder);

  protected groupSig = computed(() => getState(this.groupStore));
  protected search = signal('');

  protected formFilter = this.fb.group({
    title: ['', []],
    pending: ['', []],
    finished: ['', []]
  })

  stylePending = { 'color': 'primary', 'icon': 'attach_money' };
  styleFulfilled = { 'color': 'success', 'icon': 'done' };
  styleUnknown = { 'color': 'neutral', 'icon': 'question_mark' };

  // TODO: Melhorar essa estilização
  //stylePending2: GroupStyleT = { color: "primary", icon: "" }


  ngOnInit(): void {
    this.breadCrumbService.setPathSig(['Groups']);
    this.fetchAllGroups();
  }


  protected changeSearch(event: Event, property: string): void {

    const element = event?.target as HTMLInputElement;

    fromEvent(element, 'input')
      .pipe(debounceTime(1000)).subscribe(searchTitle => {

      /*this.filterByTitle(searchTitle);*/
    })

    console.log('changeSearch(), search() ', this.search());
  }


  /*protected filterByTitle(searchTitle: string): Group[] | undefined {

    if (!searchTitle || searchTitle == '') return;
    const searchTitleLow: string = searchTitle.toLowerCase();

    this.groupStore.groups();

    return groups?.filter(group => {

      const titlesLow: string[] = group.title.toLowerCase().split(' ');
      const allWordsMatch = group.title.toLowerCase().startsWith(searchTextLow);
      const someWordMatch = titlesLow.find(titleLow => titleLow.startsWith(searchTextLow));
      return allWordsMatch || someWordMatch;
    })

  }*/


  protected filterByStatus() { }


  fetchAllGroups(): void  {

    this.groupStore.getGroupsApi();

    /*this.groupService.fetchAllGroups().subscribe({

      next: (groupsResp) => {
        const allGroups = groupsResp.map( doc => ({ ...doc} as Group) );
        this.groupStore.addGroupsApi(allGroups);
        patchState(this.groupStore, {isLoading: false});
      },

      error: (err) => {
        patchState(this.groupStore, {error: err});
        //console.log('error getting all groups: ', err);
      }
    })*/
  }


  protected readonly statusGroup = statusGroup;
  protected readonly groupStyle = groupStyle;
}



















