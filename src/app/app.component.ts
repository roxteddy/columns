import { Component, signal, WritableSignal } from '@angular/core';

export interface Cell {
  value: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  columns : WritableSignal<Cell[]>[] = [
    signal([]),
    signal([]),
    signal([])
  ];

  addCell(value: number, columnIndex: number) {
    this.columns[columnIndex].mutate(cells => cells.push({ value }));
  }

  removeCell(cell: Cell, columnIndex: number) {
    this.columns[columnIndex].mutate(cells => cells.shift());
  }
}
