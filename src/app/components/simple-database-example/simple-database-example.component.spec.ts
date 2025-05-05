import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleDatabaseExampleComponent } from './simple-database-example.component';

describe('SimpleDatabaseExampleComponent', () => {
  let component: SimpleDatabaseExampleComponent;
  let fixture: ComponentFixture<SimpleDatabaseExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleDatabaseExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleDatabaseExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
