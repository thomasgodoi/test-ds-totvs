import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SwitchComponent } from '../switch/switch.component';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  standalone: true,
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' | 'danger' = 'primary';
  @Input() disabled = false;
  @Output() onClick = new EventEmitter<void>();


  get btnClass() {
    return {
      'btn-primary': this.variant === 'primary',
      'btn-secondary': this.variant === 'secondary',
      'btn-danger': this.variant === 'danger',
      'btn-disabled': this.disabled,
    };
  }

  onClickEvent() {
    if(!this.disabled) {
      this.onClick.emit();
    }
  }

}
