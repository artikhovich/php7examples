function showProducts(){
	let read_products_html = ``;
	$.getJSON("includes/product/read_product.php", function(data){
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
	$("#products-content").html(read_products_html);
	});
	// return read_products_html;
};

var contentApp = `<div id='products-content'></div>`;

document.addEventListener("DOMContentLoaded",function(){
	$("#app").html(contentApp);
	$("#products-content").html(showProducts());
	// console.log("All DOM Loaded");
	showProducts();
});