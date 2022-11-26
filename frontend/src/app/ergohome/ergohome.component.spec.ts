import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErgohomeComponent } from './ergohome.component';

describe('ErgohomeComponent', () => {
  let component: ErgohomeComponent;
  let fixture: ComponentFixture<ErgohomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErgohomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErgohomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
