function productsDataBegin(){
	let read_products_html = ``;
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
		return read_products_html;
		// return data;
}

function showProducts(){
	$.getJSON("includes/product/read_product.php", function(data){		
		// $("#products-content").html(productsDataSort(data));
		console.log(data);
		return data;
	});
};


function vanillaProducts(){
	// console.log("button clicked");
	var request = new XMLHttpRequest();
	// request.responseType =	"json";
	request.open('GET', 'includes/product/read_product.php', false);
	request.send();
		if(request.status === 200) {
				let phpOut = JSON.parse(request.responseText);
				// console.log(phpOut);
				let contentOut = productsDataSort(phpOut);
				// console.log('contentOut from vanillaProducts: ' + contentOut);
				// document.getElementById('vanilla-content').innerHtml = contentOut;
				// console.log(phpOut);
				console.log(contentOut);

				return "phpOut";
				// return contentOut;
			} else {
			console.log('Ann error in vanillaProducts');
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
}

var clickerText='<h1>Boss</h1>';

document.addEventListener("DOMContentLoaded",function(){
	$("#app").html(contentApp);
	requestBtn.onclick=function(){
		showProducts();
		addClickEvent(clickerText);
	}

});