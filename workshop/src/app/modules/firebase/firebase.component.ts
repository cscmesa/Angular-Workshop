import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {

  dbData: any;

  constructor(private firestore: FirestoreService) {
    this.dbData = this.firestore.getMessages();
  }

  sendMessage() {

  }

  ngOnInit() {
  }

}
