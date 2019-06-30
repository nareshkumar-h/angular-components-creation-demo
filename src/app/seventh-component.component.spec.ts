import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeventhComponentComponent } from './seventh-component.component';

describe('SeventhComponentComponent', () => {
  let component: SeventhComponentComponent;
  let fixture: ComponentFixture<SeventhComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeventhComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeventhComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
