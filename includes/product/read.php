<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type:application/json; charset=UTF-8");

include_once '../config/login.php';
include_once '../objects/product.php';

class ReadProduct {
//http://localhost/artikhovich.git/php7
	private $stmt;
	public function __construct($stmt){
		$this->stmt=$stmt;
	}
	public function getAllProducts(){
		$num = $this->stmt->rowCount();
		if($num>0) {
			// echo "num: " . $num . "\r\n";
			$products_arr=array();
			$products_arr["records"]=array();

			while ($row = $this->stmt->fetch(PDO::FETCH_ASSOC)){
				extract($row);
				// echo $id . ": " . $name . " [" . $price . "]\r\n";
				$product_item=array(
					"id" => $id,
					"name" => $name,
					"description" => html_entity_decode($description),
					"price" => $price,
					"category_id" => $category_id,
					"category_name" => $category_name
				);

				array_push($products_arr["records"], $product_item);
			}
			http_response_code(200);
			return $products_arr;
		} else {
			http_response_code(404);
			return array("message"=>"Товары не найдены");
		}
	}
	// public function getOneProduct(id){}
}


$database = new DBconn;
$db = $database->getDb();
$product = new Product($db);
$stmt = $product->read();

$readProducts = new ReadProduct($stmt);
echo json_encode($readProducts->getAllProducts());

// echo json_encode(array("message"=>"<h3>read Products Echo</h3>"), JSON_UNESCAPED_UNICODE);
?>