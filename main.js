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

// Component de botão.
const button = Vue.extend({
	props: {
		text: String
	},

	template: '<button class="btn btn-success" type="button">{{ text }}</button>'
})

Vue.component('table-info', tableInfo);
Vue.component('btn', button);

new Vue({
	el: '#app',
	data: listProducts
});
