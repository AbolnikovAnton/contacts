import { Component, OnInit } from '@angular/core';
import { ContactRecord } from '../contact-record';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  contacts: ContactRecord[] = [];

  constructor() { }

  ngOnInit(): void {
    this.contacts.push({name: 'Vasya', surname: 'Ku', telephone: '+972534281872', city: 'Tel Aviv'});
    this.contacts.push({name: 'Anton', surname: 'Knb', telephone: '+972534541872', city: 'Tel '});

  }

}
