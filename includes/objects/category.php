<?php
class Category{
	private $conn;
	private $table_name = "categories";
	public $id;
	public $name;
	public $description;
	public $created;
	public $modified;

public function __construct($db){
		$this->conn=$db;
	}
	function read(){
		echo 'id, name, description, created, modified';
	}
}
?>