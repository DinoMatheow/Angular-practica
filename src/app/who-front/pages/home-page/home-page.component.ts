import { Component, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { BiographieService } from '../../../biographies/services/bio.service';
import { BioCardComponent } from '../../../biographies/components/bio-card/bio-card.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [BioCardComponent, TranslateModule],
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
}
