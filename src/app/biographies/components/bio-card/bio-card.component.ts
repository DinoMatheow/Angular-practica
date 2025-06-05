import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Value } from '../../interfaces/bio.interface';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bio-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatDividerModule, CommonModule],
  templateUrl: './bio-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./bio-card.component.css'],
})
export class BioCardComponent {
  bio = input.required<Value>();
}
