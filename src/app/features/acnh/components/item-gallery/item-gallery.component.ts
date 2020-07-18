import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-gallery',
  templateUrl: './item-gallery.component.html',
  styleUrls: ['./item-gallery.component.scss'],
})
export class ItemGalleryComponent {
  @Input() items: any[];
  @Input() showImage: boolean;
}
