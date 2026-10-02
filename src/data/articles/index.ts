import { articles1to5, type BlogArticle, type ArticleFAQ, type ArticleSection } from './topics-1-5';
import { articles6to10 } from './topics-6-10';
import { articles11to15 } from './topics-11-15';
import { articles16to20 } from './topics-16-20';

export type { BlogArticle, ArticleFAQ, ArticleSection };

export const allBlogArticles: BlogArticle[] = [
  ...articles1to5,
  ...articles6to10,
  ...articles11to15,
  ...articles16to20
];

export function getAllArticles(): BlogArticle[] {
  return allBlogArticles;
}

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return allBlogArticles.find(article => article.slug === slug);
}

export function getArticleById(id: number): BlogArticle | undefined {
  return allBlogArticles.find(article => article.id === id);
}
