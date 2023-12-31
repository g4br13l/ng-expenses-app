import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Group} from "./group";
import {Observable} from "rxjs";
import {env} from "../../../env/env";
import {collection, collectionData, Firestore} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class GroupService {


  private http: HttpClient = inject(HttpClient);
  private firebase = inject(Firestore)

  baseUrl: string = 'http://localhost:3000/groups';


  getAllGroups(): Observable<Group[]> {

    const itemCollection = collection(this.firebase, 'groups');
    return collectionData(itemCollection) as Observable<Group[]>;
  }


  /*getAllGroups(): Observable<Group[]> {

    //return this.http.get<Group[]>(`${this.baseUrl}`);

    console.log('env.apiUrl => ', `${env.apiUrl}/groups`);
    return this.http.get<Group[]>(`${env.apiUrl}/groups`);
  }*/


  getGroups(title: string): Observable<Group[]> {

    return this.http.get<Group[]>(`${this.baseUrl}?title=${title}`);
  }

}
