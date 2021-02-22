import {User, vanillaProducts as Products, category} from './lib.js';

function productsDataBegin(){
	let read_products_html=``;
		read_products_html+=`<table class="products"><tbody>`;
		read_products_html+=`<tr>
				<th class='head'>ID</th>
				<th class='head'>Название</th>
				<th class='head'>Описание</th>
				<th class='head'>Категория</th>
				<th class='head'>Цена</th>
		</tr>`;
	return read_products_html;
}

function productsDataLines(data){
	$.each(data.records, function(key,val){
		let read_products_html = ``;
		read_products_html+=`<tr>
			<td>`+val.id+`</td>
			<td>`+val.name+`</td>
			<td>`+val.description+`</td>
			<td>`+val.category_name+`</td>
			<td>`+val.price+`</td>
		</tr>`;
	});
}

var contentApp = 
`<div id='products-content'></div>
<div id='vanilla-content'></div>
<button class='btn' id='requestBtn'>Request</button>`;

function addClickEvent(data){
	document.getElementById('vanilla-content').innerHTML=data;
}

document.addEventListener("DOMContentLoaded",function(){
	$("#app").html(contentApp);
	requestBtn.onclick=function(){
		addClickEvent(Products());
		let user = new User("Nicky");
		user.sayHi();
		category();
	}
});
