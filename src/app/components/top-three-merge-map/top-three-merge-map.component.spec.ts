import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopThreeMergeMapComponent } from './top-three-merge-map.component';

describe('TopThreeMergeMapComponent', () => {
  let component: TopThreeMergeMapComponent;
  let fixture: ComponentFixture<TopThreeMergeMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopThreeMergeMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopThreeMergeMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
