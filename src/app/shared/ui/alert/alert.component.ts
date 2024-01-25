import {Component, computed, effect, inject, Input, OnInit, WritableSignal} from '@angular/core';
import {AlertStateSigI, AlertStateSig} from "./data/alert-stateSig";
import {getState} from "@ngrx/signals";
import {debounce, debounceTime, delay, filter, pipe, timeout} from "rxjs";
import {toObservable} from "@angular/core/rxjs-interop";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './alert.component.html'
})


export class AlertComponent {

  protected alertSig = inject(AlertStateSig);
  protected alertState = this.alertSig.getState();
  protected alertStateObs = toObservable(this.alertState);



  constructor() {

    effect(() => {
      this.alertStateObs.pipe(delay(this.alertState().timeToHide)).subscribe(alertState => {
        if (alertState.show) this.close();
      })
    });
  }

  protected close() {
    this.alertSig.setState({...this.alertState(), show: false});
  }


}
