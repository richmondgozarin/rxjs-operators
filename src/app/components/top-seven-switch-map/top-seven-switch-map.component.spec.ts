import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSevenSwitchMapComponent } from './top-seven-switch-map.component';

describe('TopSevenSwitchMapComponent', () => {
  let component: TopSevenSwitchMapComponent;
  let fixture: ComponentFixture<TopSevenSwitchMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopSevenSwitchMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSevenSwitchMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
