import { ComponentFixture, TestBed } from '@angular/core/testing';
import {MaterialModule} from '../material/material.module'
import { PokeBuildComponent } from './poke-build.component';

describe('PokeBuildComponent', () => {
  let component: PokeBuildComponent;
  let fixture: ComponentFixture<PokeBuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[MaterialModule],
      declarations: [PokeBuildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokeBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
