import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BlogNewsService } from "./blogNews.service";
import { BlogNewsControllerBase } from "./base/blogNews.controller.base";

@swagger.ApiTags("blogNews")
@common.Controller("blogNews")
export class BlogNewsController extends BlogNewsControllerBase {
  constructor(protected readonly service: BlogNewsService) {
    super(service);
  }
}
