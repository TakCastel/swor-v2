
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
})
export class HeaderComponent {
  navLinks = [
    { path: '/', label: 'Portal' },
    { path: '/forum', label: 'Forum' },
    { path: '/rules', label: 'Règlement' },
    { path: '/universe', label: 'Univers' },
  ];
}
