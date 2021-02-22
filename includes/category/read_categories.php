<?php
header("Access-Allow-Control-Origin: * ");
header("content-type:application/json");
include_once '../config/login.php';
include_once '../objects/category.php';

$arr=array("message"=>"Hello from categories");

class ReadCategory{
	private $stmt;
	public function __construct($stmt){
		$this->stmt = $stmt;
	}
	public function getAllCategories(){

	}
}
echo json_encode($arr);
?>