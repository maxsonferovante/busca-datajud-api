import { IsString, IsNotEmpty, IsEnum, IsNumber} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export enum siglasTribunais {
    TST= "TST",
    TSE= "TSE",
    STJ= "STJ",
    STM= "STM",
    TRF1= "TRF1",
    TRF2= "TRF2",
    TRF3= "TRF3",
    TRF4= "TRF4",
    TRF5= "TRF5",
    TRF6= "TRF6",
    TRT1= "TRT1",
    TRT2= "TRT2",
    TRT3= "TRT3",
    TRT4= "TRT4",
    TRT5= "TRT5",
    TRT6= "TRT6",
    TRT7= "TRT7",
    TRT8= "TRT8",
    TRT9= "TRT9",
    TRT10= "TRT10",
    TRT11= "TRT11",
    TRT12= "TRT12",
    TRT13= "TRT13",
    TRT14= "TRT14",
    TRT15= "TRT15",
    TRT16= "TRT16",
    TRT17= "TRT17",
    TRT18= "TRT18",
    TRT19= "TRT19",
    TRT20= "TRT20",
    TRT21= "TRT21",
    TRT22= "TRT22",
    TRT23= "TRT23",
    TRT24= "TRT24",
    TREAC= "TREAC",
    TREAL= "TREAL",
    TREAM= "TREAM",
    TREAP= "TREAP",
    TREBA= "TREBA",
    TRECE= "TRECE",
    TREDFT= "TREDFT",
    TREES= "TREES",
    TREMA= "TREMA",
    TREMG= "TREMG",
    TREMT= "TREMT",
    TREMS= "TREMS",
    TREPA= "TREPA",
    TREPB= "TREPB",
    TREPE= "TREPE",
    TREPI= "TREPI",
    TREPR= "TREPR",
    TRERJ= "TRERJ",
    TRERN= "TRERN",
    TRERO= "TRERO",
    TRERR= "TRERR",
    TRERS= "TRERS",
    TRESC= "TRESC",
    TRESP= "TRESP",
    TRESE= "TRESE",
    TRETO= "TRETO",
    TJAC= "TJAC",
    TJAL= "TJAL",
    TJAM= "TJAM",
    TJAP= "TJAP",
    TJBA= "TJBA",
    TJCE= "TJCE",
    TJDFT= "TJDFT",
    TJES= "TJES",
    TJGO= "TJGO",
    TJMA= "TJMA",
    TJMG= "TJMG",
    TJMS= "TJMS",
    TJMT= "TJMT",
    TJPA= "TJPA",
    TJPB= "TJPB",
    TJPE= "TJPE",
    TJPI= "TJPI",
    TJPR= "TJPR",
    TJRJ= "TJRJ",
    TJRN= "TJRN",
    TJRO= "TJRO",
    TJRR= "TJRR",
    TJRS= "TJRS",
    TJSC= "TJSC",
    TJSE= "TJSE",
    TJSP= "TJSP",
    TJTO= "TJTO",
    TJMRS= "TJMRS",
    TJMSP= "TJMSP",
    TJMMG= "TJMMG",
  };
  
export class FindProcessDto {

    @ApiProperty({ enum: siglasTribunais, example: siglasTribunais.TST })
    @IsNotEmpty()
    @IsEnum(siglasTribunais)
    court: siglasTribunais;

    @ApiProperty({ example: "0000000-00.0000.0.00.0000" })
    @IsNotEmpty()
    @IsString()
    processNumber: string;
}

export class FindProceduralClassAndJudgingBodyDto {

    @ApiProperty({ enum: siglasTribunais, example: siglasTribunais.TST })
    @IsNotEmpty()
    @IsEnum(siglasTribunais)
    court: siglasTribunais;

    @ApiProperty({ example: 1 })
    @IsNotEmpty()
    @IsNumber()
    classCodigo: number;

    @ApiProperty({ example: 1 })
    @IsNotEmpty()
    @IsNumber()
    orgaoJulgadorCodigo: number;
}

export class FindProceduralClassAndJudgingBodyWithPagination {
  
  @ApiProperty({ enum: siglasTribunais, example: siglasTribunais.TST })
  @IsNotEmpty()
  @IsEnum(siglasTribunais)
  court: siglasTribunais;

  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  @IsNumber()
  classCodigo: number;

  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  @IsNumber()
  orgaoJulgadorCodigo: number;

  @IsNotEmpty()
  @IsNumber()
  sizePagination: number;
}

export interface ResponseProcessDto {}

