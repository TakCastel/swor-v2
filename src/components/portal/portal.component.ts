
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterLink],
})
export class PortalComponent {
  newsItems = [
    { title: 'New Era Begins!', content: 'The post-Empire roleplay section is now open. Create your characters and forge a new destiny in a galaxy free from Palpatine\'s rule!', date: '07.22.2024' },
    { title: 'Forum Rules Updated', content: 'Please review the updated rules regarding character creation and post length. Your cooperation is appreciated.', date: '07.20.2024' },
    { title: 'Welcome to SWOR.FR!', content: 'A long time ago, in a galaxy far, far away... a new community is born. Welcome to all new members!', date: '07.15.2024' },
  ];
}
