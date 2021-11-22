export interface Icomune {
    content:[
        {
            id: number,
            nome: string,
            provincia: {
                id: number,
                nome: string,
                sigla: string
            }
        }
    ]
}
