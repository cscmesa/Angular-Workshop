import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFirestoreCollection } from '@angular/fire/firestore';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  firestoreCollection: AngularFirestoreCollection<any>;
  firestoreData: Observable<any[]>;

  constructor(private afs: AngularFirestore) {}

  getMessages() {
    this.firestoreCollection = this.afs.collection('testData');
    this.firestoreData = this.firestoreCollection.valueChanges();
    return this.firestoreData;
  }

  sendMessage() {

  }
}
