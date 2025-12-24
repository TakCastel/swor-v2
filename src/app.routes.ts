
import { Routes } from '@angular/router';
import { PortalComponent } from './components/portal/portal.component';
import { ForumIndexComponent } from './components/forum-index/forum-index.component';
import { ForumViewComponent } from './components/forum-view/forum-view.component';
import { TopicViewComponent } from './components/topic-view/topic-view.component';
import { RulesComponent } from './components/rules/rules.component';
import { UniverseComponent } from './components/universe/universe.component';
import { ProfileComponent } from './components/profile/profile.component';

export const APP_ROUTES: Routes = [
  { path: '', component: PortalComponent, title: 'Portal | SWOR.FR' },
  { path: 'forum', component: ForumIndexComponent, title: 'Forum | SWOR.FR' },
  { path: 'forum/:forumId', component: ForumViewComponent, title: 'View Forum | SWOR.FR' },
  { path: 'topic/:topicId', component: TopicViewComponent, title: 'View Topic | SWOR.FR' },
  { path: 'rules', component: RulesComponent, title: 'Rules | SWOR.FR' },
  { path: 'universe', component: UniverseComponent, title: 'Universe | SWOR.FR' },
  { path: 'profile', component: ProfileComponent, title: 'Profile | SWOR.FR' },
  { path: '**', redirectTo: '' }
];
