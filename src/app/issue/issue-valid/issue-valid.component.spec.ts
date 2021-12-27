import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueValidComponent } from './issue-valid.component';

describe('IssueValidComponent', () => {
  let component: IssueValidComponent;
  let fixture: ComponentFixture<IssueValidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueValidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueValidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
