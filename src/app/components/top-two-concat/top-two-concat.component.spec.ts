import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTwoConcatComponent } from './top-two-concat.component';

describe('TopTwoConcatComponent', () => {
  let component: TopTwoConcatComponent;
  let fixture: ComponentFixture<TopTwoConcatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopTwoConcatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTwoConcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
