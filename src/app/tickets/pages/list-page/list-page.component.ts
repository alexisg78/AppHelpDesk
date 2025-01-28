import { Component } from '@angular/core';

@Component({
  selector: 'list-page',
  templateUrl: './list-page.component.html',
  styles: ``,
  standalone: false
})
export class ListPageComponent {
  // ejemplo
  tickets=  [
    {
      "fecha": "2025-01-15",
      "titulo": "Problema de conexión a internet",
      "textoreclamo": "El servicio de internet ha estado interrumpido desde la mañana, afectando nuestra productividad.",
      "nombreoperador": "Juan Pérez",
      "codigoarea": 101,
      "nombre": "Pedro González",
      "fecharequerida": "2025-01-20",
      "estado": "En proceso",
      "color": 1,
      "codigoppal": 234,
      "codigoestado": 2
    },
    {
      "fecha": "2025-01-17",
      "titulo": "Falta de señal de TV",
      "textoreclamo": "La señal de televisión se ha cortado varias veces durante el día. Necesito que se solucione cuanto antes.",
      "nombreoperador": "María López",
      "codigoarea": 102,
      "nombre": "Carlos Ramírez",
      "fecharequerida": "2025-01-22",
      "estado": "Pendiente",
      "color": 0,
      "codigoppal": 101,
      "codigoestado": 1
    },
    {
      "fecha": "2025-01-18",
      "titulo": "Error en la facturación",
      "textoreclamo": "Se ha cobrado una cantidad incorrecta en la última factura. Necesito una revisión urgente.",
      "nombreoperador": "Luis Martínez",
      "codigoarea": 103,
      "nombre": "Sofia Torres",
      "fecharequerida": "2025-01-25",
      "estado": "Resuelto",
      "color": 2,
      "codigoppal": 110,
      "codigoestado": 3
    },
    {
      "fecha": "2025-01-20",
      "titulo": "Interrupción en el servicio de línea fija",
      "textoreclamo": "La línea telefónica no funciona desde ayer. Por favor, solucionar el problema lo antes posible.",
      "nombreoperador": "Ana Gómez",
      "codigoarea": 104,
      "nombre": "Ricardo Pérez",
      "fecharequerida": "2025-01-23",
      "estado": "En espera",
      "color": 1,
      "codigoppal": 180,
      "codigoestado": 4
    }
  ];

}
