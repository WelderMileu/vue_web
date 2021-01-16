import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js';

// Menu de navegação.
const nav = Vue.extend({
	template: '<nav class="navbar position-fixed top-0 w-100 navbar-dark bg-light shadow d-flex flex-row justify-content-between p-3 px-5" style="z-index: 9">'+
	'				<img class="navbar-brend text-light" src="https://br.vuejs.org/images/logo.png" width="30"/>'+
	'				<div class="d-flex flex-row text-uppercase font-weight-normal">'+
	'					<a href="/" class="nav-link text-muted">Inicial</a>'+
	'					<a href="api.html" class="nav-link text-muted">Consumindo api</a>'+
	'				</div>'+
	'          </nav>' 
});

Vue.component('navigation', nav);
