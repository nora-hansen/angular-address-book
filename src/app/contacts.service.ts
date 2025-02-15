import { Injectable } from '@angular/core';
import { Contact } from './contacts/model/contact';
import { CONTACTS } from './contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private currentId: number = 1;
  public contacts: Contact[] = CONTACTS;

  public getContactById(id: number | null): Contact | null {
    const contact = this.contacts.find((contact) => contact.id === id)
    if(!contact) {
      return null;
    }
    return contact;
  }

  public getAllContacts(): Contact[] {
    console.log("contacts", this.contacts)
    return this.contacts;
  }

  public addContact(contact: Contact) {
    this.contacts.push(contact)
  }
}
