import { Component, OnInit } from '@angular/core';

import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {

  dbCollection: AngularFirestoreCollection<any>;
  dbData: Observable<any[]>
  data: any;

  constructor(private afs: AngularFirestore) {
    this.dbCollection = this.afs.collection('testData');
    this.dbData = this.dbCollection.valueChanges();
  }

  ngOnInit() {
  }

}
