import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Inventario } from '../../models/inventario';
import { InventarioService } from '../../services/inventarioService';

@Component({
  selector: 'app-inventario-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: '././inventario-formulario.Component.html'
})
export class InventarioFormularioComponent implements OnInit {
  producto: Inventario = {
    nombreProducto: '',
    descripcion: '',
    categoria: '',
    precio: 0,
    stock: 0,
    activo: true
  };
  esEditar: boolean = false;

  constructor(
    private inventarioService: InventarioService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.esEditar = true;
      this.inventarioService.buscarPorId(Number(id)).subscribe(data => {
        this.producto = data;
      });
    }
  }

  guardar(): void {
    if (this.esEditar && this.producto.id) {
      this.inventarioService.actualizar(this.producto.id, this.producto).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      this.inventarioService.guardar(this.producto).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}