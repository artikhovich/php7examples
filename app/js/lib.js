'use strict';

export class User{
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log(this.name);
    return this.name;
  }
}

export function productsDataSort(data){
		let read_products_html = ``;
		read_products_html+=`<table class="products"><tbody>`;
		read_products_html+=`<tr>
				<th class='head'>ID</th>
				<th class='head'>Название</th>
				<th class='head'>Описание</th>
				<th class='head'>Категория</th>
				<th class='head'>Цена</th>
				<th class='head'>---</th>
		</tr>`;

		$.each(data.records, function(key,val){
			read_products_html+=`<tr>
				<td>`+val.id+`</td>
				<td>`+val.name+`</td>
				<td>`+val.description+`</td>
				<td>`+val.category_name+`</td>
				<td>`+val.price+`</td>
			</tr>`;
		});
		read_products_html+=`</tbody></table>`;
		return read_products_html;
}

export function vanillaProducts(){
	let request = new XMLHttpRequest();
	request.open('GET', 'includes/product/read_product.php');
	request.send();
	request.onload = function(event){
		if(request.status === 200) {
				let phpOut = JSON.parse(request.responseText);
				let contentOut = productsDataSort(phpOut);
				document.getElementById('vanilla-content').innerHTML = contentOut;
			} else {
			console.log('Ann error in vanillaProducts');
			}
	}
}

export function category(){
	let request = new XMLHttpRequest();
	// 'includes/category/read_categories.php'
	request.open('GET','includes/category/read_categories.php');
	// request.open('GET','includes/objects/category.php');
	request.send();
	request.onload=function(event){
		console.log(request.responseText);
	}
}