import {computed, effect, Injectable, Signal, signal} from '@angular/core';
import {signalState} from "@ngrx/signals";
import {StateSignal} from "@ngrx/signals/src/state-signal";


export interface AlertStateSigI {
  show: boolean;
  message: string;
  type?: 'info' | 'done' | 'error' | '' ,
  timeToHide: number;
}


@Injectable({providedIn: 'root'})

export class AlertStateSig {

  private alertLocalStateSig = signal<AlertStateSigI>({
    show: false,
    message: '',
    type: '',
    timeToHide: 9000
  })

  //public alertStateSig = computed(() => this.alertLocalStateSig());



  public getState(): Signal<AlertStateSigI> {
    console.log(`alertStateSig get: ${this.alertLocalStateSig()}`);
    return this.alertLocalStateSig.asReadonly();
  }


  public setState(newAlertStateSig: AlertStateSigI) {
    this.alertLocalStateSig.set(newAlertStateSig);
    console.log(`this.alertLocalStateSig().show: ${this.alertLocalStateSig().show}`)
  }

}
