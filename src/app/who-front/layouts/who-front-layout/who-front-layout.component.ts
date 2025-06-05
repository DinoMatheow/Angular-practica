import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../components/Footer/Footer.component';
import { ToolbarComponent } from '../../components/Toolbar/Toolbar.component';

@Component({
  selector: 'app-who-front-layout',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, ToolbarComponent],
  templateUrl: './who-front-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhoFrontLayoutComponent { }
