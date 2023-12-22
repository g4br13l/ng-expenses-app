import {Injectable, Signal, signal, WritableSignal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BreadCrumbService {

  private path: WritableSignal<string[]> = signal<string[]>(['-']);



  public getPathSig(): Signal<string[]> {
    return this.path.asReadonly();
  }

  public setPathSig(newPath: string[]): void {
    //this.breadCrumb.update((value) => value);
    this.path.set(newPath);
  }


}
