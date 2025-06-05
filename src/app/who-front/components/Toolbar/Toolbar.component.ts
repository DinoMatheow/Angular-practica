import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'toolbar-front',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatButtonToggleModule, TranslateModule],
  templateUrl: './Toolbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./Toolbar.component.css'],
})
export class ToolbarComponent {
  translate = inject(TranslateService);

  constructor() {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  changeLang(lang: string) {
    this.translate.use(lang);
  }
}
