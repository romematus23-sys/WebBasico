import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Persform } from './persform';

describe('Persform', () => {
  let component: Persform;
  let fixture: ComponentFixture<Persform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Persform],
    }).compileComponents();

    fixture = TestBed.createComponent(Persform);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
