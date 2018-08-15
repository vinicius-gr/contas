import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

export class Conta {
    constructor(
        public id: string = '',
        public descricao: string = '',
        public tipo: number = 1,
        public vencimento: string = '',
        public valor: number = null
    ) { }
}