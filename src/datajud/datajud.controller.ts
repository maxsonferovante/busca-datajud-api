import { Body, Controller, Post} from '@nestjs/common';
import { FindProcessDto,
    FindProceduralClassAndJudgingBodyDto,
    FindProceduralClassAndJudgingBodyWithPagination
 } from './dto/process.dto';
import { DatajudService } from './datajud.service';

@Controller('')
export class DatajudController {
    constructor(
        private readonly datajudService: DatajudService,
    ) {}

    @Post('listCourt')
    listCourt(){
        return  this.datajudService.listCourt();
    }
    @Post('process')
    async getProcess(
        @Body() data: FindProcessDto ): Promise<any> {   
        return await this.datajudService.findProcess(data);
    }

    @Post('processCleanResult')
    async getProcessCleanResult(
        @Body() data: FindProcessDto ): Promise<any> {   
        return await this.datajudService.findProcessCleanResult(data);
    }

    @Post('movements')
    async getMovements(
        @Body() data: FindProcessDto ): Promise<any> {
        return await this.datajudService.getMovements(data);
    }

    @Post('proceduralClassAndJudgingBody')
    async getProceduralClassAndJudgingBody(
        @Body() data: FindProceduralClassAndJudgingBodyDto ): Promise<any> {
        return await this.datajudService.getProceduralClassAndJudgingBody(data);
    }

    @Post('proceduralClassAndJudgingBodyWithPagination')
    async getProceduralClassAndJudgingBodyWithPagination(
        @Body() data: FindProceduralClassAndJudgingBodyWithPagination ): Promise<any> {
        return await this.datajudService.getProceduralClassAndJudgingBodyWithPagination(data);
    }
}
