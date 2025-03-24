import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  imports: [CommonModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css',
})
export class SelectComponent {
  @Input() hasError: boolean = false;
  @Output() toggled = new EventEmitter<boolean>();
  @Input() disabled: boolean = false;

}
