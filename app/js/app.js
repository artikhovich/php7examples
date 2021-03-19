import {User, createProduct, vanillaProducts as Products, category} from './lib.js';

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
			<td>`+val.price+`</td>
			<td>`+val.description+`</td>
			<td>`+val.category_name+`</td>
			<td class="buttons">
				<button class="btn read-one-product">Просмотр</button>
				<button class="btn update-one-product">Изменить</button>
				<button class="btn delete-one-product">Удалить</button>
			</td>
		</tr>`;
	});
}

var contentApp = 
`<div id='products-content'></div>
<div id='vanilla-content'></div>`;

function addClickEvent(data){
	document.getElementById('vanilla-content').innerHTML=data;
}

document.addEventListener("DOMContentLoaded",function(){
	$("#app").html(contentApp);
	addClickEvent(Products());
	// category();
	$(document).on('click', '#createBtn', function(){
		// console.log('Created product');
		createProduct();
	});
	// requestBtn.onclick=function(){
	// 	addClickEvent(Products());
	// 	let user = new User("Nicky");
	// 	user.sayHi();
	// }

	// createBtn.onclick=function(){createProduct(); }

	// будет работать, если создана форма товара 
	$(document).on('submit', '#create-product-form', function(){
	    // получение данных формы 
	    var form_data=JSON.stringify($(this).serializeObject());

	    // отправка данных формы в API 
	    $.ajax({
	        url: "includes/product/create.php",
	        type : "POST",
	        contentType : 'application/json',
	        data : form_data,
	        success : function(result) {
	        	console.log(data);
	            // продукт был создан, вернуться к списку продуктов 
	            showProducts();
	        },
	        error: function(xhr, resp, text) {
	            // вывести ошибку в консоль 
	            console.log(xhr, resp, text);
	        }
	    });
	    return false;
	});
});
