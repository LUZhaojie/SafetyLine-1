import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSupComponent } from './user-sup.component';

describe('UserSupComponent', () => {
  let component: UserSupComponent;
  let fixture: ComponentFixture<UserSupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
