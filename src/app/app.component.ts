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

  onAddCell(value: number, columnIndex: number) {
    this.columns[columnIndex].mutate(cells => cells.push({ value }));
  }

  onRemoveCell(cell: Cell, columnIndex: number) {
    this.columns[columnIndex].mutate(cells => cells.splice(cells.indexOf(cell), 1));
  }
}
