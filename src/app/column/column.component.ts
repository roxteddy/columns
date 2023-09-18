import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Cell } from '../app.component';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColumnComponent {
  @Input() title = 'no_name';
  @Input() cells?: Cell[];

  @Output() addNumber = new EventEmitter<number>();
  @Output() removeCell = new EventEmitter<Cell>();

  numberControl: FormControl<number | null> = new FormControl(null, [
    Validators.required
  ]);

  onAddNumber() {
    if (typeof this.numberControl.value === 'number') {
      this.addNumber.emit(this.numberControl.value);
      this.numberControl.reset();
    }
  }

  onEditCell(value: number, cell: Cell) {

  }

  onRemoveCell(cell: Cell) {
    this.removeCell.emit(cell);
  }
}
