import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css'],
  standalone: true
})
export class SwitchComponent {
  @Input() checked: boolean = false;
  @Output() toggled = new EventEmitter<boolean>();
  @Input() disabled: boolean = false;

  toggleSwitch() {
    this.checked = !this.checked;
    this.toggled.emit(this.checked);
  }
}
