export class CaddFattura {
    data: string;
    numero: number;
    anno: number;
    importo: number;
    stato: {
        id: number;
        nome: string
    };
    cliente: {
        id: number;
        ragioneSociale: string
    }
    constructor() {
        this.data = '';
        this.numero = 0;
        this.anno = 0;
        this.importo = 0;
        this.stato = {
            id: 1,
            nome: ''
        }
        this.cliente = {
            id: 0,
            ragioneSociale: ''
        }
    }
}
