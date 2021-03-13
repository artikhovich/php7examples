<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../config/login.php';
include_once '../objects/product.php';

$database = new DBconn();
$db = $database->getConnection();
$product = new Product($db);

$data = json_decode(file_get_contents("php://input"));

if (
		!empty($data->name)&&
		!empty($data->description)&&
		!empty($data->price)&&
		!empty($data->category_id)
	) {
		$timeNow = date('Y-m-d H:i:s');
		$product->name = $data->name;
		$product->description = $data->description;
		$product->price = $data->price;
		$product->category_id = $data->category_id;
		$product->created = $timeNow;
		$product->modified = $timeNow;
		if($product->create()){
			http_response_code(201);
			echo json_encode(array("message"=>"Товар был создан."), JSON_UNESCAPED_UNICODE);
		} else {
			http_response_code(503);
			echo json_encode(array("message"=>"Невозможно создать запись о товаре."), JSON_UNESCAPED_UNICODE);

		}
	}
	else {
		http_response_code(400);
		echo json_encode(array("message"=>"Данные не полные."), JSON_UNESCAPED_UNICODE);
	}
?>