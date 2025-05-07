import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleDatabaseComponent } from './simple-database.component';

describe('SimpleDatabaseComponent', () => {
  let component: SimpleDatabaseComponent;
  let fixture: ComponentFixture<SimpleDatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleDatabaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
