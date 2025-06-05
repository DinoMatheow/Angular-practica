import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Value } from '../../interfaces/bio.interface';
import { MatDividerModule } from '@angular/material/divider';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-bio-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatDividerModule, TranslateModule],
  templateUrl: './bio-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./bio-card.component.css'],
})
export class BioCardComponent {
  bio = input.required<Value>();


  translate = inject(TranslateService);

  constructor() {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  changeLang(lang: string) {
    this.translate.use(lang);
  }
}
