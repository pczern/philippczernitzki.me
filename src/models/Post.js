export default class Post {
  constructor(title, isPublished, date, slug, excerpt) {
    this.title = title
    this.isPublished = isPublished
    this.date = date
    this.slug = slug
    this.excerpt = excerpt
  }
}
