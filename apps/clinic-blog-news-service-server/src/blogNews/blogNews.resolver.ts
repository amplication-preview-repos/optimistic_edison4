import * as graphql from "@nestjs/graphql";
import { BlogNewsResolverBase } from "./base/blogNews.resolver.base";
import { BlogNews } from "./base/BlogNews";
import { BlogNewsService } from "./blogNews.service";

@graphql.Resolver(() => BlogNews)
export class BlogNewsResolver extends BlogNewsResolverBase {
  constructor(protected readonly service: BlogNewsService) {
    super(service);
  }
}
