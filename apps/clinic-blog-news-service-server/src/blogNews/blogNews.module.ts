import { Module } from "@nestjs/common";
import { BlogNewsModuleBase } from "./base/blogNews.module.base";
import { BlogNewsService } from "./blogNews.service";
import { BlogNewsController } from "./blogNews.controller";
import { BlogNewsResolver } from "./blogNews.resolver";

@Module({
  imports: [BlogNewsModuleBase],
  controllers: [BlogNewsController],
  providers: [BlogNewsService, BlogNewsResolver],
  exports: [BlogNewsService],
})
export class BlogNewsModule {}
