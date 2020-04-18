import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNineMapTapComponent } from './top-nine-map-tap.component';

describe('TopNineMapTapComponent', () => {
  let component: TopNineMapTapComponent;
  let fixture: ComponentFixture<TopNineMapTapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopNineMapTapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNineMapTapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
