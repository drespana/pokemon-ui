import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialModule } from '../material/material.module';
import { PokeNavigationComponent } from './poke-navigation.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';

describe('PokeNavigationComponent', () => {
  let component: PokeNavigationComponent;
  let fixture: ComponentFixture<PokeNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        MaterialModule,
      ],
      declarations: [PokeNavigationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PokeNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
