export interface Inventario {
  id?: number;
  nombreProducto: string;
  descripcion: string;
  categoria: string;
  precio: number;
  stock: number;
  fechaRegistro?: string;
  activo: boolean;
}

