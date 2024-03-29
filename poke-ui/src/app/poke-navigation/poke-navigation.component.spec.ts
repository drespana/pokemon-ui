import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeNavigationComponent } from './poke-navigation.component';

describe('PokeNavigationComponent', () => {
  let component: PokeNavigationComponent;
  let fixture: ComponentFixture<PokeNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokeNavigationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokeNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
