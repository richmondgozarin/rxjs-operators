import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSixDebounceTimeComponent } from './top-six-debounce-time.component';

describe('TopSixDebounceTimeComponent', () => {
  let component: TopSixDebounceTimeComponent;
  let fixture: ComponentFixture<TopSixDebounceTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopSixDebounceTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSixDebounceTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
