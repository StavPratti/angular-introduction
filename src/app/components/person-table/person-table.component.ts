// This Angular component, PersonTableComponent, is designed to display details about a person or an "EPerson" (which could be an extended version of Person with additional properties). The component uses @Input() to receive data passed from a parent component and provides methods to check whether the data is of type Person or EPerson. It also determines what to display based on whether the person has an address or education field.

import { Component, Input } from '@angular/core';
import { EPerson } from 'src/app/shared/interfaces/eperson';
import { Person } from 'src/app/shared/interfaces/person';

@Component({
  selector: 'app-person-table',
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
  @Input() personInput: Person | EPerson | undefined;

  name = "Thanasis"
  addressOReducation: string = '';

  person = {
    givenName:"Thanasis",
    surName: "Androutsos",
    age: 20,
    email:'thanasis@aueb.gr'
  }
  
  isPerson():boolean {
    if (this.personInput && 'address' in this.personInput) {
      this.addressOReducation = this.personInput.address
      return 'address' in this.personInput;
    }
    return false;
  }

  isEPerson():boolean {
    if (this.personInput && 'education'in this.personInput){ 
      this.addressOReducation = this.personInput.education
      return 'education'in this.personInput;
    }  
    return false
  }
}