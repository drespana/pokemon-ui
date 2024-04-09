import { ComponentFixture, TestBed } from '@angular/core/testing';

import {MaterialModule} from '../material/material.module';
import { PokeBuildComponent } from './poke-build.component';
import { PokeCardComponent } from '../poke-card/poke-card.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';

describe('PokeBuildComponent', () => {
  let component: PokeBuildComponent;
  let fixture: ComponentFixture<PokeBuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        MaterialModule,
      ],
      declarations: [
        PokeBuildComponent, 
        PokeCardComponent
      ]
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
