import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Milform } from './milform';

describe('Milform', () => {
  let component: Milform;
  let fixture: ComponentFixture<Milform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Milform],
    }).compileComponents();

    fixture = TestBed.createComponent(Milform);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
