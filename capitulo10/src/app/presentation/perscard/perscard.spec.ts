import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Perscard } from './perscard';

describe('Perscard', () => {
  let component: Perscard;
  let fixture: ComponentFixture<Perscard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Perscard],
    }).compileComponents();

    fixture = TestBed.createComponent(Perscard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
