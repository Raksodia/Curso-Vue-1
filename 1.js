const app = new Vue({
	el: '#app',
	data: {
		titulo: 'Hola Mundo con Vue',
		frutas: ['Manzana','Pera','Platano'],
		fruts: [
			{nombre: 'Pera', cantidad:10},
			{nombre: 'Manzana', cantidad:0},
			{nombre: 'Platano', cantidad:11}
		]
	}
})