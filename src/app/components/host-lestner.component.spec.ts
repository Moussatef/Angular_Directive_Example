import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostLestnerComponent } from './host-lestner.component';

describe('HostLestnerComponent', () => {
  let component: HostLestnerComponent;
  let fixture: ComponentFixture<HostLestnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostLestnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostLestnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
