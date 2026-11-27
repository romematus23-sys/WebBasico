import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Milcard } from './milcard';

describe('Milcard', () => {
  let component: Milcard;
  let fixture: ComponentFixture<Milcard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Milcard],
    }).compileComponents();

    fixture = TestBed.createComponent(Milcard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
