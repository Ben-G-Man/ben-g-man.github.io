import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-forced-size-image',
  standalone: true,
  imports: [],
  templateUrl: './forced-size-image.component.html',
  styleUrl: './forced-size-image.component.scss'
})
export class ForcedSizeImageComponent {
    @Input() src!: string;
    @Input() alt!: string;
}
