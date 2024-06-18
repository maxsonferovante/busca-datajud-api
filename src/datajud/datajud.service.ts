import { Injectable } from '@nestjs/common';
import { FindProceduralClassAndJudgingBodyDto,
         FindProceduralClassAndJudgingBodyWithPagination,
         FindProcessDto,
         tribunais
          } from './dto/process.dto';
          
import BuscaProcesso from "busca-processos-judiciais";

@Injectable()
export class DatajudService {
    
    constructor(
    ) {}
    
    listCourt(): object {
        return tribunais;
    }
    async findProcess(processData: FindProcessDto): Promise<any> { 
        const { processNumber, court } = processData;     
        const buscaProcessos = new BuscaProcesso(
            court, 
            process.env.BUSCA_PROCESSOS_JUDICIAIS_API_KEY);

        try{
            const processResponse = await buscaProcessos.getFullObject(processNumber);
            return processResponse;
        }
        catch (error) {
            console.error(error);
            return error;
        }
   }

   async findProcessCleanResult(processData: FindProcessDto): Promise<any> {
        const { processNumber, court } = processData;
        const buscaProcessos = new BuscaProcesso(
            court,
            process.env.BUSCA_PROCESSOS_JUDICIAIS_API_KEY);

        try{
            const processResponse = await buscaProcessos.getCleanResult(processNumber);
            return processResponse;
        }
        catch (error) {
            console.error(error);
            return error;
        }
   }

   async getMovements(processData: FindProcessDto): Promise<any> {
        const { processNumber, court } = processData;
        const buscaProcessos = new BuscaProcesso(
            court,
            process.env.BUSCA_PROCESSOS_JUDICIAIS_API_KEY);
        try {
                const processResponse = await buscaProcessos.getMovimentos(processNumber);
                return processResponse;
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    
    async getProceduralClassAndJudgingBody(proceduralClassAndJudgingData: FindProceduralClassAndJudgingBodyDto): Promise<any> {
        const buscaProcessos = new BuscaProcesso(
            proceduralClassAndJudgingData.court,
            process.env.BUSCA_PROCESSOS_JUDICIAIS_API_KEY);
        try {
            const processResponse = await buscaProcessos
            .getProceduralClassAndJudgingBody(proceduralClassAndJudgingData.classCodigo, 
                                              proceduralClassAndJudgingData.orgaoJulgadorCodigo);
            return processResponse;
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    async getProceduralClassAndJudgingBodyWithPagination(proceduralClassAndJudgingData: FindProceduralClassAndJudgingBodyWithPagination): Promise<any> {
        const buscaProcessos = new BuscaProcesso(
            proceduralClassAndJudgingData.court,
            process.env.BUSCA_PROCESSOS_JUDICIAIS_API_KEY);
        try {
            const processResponse = await buscaProcessos
            .getProceduralClassAndJudgingBodyWithPagination(proceduralClassAndJudgingData.classCodigo, 
                                                            proceduralClassAndJudgingData.orgaoJulgadorCodigo, 
                                                            proceduralClassAndJudgingData.sizePagination);
            return processResponse;
        } catch (error) {
            console.error(error);
            return error;
        }
    }
}
