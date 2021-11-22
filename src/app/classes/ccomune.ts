export class Ccomune {
    id?: number;
    nome: string;
    provincia: {
        id?: number;
        nome?: string;
        sigla?: string
    }
    constructor() {
        this.id = 0;
        this.nome = '';
        this.provincia = {
            id: 0,
            nome: '',
            sigla: ''
        };
    }
}
