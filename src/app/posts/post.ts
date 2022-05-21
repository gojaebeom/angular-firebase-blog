export class Post {
  slug: string;
  thumbnailURL: string;
  title: string;
  excerpt: string;
  content: string;
  createdAt: string;
  tags: string[];

  constructor(
    slug: string,
    thumbnailURL: string,
    title: string,
    excerpt: string,
    content: string,
    createdAt: string,
    tags: string[]
  ) {
    this.slug = slug;
    this.thumbnailURL = thumbnailURL;
    this.title = title;
    this.excerpt = excerpt;
    this.content = content;
    this.createdAt = createdAt;
    this.tags = tags;
  }
}
