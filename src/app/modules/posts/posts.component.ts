import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  displayedColumns =
  ['sup',
	'vend',
	'codTime',
	'ordem',
	'dia',
	'semana',
	'contrato',
	'nasPalheiro',
	'camelRyo',
	'kitEstrategico',
	'rebaixa',
	'kitFocoCamel',
	'baseRyoOcb',
	'pesquisa',
	'hierarquia',
	'nomeCliente',
	'endereco',
	'mediaTriUlt3Meses',
	'vendaMaio',
	'objetivoTtMaio',
	'lacunaMes',
	'jTi',
	'isqueiro',
	'cb',
	'cbSoft',
	'cy',
	'cySoft',
	'cdp',
	'cdg',
	'cdr',
	'cryo',
	'ck',
	'wb',
	'wbSoft',
	'wcSoft',
	'ws',
	'wr',
	'wbs',
	'we',
	'wp',
	'wbld',
	'djbm',
	'djb',
	'lam',
	'nas',
	'nasp',
	'pueb',
	'inadim',
	'cidade']
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
    console.log('')
  }

}

export interface BatalhaNaval {
	sup: string;
	vend: string;
	codTime: string;
	ordem: number;
	dia: string;
	semana: string;
	contrato: string;
	nasPalheiro: boolean;
	camelRyo: boolean;
	kitEstrategico: boolean;
	rebaixa: boolean;
	kitFocoCamel: boolean;
	baseRyoOcb: boolean;
	pesquisa: string;
	hierarquia: string;
	nomeCliente: string;
	endereco: string;
	mediaTriUlt3Meses: number;
	vendaMaio: number;
	objetivoTtMaio: number;
	lacunaMes: number;
	jTi: number;
	isqueiro: number;
	cb: string;
	cbSoft: string;
	cy: string;
	cySoft: string;
	cdp: string;
	cdg: string;
	cdr: string;
	cryo: string;
	ck: string;
	wb: string;
	wbSoft: string;
	wcSoft: string;
	ws: string;
	wr: string;
	wbs: string;
	we: string;
	wp: string;
	wbld: string;
	djbm: string;
	djb: string;
	lam: string;
	nas: string;
	nasp: string;
	pueb: string;
	inadim: boolean;
	cidade: string;
}

