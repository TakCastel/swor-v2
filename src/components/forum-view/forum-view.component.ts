
import { Component, ChangeDetectionStrategy, inject, signal, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { ForumDataService } from '../../services/forum-data.service';
import { Forum } from '../../models/forum.model';

@Component({
  selector: 'app-forum-view',
  templateUrl: './forum-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, RouterLink],
})
export class ForumViewComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private forumDataService = inject(ForumDataService);
  
  forum = signal<Forum | undefined>(undefined);

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        const forumId = Number(params.get('forumId'));
        return this.forumDataService.getForumById(forumId);
      })
    ).subscribe(forumData => {
      this.forum.set(forumData);
    });
  }
}
