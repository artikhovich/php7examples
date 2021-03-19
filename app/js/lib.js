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
		let read_products_html = `<button id='createBtn' class='btn create-product'>Создать товар</button>`;
		read_products_html+=`<table class="products"><tbody>`;
		read_products_html+=`<tr>
				<th class='head'>ID</th>
				<th class='head'>Название</th>
				<th class='head'>Цена</th>
				<th class='head'>Описание</th>
				<th class='head'>Категория</th>
				<th class='head'></th>
		</tr>`;

		$.each(data.records, function(key,val){
			read_products_html+=`<tr>
				<td class='form-collumn'>`+val.id+`</td>
				<td class='form-collumn'>`+val.name+`</td>
				<td class='form-collumn'>`+val.price+`</td>
				<td class='form-collumn'>`+val.description+`</td>
				<td class='form-collumn'>`+val.category_name+`</td>
				<td class='form-collumn'>
					<button class='btn form read-one-product'>Просмотр</button>
					<button class='btn form update-one-product'>Изменить</button>
					<button class='btn form delete-one-product'>Удалить</button>
				</td>
			</tr>`;
		});
		read_products_html+=`</tbody></table>`;
		return read_products_html;
}

export function vanillaProducts(){
	let request = new XMLHttpRequest();
	request.open('GET', 'includes/product/read.php');
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
	request.open('GET','includes/category/read.php');
	// request.open('GET','includes/objects/category.php');
	request.send();
	request.onload=function(event){
		console.log(request.responseText);
	}
}

export function createProduct(){
	let create_product_html = `<button class='btn show-table' id='requestBtn'>Показать все товары</button>
	<form id='create-product-form' action='#' method='post' border='0'>
	<h3>Создание товара</h3>
	    <table class='table table-hover table-responsive table-bordered'>
	        <tr>
	            <td>Название</td>
	            <td><input type='text' name='name' class='form-control' required /></td>
	        </tr>
	        <tr>
	            <td>Цена</td>
	            <td><input type='number' min='1' name='price' class='form-control' required /></td>
	        </tr>
	        <tr>
	            <td>Описание</td>
	            <td><textarea name='description' class='form-control' required></textarea></td>
	        </tr>
	        <!-- список выбора категории -->
	        <tr>
	            <td>Категория</td>
	            <td id="catoptions"></td>
	        </tr>
	        <tr>
	            <td>
	                <button type='submit' class='btn btn-primary create-product'>
	                    <span class='glyphicon glyphicon-plus'></span> Создать товар
	                </button>
	            </td>
	        </tr>
	    </table>
	</form>`;
	// вставка html в «page-content» нашего приложения 
	$("#products-content").html(create_product_html);

	// let categories_options_html = ``;
	$.getJSON("includes/category/read.php", function(data){
		let selectCat=[];
		// categories_options_html += `<select name='category_id' class='form-options'>`;
			$.each(data.records, function(key,val){
			// console.log(val.name);
			selectCat.push(`<option value='` + val.id + `'>` + val.name + `</options>`);
			});
			// console.log(selectCat);
			$("<select/>", {
				"class": "form-options",
				html: selectCat.join("")
			}).appendTo("#catoptions");
		// categories_options_html+=`</select>`;
		});

	// console.log(categories_options_html);
	// изменяем тайтл 
	// changePageTitle("Создание товара");
}
