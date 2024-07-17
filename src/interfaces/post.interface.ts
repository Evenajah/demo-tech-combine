import { Author } from './author.interface';

export interface Post {
  id: number;
  author_id: number;
  title: string;
  body: string;
  image_url: string;
  created_at: string;
}

export interface PostData {
  post: Post;
  author: Author;
}
