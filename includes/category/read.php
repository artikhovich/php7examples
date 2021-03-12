<?php
header("Access-Allow-Control-Origin: * ");
header("Content-Type:application/json; charset=UTF-8");

include_once '../config/login.php';
include_once '../objects/category.php';


class ReadCategories{
	private $stmt;
	public function __construct($stmt){
		$this->stmt = $stmt;
	}

	public function getAllCategories(){
		$num=$this->stmt->rowCount();
		if($num>0) {
			$categories_arr=array("message"=>"List Of Categories: " . $num);
			http_response_code(200);
			return $categories_arr;
		}
		else {
			http_response_code(404);
			return array("message"=>"Товары не найдены");
		}

	}
}
$database = new DBconn;
$db = $database->getDb();
$category = new Category($db);
$stmt = $category->readAll();

$readCategories = new ReadCategories($stmt);
echo json_encode($readCategories->getAllCategories());
?>