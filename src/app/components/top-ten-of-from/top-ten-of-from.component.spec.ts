import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTenOfFromComponent } from './top-ten-of-from.component';

describe('TopTenOfFromComponent', () => {
  let component: TopTenOfFromComponent;
  let fixture: ComponentFixture<TopTenOfFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopTenOfFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTenOfFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
