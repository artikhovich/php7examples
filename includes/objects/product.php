<?php

class Product {
//link to db	
	private $conn;
	private $table_name = "products";

//object property's
	public $id;
	public $name;
	public $description;
	public $price;
	public $category_id;
	public $category_name;
	public $created;

	public function __construct($db) {
		$this->conn=$db;
	}

	function read(){
		$query = "SELECT c.name as category_name, p.id, p.name, p.description, p.price, p.category_id, p.created FROM " . $this->table_name . " p LEFT JOIN categories c ON p.category_id = c.id ORDER BY p.id ASC";
		$stmt = $this->conn->prepare($query);
		$stmt->execute();
		return $stmt;
	}

	function readOne(){
		$query = "SELECT
		c.name as category_name, p.id, p.name, p.description, p.price, p.category_id, p.created 
			FROM
			" . $this->table_name . " p 
			LEFT JOIN
				categories c 
				ON p.category_id = c.id
			WHERE 
				p.id = ?
			LIMIT
				0.1";

		$stmt = $this->conn->prepare($query);
		$stmt->bindParam(1, $this->id);  
		$stmt->execute();
		$row = $stmt->fetch(PDO::FETCH_ASSOC);

		$this->name = $row['name'];
		$this->price = $row['price'];
		$this->description = $row['description'];
		$this->category_id = $row['category_id'];
		$this->category_name = $row['category_name'];
	}
}
//echo 'one object reading';
?>