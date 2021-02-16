function productsDataSort(data){
	let read_products_html = ``;
		read_products_html+=`<table class="products"><tbody>`;
		read_products_html+=`<tr>
				<th class='head'>ID</th>
				<th class='head'>Название</th>
				<th class='head'>Описание</th>
				<th class='head'>Категория</th>
				<th class='head'>Цена</th>
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
	// console.log("productDataSort: "+read_products_html);
	return read_products_html;
}

function showProducts(){
	$.getJSON("includes/product/read_product.php", function(data){		
		$("#products-content").html(productsDataSort(data));
	});
	// return read_products_html;
};


function vanillaProducts(){
	console.log ("button clicked");
	var request = new XMLHttpRequest();
	request.open('Get', 'includes/product/read_product.php');
	request.onreadystatechange = function() {

			if(request.status === 200) {
				let contentOut = productDataSort(request.responseText);
				console.log('contentOut from vanillaProducts: ' + contentOut);
				document.getElementById('vanilla-content').innerHtml = contentOut;
			} else {
			console.log('Ann error in vanillaProducts');
			}
	}
}

var contentApp = `
<div id='products-content'></div>
<div id='vanilla-content'></div>
<button class='btn' id='requestBtn'>Request</button>
`;

function addClickEvent(data){
	console.log('mousedown');
	document.getElementById('vanilla-content').innerHTML=data;
	// .innerHTML = 'Новый BODY!'
}

document.addEventListener("DOMContentLoaded",function(){
	$("#app").html(contentApp);
	// $("#products-content").html(showProducts());
	// console.log("All DOM Loaded");

	requestBtn.onclick=function(){
	showProducts();
		addClickEvent("Hello Clicker!!!");
	}

});