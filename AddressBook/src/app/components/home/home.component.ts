import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressBookService } from 'src/app/services/address-book.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(
        private service: AddressBookService,
        private route: Router
    ) { }
    list: any;
    ngOnInit(): void {
        this.service.getList().subscribe((data: any) => {
            this.list = data.data;
        })
    }
    public id: any;
    onDelete(id: any) {
        this.service.deleteContact(id).subscribe((data: any) => {
            console.log("Deleted Contact");
            alert("Successfully Deleted Contact")
            this.ngOnInit();
        })
    }

    onUpdate(id: any, person: any) {
        this.service.updateContactData(id, person);
        this.route.navigate(["addPerson"]);
    }

}