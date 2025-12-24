
import { Component, ChangeDetectionStrategy, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ForumDataService } from '../../services/forum-data.service';
import { Category } from '../../models/forum.model';

@Component({
  selector: 'app-forum-index',
  templateUrl: './forum-index.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, RouterLink],
})
export class ForumIndexComponent implements OnInit {
  private forumDataService = inject(ForumDataService);
  categories = signal<Category[]>([]);

  ngOnInit(): void {
    this.forumDataService.getCategories().subscribe(data => {
      this.categories.set(data);
    });
  }
}
