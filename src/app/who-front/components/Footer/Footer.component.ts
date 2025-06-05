import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  selector: 'footer-front',
  imports: [],
  standalone: true,
  templateUrl: './Footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./Footer.component.css'],
})
export class FooterComponent { }
