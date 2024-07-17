import { Component, inject, Inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PostsService } from '../../services/posts.service';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [ButtonModule, CommonModule, CardModule, ImageModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
  providers: [PostsService],
})
export class PostsComponent {
  readonly postService = inject(PostsService);

  posts$ = this.postService.getPosts();

  ngOnInit() {}
}
