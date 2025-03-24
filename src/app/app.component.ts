import { Component } from '@angular/core';
import { SwitchComponent } from './components/switch/switch.component';
import { ButtonComponent } from './components/button/button.component';
import { SelectComponent } from './components/select/select.component';

@Component({
  imports: [SwitchComponent, 
    ButtonComponent, 
    SelectComponent
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
})
export class AppComponent {
  title = 'TOTVS';

  isSwitchActive: boolean = false;
  isSwitchDisabled: boolean = false;
  hasError: boolean = false;
  isSelectDisabled: boolean = false;
  

  handleDisableSwitchToggle(value: boolean) {
    this.isSwitchActive = value;
  }

  toggleSwitchDisable() {
    this.isSwitchDisabled = !this.isSwitchDisabled;
  }

  toggleError() {
    this.hasError = !this.hasError;
  }

  handleDisableSelectToggle(value: boolean) {
    this.isSelectDisabled = value;
  }

  toggleSelectDisable() {
    this.isSelectDisabled = !this.isSelectDisabled;
  }
}
