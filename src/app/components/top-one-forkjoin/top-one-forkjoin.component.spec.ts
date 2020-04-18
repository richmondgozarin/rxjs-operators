import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopOneForkjoinComponent } from './top-one-forkjoin.component';

describe('TopOneForkjoinComponent', () => {
  let component: TopOneForkjoinComponent;
  let fixture: ComponentFixture<TopOneForkjoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopOneForkjoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopOneForkjoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
