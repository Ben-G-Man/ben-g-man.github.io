import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-drop-down-container',
  standalone: true,
  imports: [],
  templateUrl: './drop-down-container.component.html',
  styleUrl: './drop-down-container.component.scss'
})
export class DropDownContainerComponent {
    @Input()
    wide: boolean = false;
}
