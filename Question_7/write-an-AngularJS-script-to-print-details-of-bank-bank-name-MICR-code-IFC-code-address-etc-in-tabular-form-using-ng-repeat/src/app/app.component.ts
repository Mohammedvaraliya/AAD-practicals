import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Write an AngularJS script to print details of bank (bank name, MICR code, IFC code, address etc.) in tabular form using ng-repeat
  title =
    'write-an-AngularJS-script-to-print-details-of-bank-bank-name-MICR-code-IFC-code-address-etc-in-tabular-form-using-ng-repeat';
  banks = [
    {
      name: 'Kotak Mahindra Bank',
      MICR: 145255,
      IFC: 698524,
      address: 'Near Kotak Mahindra Bank',
    },
    {
      name: 'Kotak Mahindra Bank',
      MICR: 145255,
      IFC: 698524,
      address: 'Near Kotak Mahindra Bank',
    },
    {
      name: 'Kotak Mahindra Bank',
      MICR: 145255,
      IFC: 698524,
      address: 'Near Kotak Mahindra Bank',
    },
    {
      name: 'Kotak Mahindra Bank',
      MICR: 145255,
      IFC: 698524,
      address: 'Near Kotak Mahindra Bank',
    },
  ];

  headings = Object.keys(this.banks[0]);
}
