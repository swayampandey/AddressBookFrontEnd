import { Component, OnInit } from '@angular/core';
import { PersonDetails } from 'src/app/model/person';
import { Router } from '@angular/router';
import { AddressBookService } from 'src/app/services/address-book.service';

@Component({
    selector: 'app-add-person',
    templateUrl: './add-person.component.html',
    styleUrls: ['./add-person.component.scss']
})
export class AddPersonComponent implements OnInit {

    constructor(private route: Router,
        private service: AddressBookService) { }

    ngOnInit(): void {
        if (this.service.Cid != 0) {
            this.addPerson = this.service.personData;
        }
    }
    addPerson: PersonDetails = new PersonDetails("", "", "", "", "", "", "", "");
    onSubmit() {
        if (this.service.Cid != 0) {
            this.service.updateContact(this.service.Cid, this.service.personData).subscribe((data: any) => {
                this.route.navigate([""]);
                this.service.updateContactData(0, null);
            })

        }
        else {
            console.log(this.addPerson)
            this.service.addPerson(this.addPerson).subscribe((data: any) => {
                alert("Contact Person Succesfully Added !!")
                console.log(data)
                this.route.navigate([""])
            })
        }

    }
    public cityList = [
        { value: "Select City" },
        { value: "Patna" },
        { value: "Muzaffarpur" },
        { value: "New Delhi" },
        { value: "Delhi" },
        { value: "Gurugram" },
        { value: "Noida" },
        { value: "Amaravati" },
        { value: "Itanagar" },
        { value: "Dispur" },
        { value: "Raipur" },
        { value: "Panaji" },
        { value: "Gandhinagar" },
        { value: "Chandigarh" },
        { value: "Shimla" },
        { value: "Ranchi" },
        { value: "Bengaluru" },
        { value: "Thiruvananthapuram" },
        { value: "Bhopal" },
        { value: "Mumbai" },
        { value: "Nagpur" },
        { value: "Pune" },
        { value: "Imphal" },
        { value: "Shillong" },
        { value: "Aizawl" },
        { value: "Kohima" },
        { value: "Bhubaneswar" },
        { value: "Chandigarh" },
        { value: "Jaipur" },
        { value: "Gangtok" },
        { value: "Chennai" },
        { value: "Hyderabad" },
        { value: "Agartala" },
        { value: "Lucknow" },
        { value: "Dehradun" },
        { value: "Kolkate" }
    ];

    public stateList = [
        { value: "Select State" },
        { value: "Andhra Pradesh" },
        { value: "Arunachal Pradesh	" },
        { value: "Assam	" },
        { value: "Bihar	" },
        { value: "Chhattisgarh" },
        { value: "Delhi" },
        { value: "Goa" },
        { value: "Gujarat" },
        { value: "Haryana" },
        { value: "Himachal Pradesh" },
        { value: "Jharkhand" },
        { value: "Karnataka" },
        { value: "Kerala" },
        { value: "Madhya Pradesh" },
        { value: "Maharashtra" },
        { value: "Manipur" },
        { value: "Meghalaya" },
        { value: "Mizoram" },
        { value: "Nagaland" },
        { value: "Odisha" },
        { value: "Punjab" },
        { value: "Rajasthan" },
        { value: "Sikkim" },
        { value: "Tamil Nadu" },
        { value: "Telangana" },
        { value: "Tripura" },
        { value: "Uttar Pradesh" },
        { value: "Uttarakhand" },
        { value: "West Bengal" }
    ];

}