import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialModule } from '../material/material.module';
import { PokeHomeComponent } from './poke-home.component';

describe('PokeHomeComponent', () => {
  let component: PokeHomeComponent;
  let fixture: ComponentFixture<PokeHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[MaterialModule],
      declarations: [PokeHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
