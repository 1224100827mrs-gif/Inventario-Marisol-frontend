
import { Routes } from '@angular/router';
import { InventarioListaComponent } from './components/inventario-lista/inventario-lista.Components';
import { InventarioFormularioComponent } from './components/inventario-lista/inventario-formulario.Component';

export const routes: Routes = [
  { path: '', component: InventarioListaComponent },
  { path: 'nuevo', component: InventarioFormularioComponent },
  { path: 'editar/:id', component: InventarioFormularioComponent },
  { path: '**', redirectTo: '' }
];