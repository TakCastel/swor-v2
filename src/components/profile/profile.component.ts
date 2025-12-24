
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ProfileComponent {
  user = {
    name: 'JediMasterValorum',
    avatar: 'https://picsum.photos/seed/jedivalorum/128/128',
    title: 'Jedi Master',
    joined: 'July 18, 2024',
    posts: 142,
    faction: 'Galactic Republic',
    signature: '<i>"In the Force, we find our strength. In unity, our victory."</i>'
  };

  characters = [
    { name: 'Kaelen Vorr', class: 'Jedi Knight', era: 'The Clone Wars' },
    { name: 'Zae Riker', class: 'Rebel Pilot', era: 'Galactic Civil War' },
  ];
}
