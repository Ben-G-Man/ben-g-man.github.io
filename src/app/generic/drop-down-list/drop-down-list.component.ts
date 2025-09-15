import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-drop-down-list',
    standalone: true,
    imports: [],
    templateUrl: './drop-down-list.component.html',
    styleUrl: './drop-down-list.component.scss'
})
export class DropDownListComponent {
    @Input() selections!: string[];
    @Output() onSelection = new EventEmitter<string>();

    onClick(selection: string) {
        this.onSelection.emit(selection);
    }
}
