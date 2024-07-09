import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BlogNewsServiceBase } from "./base/blogNews.service.base";

@Injectable()
export class BlogNewsService extends BlogNewsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
