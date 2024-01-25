import {computed, inject, Injectable, Signal, signal} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {groupCategory, Group, statusGroup} from "./types/group";
import {
  getDocs,
  CollectionReference,
  collection,
  collectionData,
  Firestore,
  doc,
  getDoc, addDoc
} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root',
})
export class GroupService {

  private http: HttpClient = inject(HttpClient);
  private firestore = inject(Firestore);

  private groupsCollection = collection(this.firestore, 'groups') as CollectionReference<Group>;



  async fetchAllGroups(): Promise<Group[] | Error> {

    const querySnap = await getDocs(this.groupsCollection);

    if (querySnap.empty) return Error(`Error fetching groups data`);
    else return querySnap.docs.map((groupDoc) =>  ({ ...groupDoc.data(), id: groupDoc.id }) );
  }


  async addGroup(group: Group): Promise<any> {

    return await addDoc(this.groupsCollection, group);
  }



/*  getGroups(title: string): Observable<Group[]> {
    return this.http.get<Group[]>(`${this.baseUrl}?title=${title}`);
  } */

}
