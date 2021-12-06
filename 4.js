const con=new Vue({
    el:"#elemento1",
    data: {
        contenido: "Hola Mundo",
        lenguajes: [
            {nombre:"JavaScript", link:"https://www.javascript.com",puntos:0},
            {nombre:"Python", link:"https://www.python.org",puntos:0},
            {nombre:"PHP", link:"https://www.php.net",puntos:10},
        ],
        nuevoLenguaje: "",
        nuevoLink: "",
        total:0

    },
    methods:{
        agregarLenguaje(){
            this.lenguajes.push({nombre:this.nuevoLenguaje, link:this.nuevoLink});
            this.nuevoLenguaje='';
            this.nuevoLink='';
            //console.log("Click");
        }
    },
    computed: {
        sumarTodo(){
            this.total = 0;
            for(lenguaje of this.lenguajes){
                this.total = this.total + lenguaje.puntos;
            }
            return this.total;
        }
    }
});