import { Component, OnInit } from '@angular/core';
//import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // items$: Observable<any[]>;

  // constructor(private firestore: Firestore) {
  //   const itemsCollection = collection(this.firestore, 'items');
  //   this.items$ = collectionData(itemsCollection, { idField: 'id' });
  // }

  ngOnInit(): void {}
}
