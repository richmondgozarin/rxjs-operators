import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopEightShareComponent } from './top-eight-share.component';

describe('TopEightShareComponent', () => {
  let component: TopEightShareComponent;
  let fixture: ComponentFixture<TopEightShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopEightShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopEightShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
