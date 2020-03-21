import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedialogComponent } from './medialog.component';

describe('MedialogComponent', () => {
  let component: MedialogComponent;
  let fixture: ComponentFixture<MedialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
