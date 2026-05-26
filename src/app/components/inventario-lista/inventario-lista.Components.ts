import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Inventario } from '../../models/inventario';
import { InventarioService } from '../../services/inventarioService';

@Component({
  selector: 'app-inventario-lista',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './inventario-lista.html'
})
export class InventarioListaComponent implements OnInit {
  productos: Inventario[] = [];

  constructor(private inventarioService: InventarioService) {}

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(): void {
    this.inventarioService.listarTodos().subscribe(data => {
      this.productos = data;
    });
  }

  eliminarProducto(id?: number): void {
    if (id && confirm('¿Estás seguro de que deseas eliminar este producto del inventario?')) {
      this.inventarioService.eliminar(id).subscribe(() => {
        this.obtenerProductos(); // Recarga la lista tras eliminar
      });
    }
  }
}