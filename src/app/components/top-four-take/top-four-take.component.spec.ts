import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFourTakeComponent } from './top-four-take.component';

describe('TopFourTakeComponent', () => {
  let component: TopFourTakeComponent;
  let fixture: ComponentFixture<TopFourTakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopFourTakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopFourTakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
