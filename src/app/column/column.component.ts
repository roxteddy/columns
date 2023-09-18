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

  numberControl = new FormControl(undefined, [
    Validators.required
  ]);

  onAddNumber() {
    if (typeof this.numberControl.value === 'number') {
      this.addNumber.emit(this.numberControl.value);
      this.numberControl.reset();
    }
  }
}
