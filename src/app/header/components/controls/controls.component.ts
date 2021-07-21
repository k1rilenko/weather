import { ChangeDetectionStrategy, Component } from '@angular/core';

import { BackgroundImageService } from './../../../services/background-image/background-image.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlsComponent {
  constructor(private imageService: BackgroundImageService) {}

  public onRefresh(): void {
    this.imageService.loadBackground();
  }
}
