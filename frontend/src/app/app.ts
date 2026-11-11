
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  activeModule = 'Dashboard';

  menuItems = [
    { name: 'Dashboard', icon: '▦' },
    { name: 'Países', icon: '🌎' },
    { name: 'Clientes', icon: '👥' },
    { name: 'Transportistas', icon: '🚚' },
    { name: 'Vehículos', icon: '🚛' },
    { name: 'Rutas', icon: '🛣️' },
    { name: 'Categorías de carga', icon: '📦' },
    { name: 'Envíos', icon: '🚢' },
    { name: 'Seguimiento', icon: '📍' }
  ];

  selectModule(module: string) {
    this.activeModule = module;
  }
}
