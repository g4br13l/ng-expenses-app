import {getState, patchState, signalStore, withComputed, withHooks, withMethods, withState} from "@ngrx/signals";
import {computed, effect, inject} from "@angular/core";
import {Group} from "../types/group";
import {GroupStateI, GroupStateSig} from "./group.stateSig";
import {GroupService} from "../group.service";
import {rxMethod} from "@ngrx/signals/rxjs-interop";
import {Observable, pipe, switchAll, switchMap, tap} from "rxjs";
import {AlertStateSig} from "../../../../shared/ui/alert/data/alert-stateSig";
import {Router} from "@angular/router";



export const GroupStoreSig = signalStore(

  { providedIn: 'root' },


  withState<GroupStateI>(GroupStateSig), //selectors


  withComputed(state => ({

    /*error: computed(() => {
      if (state.error()) throw Error(`${state.error()}`);
      return null;
    }),*/
    /*error: computed(() => {

      let loading = state.isLoading();
      let groupsError = state.groups();

      if (groupsError instanceof Error) {
        return groupsError.message;
      }
      else return null;
    }),*/

    groupsCount: computed(() => {
      if (state.groups() instanceof Array) {
        return (state.groups() as Group[]).length;
      }
      else return 0;
    })

  })),

  // Actions + Effects + Reducers
  withMethods((
    state,
    groupService = inject(GroupService),
    alertStateSig = inject(AlertStateSig),
    router = inject(Router)
  ) => ({

    getGroupsApi() {

      patchState(state, {isLoading: true});

      groupService.fetchAllGroups().then(resp => {

        if (resp instanceof Error) {
          patchState(state, {error: resp.message, isLoading: false});
          throw resp;
        }
        else patchState(state, {groups: resp, isLoading: false});

      })
    },

    addGroupsApi(newGroup: Group, successUrl?: string) {

      patchState(state, {isLoading: true});

      groupService.addGroup(newGroup).then(resp => {

        patchState(state, {groups: resp, isLoading: false});

        if(successUrl) {
          router.navigate([successUrl]).then(res => {

            alertStateSig.setState({
              show: true,
              type: 'done',
              message: 'Group added successfully',
              timeToHide: 9000
            })

          })
        }

      })
      .catch(error => {
        patchState(state, {error: error.message, isLoading: false});
        throw Error(error.message);
      })


    },

    /*fetchAllGroups: rxMethod<void>( pipe(switchMap(() => {

      return groupService.fetchAllGroups().pipe( tap({

        next: (groupsResp: Group[]) => { //Reducer

          const groupState: GroupStateI = {
            groups: groupsResp,
            error: state.error(),
            isLoading: false
          }
          patchState(state, groupState);
        },

        error: (err) => {
          patchState(state, {error: err});
          console.log(`storeSign http error: ${err} `);
        }
      }))

    })))*/
  })),


/*  withHooks({

    onInit(store) {
      //store.fetchAllGroups();
      //store.getGroupsApi();

      /!*effect( () => {

        const actualStore = getState(store);
        console.log('effect => groupSig() => ', actualStore);
        if(actualStore.groups === undefined) patchState(store, {error: 'Error getting groups'});
        console.log('effect after => groupSig() => ', actualStore);
      })*!/

    }
  })*/



)


