import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutAnnonceComponent } from './ajout-annonce.component';

describe('AjoutAnnonceComponent', () => {
  let component: AjoutAnnonceComponent;
  let fixture: ComponentFixture<AjoutAnnonceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutAnnonceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
