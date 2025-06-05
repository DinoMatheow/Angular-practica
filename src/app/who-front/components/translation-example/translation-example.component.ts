import { Component, inject, signal } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-translation-example',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  template: `
    <div class="container">
      <h2>{{ 'COMMON.WELCOME' | translate }}</h2>

      <div class="language-selector">
        <select [(ngModel)]="currentLang" (change)="changeLanguage()">
          <option value="es">Español</option>
          <option value="en">English</option>
        </select>
      </div>

      <div class="buttons">
        <button>{{ 'BUTTONS.SAVE' | translate }}</button>
        <button>{{ 'BUTTONS.CANCEL' | translate }}</button>
        <button>{{ 'BUTTONS.EDIT' | translate }}</button>
        <button>{{ 'BUTTONS.DELETE' | translate }}</button>
        <button>{{ 'BUTTONS.SUBMIT' | translate }}</button>
      </div>

      <p>{{ 'COMMON.LOADING' | translate }}</p>
    </div>
  `,
  styles: [`
    .container {
      padding: 20px;
    }
    .language-selector {
      margin: 20px 0;
    }
    .buttons {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }
    button {
      padding: 8px 16px;
      border-radius: 4px;
      border: none;
      background-color: #007bff;
      color: white;
      cursor: pointer;
    }
    button:hover {
      background-color: #0056b3;
    }
  `]
})
export class TranslationExampleComponent {
  private translate = inject(TranslateService);
  currentLang = signal(this.translate.currentLang || 'es');

  constructor() {
    // Inicializar el idioma
    this.translate.setDefaultLang('es');
    this.translate.use(this.currentLang());
  }

  changeLanguage() {
    this.translate.use(this.currentLang());
  }
}
