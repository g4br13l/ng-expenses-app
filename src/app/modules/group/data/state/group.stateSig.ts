import {signalState} from "@ngrx/signals";
import {Group} from "../types/group";


enum status {
  none = 'none',
  loading = 'loading',
  success = 'success',
  error = 'error'
}

export interface GroupStateI {
  groups: Group[],
  error: string | null,
  /*status: status,*/
  isLoading: boolean
}

export const groupState: GroupStateI = ({
  groups: [],
  error: null,
  isLoading: false,
});


export const GroupStateSig = signalState<GroupStateI>({
  groups: [],
  error: null,
  isLoading: false,
})
