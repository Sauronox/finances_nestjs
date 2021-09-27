import { Controller, Get } from '@nestjs/common';
import { FetchApiService } from './fetch-api.service';

@Controller('fetch-api')
export class FetchApiController {
  constructor(private readonly fetchApiService: FetchApiService) {}

  @Get('/fetch')
  findAll() {
      try {
        return this.httpService.get('/').pipe(
            map((result) => {
              this.logger.debug(result.data);
              return result.data;
            }),
        );
      } catch (error) {
        this.logger.debug(error);
        return new BadRequestException(error);
      }
    }
  }
  }
}