const ELEMENT_DATA: BatalhaNaval[] = [
  {sup: 'ADOLPHO MONTEIRO', vend: 'ARMANDO AMERICO DOS SANTOS JUNIOR', codTime: 'CT0000047225', ordem: 1, dia: '2 F', semana: 'A', contrato: ' ', nasPalheiro: false, camelRyo: true, kitEstrategico: false, rebaixa: true, kitFocoCamel: false, baseRyoOcb: true, pesquisa: 'Baixa', hierarquia: 'BAR/ LANCHONETE/ CAFETERIA', nomeCliente: 'JOSE CARLOS SERGIO DE MELO', endereco: 'AV 17 DE AGOSTO S/N - RECIFE', mediaTriUlt3Meses: 11.4, vendaMaio: 4.2, objetivoTtMaio: 8.3, lacunaMes: 9.4, jTi: 0.2, isqueiro: 2.1, cb: '23/5', cbSoft: '23/5', cy: '21/5', cySoft: '23/5', cdp: '21/5', cdg: '22/5', cdr: ' ', cryo: ' ', ck: ' ', wb: ' ', wbSoft: ' ', wcSoft: ' ', ws: ' ', wr: ' ', wbs: ' ', we: ' ', wp: ' ', wbld: ' ', djbm: ' ', djb: ' ', lam: ' ', nas: ' ', nasp: ' ', pueb: ' ', inadim: true, cidade: 'Itaqua'},
  {sup: 'ADOLPHO MONTEIRO', vend: 'ARMANDO AMERICO DOS SANTOS JUNIOR', codTime: 'CT0000047225', ordem: 1, dia: '2 F', semana: 'A', contrato: ' ', nasPalheiro: false, camelRyo: true, kitEstrategico: false, rebaixa: true, kitFocoCamel: false, baseRyoOcb: true, pesquisa: 'Baixa', hierarquia: 'BAR/ LANCHONETE/ CAFETERIA', nomeCliente: 'JOSE CARLOS SERGIO DE MELO', endereco: 'AV 17 DE AGOSTO S/N - RECIFE', mediaTriUlt3Meses: 11.4, vendaMaio: 4.2, objetivoTtMaio: 8.3, lacunaMes: 9.4, jTi: 0.2, isqueiro: 2.1, cb: '23/5', cbSoft: '23/5', cy: '21/5', cySoft: '23/5', cdp: '21/5', cdg: '22/5', cdr: ' ', cryo: ' ', ck: ' ', wb: ' ', wbSoft: ' ', wcSoft: ' ', ws: ' ', wr: ' ', wbs: ' ', we: ' ', wp: ' ', wbld: ' ', djbm: ' ', djb: ' ', lam: ' ', nas: ' ', nasp: ' ', pueb: ' ', inadim: true, cidade: 'Itaqua'},
  {sup: 'ADOLPHO MONTEIRO', vend: 'ARMANDO AMERICO DOS SANTOS JUNIOR', codTime: 'CT0000047225', ordem: 1, dia: '2 F', semana: 'A', contrato: ' ', nasPalheiro: false, camelRyo: true, kitEstrategico: false, rebaixa: true, kitFocoCamel: false, baseRyoOcb: true, pesquisa: 'Baixa', hierarquia: 'BAR/ LANCHONETE/ CAFETERIA', nomeCliente: 'JOSE CARLOS SERGIO DE MELO', endereco: 'AV 17 DE AGOSTO S/N - RECIFE', mediaTriUlt3Meses: 11.4, vendaMaio: 4.2, objetivoTtMaio: 8.3, lacunaMes: 9.4, jTi: 0.2, isqueiro: 2.1, cb: '23/5', cbSoft: '23/5', cy: '21/5', cySoft: '23/5', cdp: '21/5', cdg: '22/5', cdr: ' ', cryo: ' ', ck: ' ', wb: ' ', wbSoft: ' ', wcSoft: ' ', ws: ' ', wr: ' ', wbs: ' ', we: ' ', wp: ' ', wbld: ' ', djbm: ' ', djb: ' ', lam: ' ', nas: ' ', nasp: ' ', pueb: ' ', inadim: true, cidade: 'Itaqua'},
  {sup: 'ADOLPHO MONTEIRO', vend: 'ARMANDO AMERICO DOS SANTOS JUNIOR', codTime: 'CT0000047225', ordem: 1, dia: '2 F', semana: 'A', contrato: ' ', nasPalheiro: false, camelRyo: true, kitEstrategico: false, rebaixa: true, kitFocoCamel: false, baseRyoOcb: true, pesquisa: 'Baixa', hierarquia: 'BAR/ LANCHONETE/ CAFETERIA', nomeCliente: 'JOSE CARLOS SERGIO DE MELO', endereco: 'AV 17 DE AGOSTO S/N - RECIFE', mediaTriUlt3Meses: 11.4, vendaMaio: 4.2, objetivoTtMaio: 8.3, lacunaMes: 9.4, jTi: 0.2, isqueiro: 2.1, cb: '23/5', cbSoft: '23/5', cy: '21/5', cySoft: '23/5', cdp: '21/5', cdg: '22/5', cdr: ' ', cryo: ' ', ck: ' ', wb: ' ', wbSoft: ' ', wcSoft: ' ', ws: ' ', wr: ' ', wbs: ' ', we: ' ', wp: ' ', wbld: ' ', djbm: ' ', djb: ' ', lam: ' ', nas: ' ', nasp: ' ', pueb: ' ', inadim: true, cidade: 'Itaqua'},
  {sup: 'ADOLPHO MONTEIRO', vend: 'ARMANDO AMERICO DOS SANTOS JUNIOR', codTime: 'CT0000047225', ordem: 1, dia: '2 F', semana: 'A', contrato: ' ', nasPalheiro: false, camelRyo: true, kitEstrategico: false, rebaixa: true, kitFocoCamel: false, baseRyoOcb: true, pesquisa: 'Baixa', hierarquia: 'BAR/ LANCHONETE/ CAFETERIA', nomeCliente: 'JOSE CARLOS SERGIO DE MELO', endereco: 'AV 17 DE AGOSTO S/N - RECIFE', mediaTriUlt3Meses: 11.4, vendaMaio: 4.2, objetivoTtMaio: 8.3, lacunaMes: 9.4, jTi: 0.2, isqueiro: 2.1, cb: '23/5', cbSoft: '23/5', cy: '21/5', cySoft: '23/5', cdp: '21/5', cdg: '22/5', cdr: ' ', cryo: ' ', ck: ' ', wb: ' ', wbSoft: ' ', wcSoft: ' ', ws: ' ', wr: ' ', wbs: ' ', we: ' ', wp: ' ', wbld: ' ', djbm: ' ', djb: ' ', lam: ' ', nas: ' ', nasp: ' ', pueb: ' ', inadim: true, cidade: 'Itaqua'},
  {sup: 'ADOLPHO MONTEIRO', vend: 'ARMANDO AMERICO DOS SANTOS JUNIOR', codTime: 'CT0000047225', ordem: 1, dia: '2 F', semana: 'A', contrato: ' ', nasPalheiro: false, camelRyo: true, kitEstrategico: false, rebaixa: true, kitFocoCamel: false, baseRyoOcb: true, pesquisa: 'Baixa', hierarquia: 'BAR/ LANCHONETE/ CAFETERIA', nomeCliente: 'JOSE CARLOS SERGIO DE MELO', endereco: 'AV 17 DE AGOSTO S/N - RECIFE', mediaTriUlt3Meses: 11.4, vendaMaio: 4.2, objetivoTtMaio: 8.3, lacunaMes: 9.4, jTi: 0.2, isqueiro: 2.1, cb: '23/5', cbSoft: '23/5', cy: '21/5', cySoft: '23/5', cdp: '21/5', cdg: '22/5', cdr: ' ', cryo: ' ', ck: ' ', wb: ' ', wbSoft: ' ', wcSoft: ' ', ws: ' ', wr: ' ', wbs: ' ', we: ' ', wp: ' ', wbld: ' ', djbm: ' ', djb: ' ', lam: ' ', nas: ' ', nasp: ' ', pueb: ' ', inadim: true, cidade: 'Itaqua'},
  {sup: 'ADOLPHO MONTEIRO', vend: 'ARMANDO AMERICO DOS SANTOS JUNIOR', codTime: 'CT0000047225', ordem: 1, dia: '2 F', semana: 'A', contrato: ' ', nasPalheiro: false, camelRyo: true, kitEstrategico: false, rebaixa: true, kitFocoCamel: false, baseRyoOcb: true, pesquisa: 'Baixa', hierarquia: 'BAR/ LANCHONETE/ CAFETERIA', nomeCliente: 'JOSE CARLOS SERGIO DE MELO', endereco: 'AV 17 DE AGOSTO S/N - RECIFE', mediaTriUlt3Meses: 11.4, vendaMaio: 4.2, objetivoTtMaio: 8.3, lacunaMes: 9.4, jTi: 0.2, isqueiro: 2.1, cb: '23/5', cbSoft: '23/5', cy: '21/5', cySoft: '23/5', cdp: '21/5', cdg: '22/5', cdr: ' ', cryo: ' ', ck: ' ', wb: ' ', wbSoft: ' ', wcSoft: ' ', ws: ' ', wr: ' ', wbs: ' ', we: ' ', wp: ' ', wbld: ' ', djbm: ' ', djb: ' ', lam: ' ', nas: ' ', nasp: ' ', pueb: ' ', inadim: true, cidade: 'Itaqua'},
  {sup: 'ADOLPHO MONTEIRO', vend: 'ARMANDO AMERICO DOS SANTOS JUNIOR', codTime: 'CT0000047225', ordem: 1, dia: '2 F', semana: 'A', contrato: ' ', nasPalheiro: false, camelRyo: true, kitEstrategico: false, rebaixa: true, kitFocoCamel: false, baseRyoOcb: true, pesquisa: 'Baixa', hierarquia: 'BAR/ LANCHONETE/ CAFETERIA', nomeCliente: 'JOSE CARLOS SERGIO DE MELO', endereco: 'AV 17 DE AGOSTO S/N - RECIFE', mediaTriUlt3Meses: 11.4, vendaMaio: 4.2, objetivoTtMaio: 8.3, lacunaMes: 9.4, jTi: 0.2, isqueiro: 2.1, cb: '23/5', cbSoft: '23/5', cy: '21/5', cySoft: '23/5', cdp: '21/5', cdg: '22/5', cdr: ' ', cryo: ' ', ck: ' ', wb: ' ', wbSoft: ' ', wcSoft: ' ', ws: ' ', wr: ' ', wbs: ' ', we: ' ', wp: ' ', wbld: ' ', djbm: ' ', djb: ' ', lam: ' ', nas: ' ', nasp: ' ', pueb: ' ', inadim: true, cidade: 'Itaqua'},
  {sup: 'ADOLPHO MONTEIRO', vend: 'ARMANDO AMERICO DOS SANTOS JUNIOR', codTime: 'CT0000047225', ordem: 1, dia: '2 F', semana: 'A', contrato: ' ', nasPalheiro: false, camelRyo: true, kitEstrategico: false, rebaixa: true, kitFocoCamel: false, baseRyoOcb: true, pesquisa: 'Baixa', hierarquia: 'BAR/ LANCHONETE/ CAFETERIA', nomeCliente: 'JOSE CARLOS SERGIO DE MELO', endereco: 'AV 17 DE AGOSTO S/N - RECIFE', mediaTriUlt3Meses: 11.4, vendaMaio: 4.2, objetivoTtMaio: 8.3, lacunaMes: 9.4, jTi: 0.2, isqueiro: 2.1, cb: '23/5', cbSoft: '23/5', cy: '21/5', cySoft: '23/5', cdp: '21/5', cdg: '22/5', cdr: ' ', cryo: ' ', ck: ' ', wb: ' ', wbSoft: ' ', wcSoft: ' ', ws: ' ', wr: ' ', wbs: ' ', we: ' ', wp: ' ', wbld: ' ', djbm: ' ', djb: ' ', lam: ' ', nas: ' ', nasp: ' ', pueb: ' ', inadim: true, cidade: 'Itaqua'},
  {sup: 'ADOLPHO MONTEIRO', vend: 'ARMANDO AMERICO DOS SANTOS JUNIOR', codTime: 'CT0000047225', ordem: 1, dia: '2 F', semana: 'A', contrato: ' ', nasPalheiro: false, camelRyo: true, kitEstrategico: false, rebaixa: true, kitFocoCamel: false, baseRyoOcb: true, pesquisa: 'Baixa', hierarquia: 'BAR/ LANCHONETE/ CAFETERIA', nomeCliente: 'JOSE CARLOS SERGIO DE MELO', endereco: 'AV 17 DE AGOSTO S/N - RECIFE', mediaTriUlt3Meses: 11.4, vendaMaio: 4.2, objetivoTtMaio: 8.3, lacunaMes: 9.4, jTi: 0.2, isqueiro: 2.1, cb: '23/5', cbSoft: '23/5', cy: '21/5', cySoft: '23/5', cdp: '21/5', cdg: '22/5', cdr: ' ', cryo: ' ', ck: ' ', wb: ' ', wbSoft: ' ', wcSoft: ' ', ws: ' ', wr: ' ', wbs: ' ', we: ' ', wp: ' ', wbld: ' ', djbm: ' ', djb: ' ', lam: ' ', nas: ' ', nasp: ' ', pueb: ' ', inadim: true, cidade: 'Itaqua'},
  {sup: 'ADOLPHO MONTEIRO', vend: 'ARMANDO AMERICO DOS SANTOS JUNIOR', codTime: 'CT0000047225', ordem: 1, dia: '2 F', semana: 'A', contrato: ' ', nasPalheiro: false, camelRyo: true, kitEstrategico: false, rebaixa: true, kitFocoCamel: false, baseRyoOcb: true, pesquisa: 'Baixa', hierarquia: 'BAR/ LANCHONETE/ CAFETERIA', nomeCliente: 'JOSE CARLOS SERGIO DE MELO', endereco: 'AV 17 DE AGOSTO S/N - RECIFE', mediaTriUlt3Meses: 11.4, vendaMaio: 4.2, objetivoTtMaio: 8.3, lacunaMes: 9.4, jTi: 0.2, isqueiro: 2.1, cb: '23/5', cbSoft: '23/5', cy: '21/5', cySoft: '23/5', cdp: '21/5', cdg: '22/5', cdr: ' ', cryo: ' ', ck: ' ', wb: ' ', wbSoft: ' ', wcSoft: ' ', ws: ' ', wr: ' ', wbs: ' ', we: ' ', wp: ' ', wbld: ' ', djbm: ' ', djb: ' ', lam: ' ', nas: ' ', nasp: ' ', pueb: ' ', inadim: true, cidade: 'Itaqua'},
  {sup: 'ADOLPHO MONTEIRO', vend: 'ARMANDO AMERICO DOS SANTOS JUNIOR', codTime: 'CT0000047225', ordem: 1, dia: '2 F', semana: 'A', contrato: ' ', nasPalheiro: false, camelRyo: true, kitEstrategico: false, rebaixa: true, kitFocoCamel: false, baseRyoOcb: true, pesquisa: 'Baixa', hierarquia: 'BAR/ LANCHONETE/ CAFETERIA', nomeCliente: 'JOSE CARLOS SERGIO DE MELO', endereco: 'AV 17 DE AGOSTO S/N - RECIFE', mediaTriUlt3Meses: 11.4, vendaMaio: 4.2, objetivoTtMaio: 8.3, lacunaMes: 9.4, jTi: 0.2, isqueiro: 2.1, cb: '23/5', cbSoft: '23/5', cy: '21/5', cySoft: '23/5', cdp: '21/5', cdg: '22/5', cdr: ' ', cryo: ' ', ck: ' ', wb: ' ', wbSoft: ' ', wcSoft: ' ', ws: ' ', wr: ' ', wbs: ' ', we: ' ', wp: ' ', wbld: ' ', djbm: ' ', djb: ' ', lam: ' ', nas: ' ', nasp: ' ', pueb: ' ', inadim: true, cidade: 'Itaqua'},
  {sup: 'ADOLPHO MONTEIRO', vend: 'ARMANDO AMERICO DOS SANTOS JUNIOR', codTime: 'CT0000047225', ordem: 1, dia: '2 F', semana: 'A', contrato: ' ', nasPalheiro: false, camelRyo: true, kitEstrategico: false, rebaixa: true, kitFocoCamel: false, baseRyoOcb: true, pesquisa: 'Baixa', hierarquia: 'BAR/ LANCHONETE/ CAFETERIA', nomeCliente: 'JOSE CARLOS SERGIO DE MELO', endereco: 'AV 17 DE AGOSTO S/N - RECIFE', mediaTriUlt3Meses: 11.4, vendaMaio: 4.2, objetivoTtMaio: 8.3, lacunaMes: 9.4, jTi: 0.2, isqueiro: 2.1, cb: '23/5', cbSoft: '23/5', cy: '21/5', cySoft: '23/5', cdp: '21/5', cdg: '22/5', cdr: ' ', cryo: ' ', ck: ' ', wb: ' ', wbSoft: ' ', wcSoft: ' ', ws: ' ', wr: ' ', wbs: ' ', we: ' ', wp: ' ', wbld: ' ', djbm: ' ', djb: ' ', lam: ' ', nas: ' ', nasp: ' ', pueb: ' ', inadim: true, cidade: 'Itaqua'},
  {sup: 'ADOLPHO MONTEIRO', vend: 'ARMANDO AMERICO DOS SANTOS JUNIOR', codTime: 'CT0000047225', ordem: 1, dia: '2 F', semana: 'A', contrato: ' ', nasPalheiro: false, camelRyo: true, kitEstrategico: false, rebaixa: true, kitFocoCamel: false, baseRyoOcb: true, pesquisa: 'Baixa', hierarquia: 'BAR/ LANCHONETE/ CAFETERIA', nomeCliente: 'JOSE CARLOS SERGIO DE MELO', endereco: 'AV 17 DE AGOSTO S/N - RECIFE', mediaTriUlt3Meses: 11.4, vendaMaio: 4.2, objetivoTtMaio: 8.3, lacunaMes: 9.4, jTi: 0.2, isqueiro: 2.1, cb: '23/5', cbSoft: '23/5', cy: '21/5', cySoft: '23/5', cdp: '21/5', cdg: '22/5', cdr: ' ', cryo: ' ', ck: ' ', wb: ' ', wbSoft: ' ', wcSoft: ' ', ws: ' ', wr: ' ', wbs: ' ', we: ' ', wp: ' ', wbld: ' ', djbm: ' ', djb: ' ', lam: ' ', nas: ' ', nasp: ' ', pueb: ' ', inadim: true, cidade: 'Itaqua'},
  {sup: 'ADOLPHO MONTEIRO', vend: 'ARMANDO AMERICO DOS SANTOS JUNIOR', codTime: 'CT0000047225', ordem: 1, dia: '2 F', semana: 'A', contrato: ' ', nasPalheiro: false, camelRyo: true, kitEstrategico: false, rebaixa: true, kitFocoCamel: false, baseRyoOcb: true, pesquisa: 'Baixa', hierarquia: 'BAR/ LANCHONETE/ CAFETERIA', nomeCliente: 'JOSE CARLOS SERGIO DE MELO', endereco: 'AV 17 DE AGOSTO S/N - RECIFE', mediaTriUlt3Meses: 11.4, vendaMaio: 4.2, objetivoTtMaio: 8.3, lacunaMes: 9.4, jTi: 0.2, isqueiro: 2.1, cb: '23/5', cbSoft: '23/5', cy: '21/5', cySoft: '23/5', cdp: '21/5', cdg: '22/5', cdr: ' ', cryo: ' ', ck: ' ', wb: ' ', wbSoft: ' ', wcSoft: ' ', ws: ' ', wr: ' ', wbs: ' ', we: ' ', wp: ' ', wbld: ' ', djbm: ' ', djb: ' ', lam: ' ', nas: ' ', nasp: ' ', pueb: ' ', inadim: true, cidade: 'Itaqua'},
  {sup: 'ADOLPHO MONTEIRO', vend: 'ARMANDO AMERICO DOS SANTOS JUNIOR', codTime: 'CT0000047225', ordem: 1, dia: '2 F', semana: 'A', contrato: ' ', nasPalheiro: false, camelRyo: true, kitEstrategico: false, rebaixa: true, kitFocoCamel: false, baseRyoOcb: true, pesquisa: 'Baixa', hierarquia: 'BAR/ LANCHONETE/ CAFETERIA', nomeCliente: 'JOSE CARLOS SERGIO DE MELO', endereco: 'AV 17 DE AGOSTO S/N - RECIFE', mediaTriUlt3Meses: 11.4, vendaMaio: 4.2, objetivoTtMaio: 8.3, lacunaMes: 9.4, jTi: 0.2, isqueiro: 2.1, cb: '23/5', cbSoft: '23/5', cy: '21/5', cySoft: '23/5', cdp: '21/5', cdg: '22/5', cdr: ' ', cryo: ' ', ck: ' ', wb: ' ', wbSoft: ' ', wcSoft: ' ', ws: ' ', wr: ' ', wbs: ' ', we: ' ', wp: ' ', wbld: ' ', djbm: ' ', djb: ' ', lam: ' ', nas: ' ', nasp: ' ', pueb: ' ', inadim: true, cidade: 'Itaqua'},
  {sup: 'ADOLPHO MONTEIRO', vend: 'ARMANDO AMERICO DOS SANTOS JUNIOR', codTime: 'CT0000047225', ordem: 1, dia: '2 F', semana: 'A', contrato: ' ', nasPalheiro: false, camelRyo: true, kitEstrategico: false, rebaixa: true, kitFocoCamel: false, baseRyoOcb: true, pesquisa: 'Baixa', hierarquia: 'BAR/ LANCHONETE/ CAFETERIA', nomeCliente: 'JOSE CARLOS SERGIO DE MELO', endereco: 'AV 17 DE AGOSTO S/N - RECIFE', mediaTriUlt3Meses: 11.4, vendaMaio: 4.2, objetivoTtMaio: 8.3, lacunaMes: 9.4, jTi: 0.2, isqueiro: 2.1, cb: '23/5', cbSoft: '23/5', cy: '21/5', cySoft: '23/5', cdp: '21/5', cdg: '22/5', cdr: ' ', cryo: ' ', ck: ' ', wb: ' ', wbSoft: ' ', wcSoft: ' ', ws: ' ', wr: ' ', wbs: ' ', we: ' ', wp: ' ', wbld: ' ', djbm: ' ', djb: ' ', lam: ' ', nas: ' ', nasp: ' ', pueb: ' ', inadim: true, cidade: 'Itaqua'},
  {sup: 'ADOLPHO MONTEIRO', vend: 'ARMANDO AMERICO DOS SANTOS JUNIOR', codTime: 'CT0000047225', ordem: 1, dia: '2 F', semana: 'A', contrato: ' ', nasPalheiro: false, camelRyo: true, kitEstrategico: false, rebaixa: true, kitFocoCamel: false, baseRyoOcb: true, pesquisa: 'Baixa', hierarquia: 'BAR/ LANCHONETE/ CAFETERIA', nomeCliente: 'JOSE CARLOS SERGIO DE MELO', endereco: 'AV 17 DE AGOSTO S/N - RECIFE', mediaTriUlt3Meses: 11.4, vendaMaio: 4.2, objetivoTtMaio: 8.3, lacunaMes: 9.4, jTi: 0.2, isqueiro: 2.1, cb: '23/5', cbSoft: '23/5', cy: '21/5', cySoft: '23/5', cdp: '21/5', cdg: '22/5', cdr: ' ', cryo: ' ', ck: ' ', wb: ' ', wbSoft: ' ', wcSoft: ' ', ws: ' ', wr: ' ', wbs: ' ', we: ' ', wp: ' ', wbld: ' ', djbm: ' ', djb: ' ', lam: ' ', nas: ' ', nasp: ' ', pueb: ' ', inadim: true, cidade: 'Itaqua'}
];
