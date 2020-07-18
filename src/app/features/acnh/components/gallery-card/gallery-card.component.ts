import { Component, Input } from '@angular/core';

import { IBaseItem } from '../../models/base-item';

@Component({
  selector: 'app-gallery-card',
  templateUrl: './gallery-card.component.html',
  styleUrls: ['./gallery-card.component.scss'],
})
export class GalleryCardComponent {
  @Input() item: IBaseItem;
  @Input() showImage: boolean;
}
