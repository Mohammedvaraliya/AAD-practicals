import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'write-an-AngularJS-script-to-print-details-of-bank-bank-name-MICR-code-IFC-code-address-etc-in-tabular-form-using-ng-repeat'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('write-an-AngularJS-script-to-print-details-of-bank-bank-name-MICR-code-IFC-code-address-etc-in-tabular-form-using-ng-repeat');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('write-an-AngularJS-script-to-print-details-of-bank-bank-name-MICR-code-IFC-code-address-etc-in-tabular-form-using-ng-repeat app is running!');
  });
});
