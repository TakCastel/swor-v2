
import { Component, ChangeDetectionStrategy, inject, signal, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { ForumDataService } from '../../services/forum-data.service';
import { Topic } from '../../models/forum.model';

@Component({
  selector: 'app-topic-view',
  templateUrl: './topic-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, RouterLink],
})
export class TopicViewComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private forumDataService = inject(ForumDataService);

  topic = signal<Topic | undefined>(undefined);

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        const topicId = Number(params.get('topicId'));
        return this.forumDataService.getTopicById(topicId);
      })
    ).subscribe(topicData => {
      this.topic.set(topicData);
    });
  }
}
