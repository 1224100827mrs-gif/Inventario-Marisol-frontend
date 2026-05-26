import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioListaComponent } from './inventario-lista.Components';

describe('InventarioLista', () => {
  let component: InventarioListaComponent;
  let fixture: ComponentFixture<InventarioListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventarioListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventarioListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
