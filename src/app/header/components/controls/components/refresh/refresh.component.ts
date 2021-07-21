import { ChangeDetectionStrategy, Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-refresh',
  templateUrl: './refresh.component.html',
  styleUrls: ['./refresh.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RefreshComponent {
  @Output() refresh = new EventEmitter<void>();

  public onClick(): void {
    this.refresh.emit();
  }
}
