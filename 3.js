const con=new Vue({
    el:"#elemento1",
    data: {
        contenido: "Hola Mundo",
        lenguajes: [
            {nombre:"JavaScript", link:"https://www.javascript.com"},
            {nombre:"Python", link:"https://www.python.org"},
            {nombre:"PHP", link:"https://www.php.net"},
        ],
        nuevoLenguaje: "",
        nuevoLink: ""

    },
    methods:{
        agregarLenguaje(){
            this.lenguajes.push({nombre:this.nuevoLenguaje, link:this.nuevoLink});
            //console.log("Click");
        }
    }
});