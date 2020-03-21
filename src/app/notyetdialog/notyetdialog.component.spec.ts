import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotyetdialogComponent } from './notyetdialog.component';

describe('NotyetdialogComponent', () => {
  let component: NotyetdialogComponent;
  let fixture: ComponentFixture<NotyetdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotyetdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotyetdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
