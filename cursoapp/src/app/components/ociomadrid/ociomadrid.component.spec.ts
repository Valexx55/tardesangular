import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OciomadridComponent } from './ociomadrid.component';

describe('OciomadridComponent', () => {
  let component: OciomadridComponent;
  let fixture: ComponentFixture<OciomadridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OciomadridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OciomadridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
