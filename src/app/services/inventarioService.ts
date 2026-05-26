import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inventario } from '../models/inventario';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {
  private apiUrl = 'http://localhost:8080/api/inventario';

  constructor(private http: HttpClient) { }

  // 1. Obtener todos los productos (GET)
  listarTodos(): Observable<Inventario[]> {
    return this.http.get<Inventario[]>(this.apiUrl);
  }

  // 2. Buscar un producto por ID (GET)
  buscarPorId(id: number): Observable<Inventario> {
    return this.http.get<Inventario>(`${this.apiUrl}/${id}`);
  }

  // 3. Crear un nuevo producto (POST)
  guardar(inventario: Inventario): Observable<Inventario> {
    return this.http.post<Inventario>(this.apiUrl, inventario);
  }

  // 4. Actualizar un producto existente (PUT)
  actualizar(id: number, inventario: Inventario): Observable<Inventario> {
    return this.http.put<Inventario>(`${`${this.apiUrl}/${id}`}`, inventario);
  }

  // 5. Eliminar un producto (DELETE)
  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}