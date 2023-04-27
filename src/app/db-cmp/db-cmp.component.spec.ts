import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbCmpComponent } from './db-cmp.component';

describe('DbCmpComponent', () => {
  let component: DbCmpComponent;
  let fixture: ComponentFixture<DbCmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DbCmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DbCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
