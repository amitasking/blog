import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrtComponent } from './crt.component';

describe('CrtComponent', () => {
  let component: CrtComponent;
  let fixture: ComponentFixture<CrtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