export const tribunais = {
  TST: "Tribunal Superior de Trabalho",
  TSE: "Tribunal Superior Eleitoral",
  STJ: "Superior Tribunal de Justiça",
  STM: "Superior Tribunal Militar",
  TRF1: "Tribunal Regional Federal da 1ª Região",
  TRF2: "Tribunal Regional Federal da 2ª Região",
  TRF3: "Tribunal Regional Federal da 3ª Região",
  TRF4: "Tribunal Regional Federal da 4ª Região",
  TRF5: "Tribunal Regional Federal da 5ª Região",
  TRF6: "Tribunal Regional Federal da 6ª Região",
  TRT1: "Tribunal Regional do Trabalho da 1ª Região",
  TRT2: "Tribunal Regional do Trabalho da 2ª Região",
  TRT3: "Tribunal Regional do Trabalho da 3ª Região",
  TRT4: "Tribunal Regional do Trabalho da 4ª Região",
  TRT5: "Tribunal Regional do Trabalho da 5ª Região",
  TRT6: "Tribunal Regional do Trabalho da 6ª Região",
  TRT7: "Tribunal Regional do Trabalho da 7ª Região",
  TRT8: "Tribunal Regional do Trabalho da 8ª Região",
  TRT9: "Tribunal Regional do Trabalho da 9ª Região",
  TRT10: "Tribunal Regional do Trabalho da 10ª Região",
  TRT11: "Tribunal Regional do Trabalho da 11ª Região",
  TRT12: "Tribunal Regional do Trabalho da 12ª Região",
  TRT13: "Tribunal Regional do Trabalho da 13ª Região",
  TRT14: "Tribunal Regional do Trabalho da 14ª Região",
  TRT15: "Tribunal Regional do Trabalho da 15ª Região",
  TRT16: "Tribunal Regional do Trabalho da 16ª Região",
  TRT17: "Tribunal Regional do Trabalho da 17ª Região",
  TRT18: "Tribunal Regional do Trabalho da 18ª Região",
  TRT19: "Tribunal Regional do Trabalho da 19ª Região",
  TRT20: "Tribunal Regional do Trabalho da 20ª Região",
  TRT21: "Tribunal Regional do Trabalho da 21ª Região",
  TRT22: "Tribunal Regional do Trabalho da 22ª Região",
  TRT23: "Tribunal Regional do Trabalho da 23ª Região",
  TRT24: "Tribunal Regional do Trabalho da 24ª Região",
  TREAC: "Tribunal Regional Eleitoral do Acre",
  TREAL: "Tribunal Regional Eleitoral de Alagoas",
  TREAM: "Tribunal Regional Eleitoral do Amazonas",
  TREAP: "Tribunal Regional Eleitoral do Amapá",
  TREBA: "Tribunal Regional Eleitoral da Bahia",
  TRECE: "Tribunal Regional Eleitoral do Ceará",
  TREDFT: "Tribunal Regional Eleitoral do Distrito Federal e Territórios",
  TREES: "Tribunal Regional Eleitoral do Espírito Santo",
  TREMA: "Tribunal Regional Eleitoral do Maranhão",
  TREMG: "Tribunal Regional Eleitoral de Minas Gerais",
  TREMT: "Tribunal Regional Eleitoral do Mato Grosso",
  TREMS: "Tribunal Regional Eleitoral do Mato Grosso do Sul",
  TREPA: "Tribunal Regional Eleitoral do Pará",
  TREPB: "Tribunal Regional Eleitoral da Paraíba",
  TREPE: "Tribunal Regional Eleitoral de Pernambuco",
  TREPI: "Tribunal Regional Eleitoral do Piauí",
  TREPR: "Tribunal Regional Eleitoral de Paraná",
  TRERJ: "Tribunal Regional Eleitoral do Rio de Janeiro",
  TRERN: "Tribunal Regional Eleitoral do Rio Grande do Norte",
  TRERO: "Tribunal Regional Eleitoral de Rondônia",
  TRERR: "Tribunal Regional Eleitoral de Roraima",
  TRERS: "Tribunal Regional Eleitoral do Rio Grande do Sul",
  TRESC: "Tribunal Regional Eleitoral de Santa Catarina",
  TRESP: "Tribunal Regional Eleitoral de São Paulo",
  TRESE: "Tribunal Regional Eleitoral do Sergipe",
  TRETO: "Tribunal Regional Eleitoral do Tocantins",
  TJAC: "Tribunal de Justiça do Acre",
  TJAL: "Tribunal de Justiça de Alagoas",
  TJAM: "Tribunal de Justiça do Amazonas",
  TJAP: "Tribunal de Justiça do Amapá",
  TJBA: "Tribunal de Justiça da Bahia",
  TJCE: "Tribunal de Justiça do Ceará",
  TJDFT: "Tribunal de Justiça do Distrito Federal e Territórios",
  TJES: "Tribunal de Justiça do Espírito Santo",
  TJGO: "Tribunal de Justiça de Goiás",
  TJMA: "Tribunal de Justiça do Maranhão",
  TJMG: "Tribunal de Justiça de Minas Gerais",
  TJMS: "Tribunal de Justiça do Mato Grosso do Sul",
  TJMT: "Tribunal de Justiça do Mato Grosso",
  TJPA: "Tribunal de Justiça do Pará",
  TJPB: "Tribunal de Justiça da Paraíba",
  TJPE: "Tribunal de Justiça de Pernambuco",
  TJPI: "Tribunal de Justiça do Piauí",
  TJPR: "Tribunal de Justiça do Paraná",
  TJRJ: "Tribunal de Justiça do Rio de Janeiro",
  TJRN: "Tribunal de Justiça do Rio Grande do Norte",
  TJRO: "Tribunal de Justiça de Rondônia",
  TJRR: "Tribunal de Justiça de Roraima",
  TJRS: "Tribunal de Justiça do Rio Grande do Sul",
  TJSC: "Tribunal de Justiça de Santa Catarina",
  TJSE: "Tribunal de Justiça de Sergipe",
  TJSP: "Tribunal de Justiça de São Paulo",
  TJTO: "Tribunal de Justiça do Tocantins",
  TJMRS: "Tribunal de Justiça Militar do Rio Grande do Sul",
  TJMSP: "Tribunal de Justiça Militar de São Paulo",
  TJMMG: "Tribunal de Justiça Militar de Minas Gerais",
};