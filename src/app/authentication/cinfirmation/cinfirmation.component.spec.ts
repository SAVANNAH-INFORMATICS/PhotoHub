import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinfirmationComponent } from './cinfirmation.component';

describe('CinfirmationComponent', () => {
  let component: CinfirmationComponent;
  let fixture: ComponentFixture<CinfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CinfirmationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CinfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
