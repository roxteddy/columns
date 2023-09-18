import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColumnComponent {
  @Input() title = 'no_name';
  @Input() numbers: number[] = [];
}
