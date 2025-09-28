import { Component } from '@angular/core';
import { UiService } from '../../ui.service';

@Component({
  selector: 'app-greetings-box',
  standalone: true,
  imports: [],
  templateUrl: './greetings-box.component.html',
  styleUrl: './greetings-box.component.scss'
})
export class GreetingsBoxComponent {
    constructor(public uiService: UiService) {}
}
