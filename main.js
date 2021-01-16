import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js' // Importando o vue js via cdn.

// Nossa lista de produtos.
const listProducts = {
	products: [
		{
			'prod':'Uva',
			'price': 1.2,
			'quant': 2
		},
		{
			'prod':'Pera',
			'price': 0.2,
			'quant': 5
		},
		{
			'prod':'Maracuja',
			'price': 3.2,
			'quant': 2
		}
	],
}

// Tabela para exibir os produtos.
const tableInfo = Vue.extend({
	data: function() {
		return listProducts;
	},

	template : 
		'<table class="table table-hover">' +
		'		<thead class="bg-light">' +
		'			<tr class="text-muted">'+
		'				<th>Prod</th>'+
		'				<th>Preço</th>'+
		'				<th>Quant</th>'+
		'			</tr>'+
		'		</thead>'+
		'		<tbody>'+
		'			<tr v-for="products in products">'+
		'				<td>{{ products.prod }}</td>'+
		'				<td>{{ products.price.toLocaleString("pt-BR", { style:"currency", currency:"BRL" }) }}</td>'+
		'				<td>{{ products.quant }}</td>'+
		'			</tr>'+
		'			<tr>'+
		'				<td></td>'+
		'				<td class="font-weight-bold text-uppercase text-muted">Total</td>'+
		'				<td>{{ products[1].price }}</td>'+
		'			</tr>'+
		'		</tbody>'+
		'	</table>'
});

// Menu de navegação.
const nav = Vue.extend({
	template: '<nav class="navbar navbar-expand-lg navbar-dark bg-light shadow d-flex flex-row justify-content-between p-3 px-5">'+
	'				<img class="navbar-brend text-light" src="https://br.vuejs.org/images/logo.png" width="30"/>'+
	'				<button class="btn btn-success px-4" type="button">'+
	'					<span>Info</span>'+
	'				</button>'+
	'          </nav>' 
});

// Component de botão.
const button = Vue.extend({
	props: {
		text: String
	},

	template: '<button class="btn btn-success" type="button">{{ text }}</button>'
})

Vue.component('navigation', nav);
Vue.component('table-info', tableInfo);
Vue.component('btn', button);

new Vue({
	el: '#app',
	data: listProducts
});
