import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AddressBookService {
    Cid: Number = 0;
    personData: any;
    updateContactData(id: any, person: any) {
        this.Cid = id;
        this.personData = person;
    }

    constructor(private http: HttpClient) {

    }
    addPerson(person: any) {
        return this.http.post("http://localhost:8085/addressbook/create", person);
    }
    getList() {
        return this.http.get("http://localhost:8085/addressbook/getall")
    }

    deleteContact(id: Number) {
        return this.http.delete("http://localhost:8085/addressbook/delete/" + id)
    }
    updateContact(id: Number, person: any) {
        return this.http.put("http://localhost:8085/addressbook/update/" + id, person)
    }
}