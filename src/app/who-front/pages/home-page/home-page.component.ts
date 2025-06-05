import { Component, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { BiographieService } from '../../../biographies/services/bio.service';
import { BioCardComponent } from '../../../biographies/components/bio-card/bio-card.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [BioCardComponent,  TranslateModule],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.components.css'],
})
export class HomePageComponent {
  limit = signal(10);
  bioService = inject(BiographieService);


  biographiesResource = rxResource({
    request: () => ({ top: this.limit() }),
    loader: ({ request }) => {
      return this.bioService.getBiographies({ $top: request.top });
    }
  });

  translate = inject(TranslateService);

  constructor() {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  changeLang(lang: string) {
    this.translate.use(lang);
  }
}
