import {computed, ErrorHandler, inject, Injectable} from '@angular/core';
import {AlertStateSig} from "../ui/alert/data/alert-stateSig";



@Injectable()


export class AppErrorHandler implements ErrorHandler {

  protected alertStateSig = inject(AlertStateSig)

  /*constructor() { }*/

  handleError(error: unknown): void {

    this.alertStateSig.setState({
      show: true,
      type: 'error',
      message: (error as Error).message,
      timeToHide: 9000
    })

    console.error('handleError: ', error);

    //throw new Error('Method not implemented.');
  }



}
