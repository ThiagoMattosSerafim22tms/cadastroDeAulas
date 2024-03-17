function Aula(professor,aluno,disciplina,dia,inicio,fim){
    this.professor=professor
    this.aluno=aluno;
    this.disciplina=disciplina;
    this.dia=dia;
    this.inicio=inicio  ;
    this.fim=fim;

    this.intervalo =()=>{
    let partInicio = parseFloat(this.inicio.slice(':')[0])+parseFloat(this.inicio.slice(':')[1])+0.001; 
    let partFim = parseFloat(this.fim.slice(':')[0])+parseFloat(this.fim.slice(':')[1])-0.001;

                var intervaloString= JSON.stringify( {professor_nome: this.professor, dia_marcado: this.dia, inicio_intervalo: partInicio, fim_intervalo: partFim});
        return intervaloString

    }
};


module.exports = Aula;