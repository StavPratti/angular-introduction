// This Angular component, SimpleDatatableExampleComponent, is likely used to display a datatable using the SimpleDatatableComponent. It imports data from the ManyPerson interface, which presumably contains a collection of EPerson or Person objects, and passes that data into the child SimpleDatatableComponent for rendering.

import { Component } from '@angular/core';
import { SimpleDatatableComponent } from '../simple-datatable/simple-datatable.component';
import { ManyPerson } from 'src/app/shared/interfaces/eperson';

@Component({
  selector: 'app-simple-datatable-example',
  imports: [SimpleDatatableComponent],
  templateUrl: './simple-datatable-example.component.html',
  styleUrl: './simple-datatable-example.component.css'
})
export class SimpleDatatableExampleComponent {
  manyPerson = ManyPerson;
}