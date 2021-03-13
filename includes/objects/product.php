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

	function create(){
		$query = "INSERT INTO
		" . $this->table_name ."
		SET
		name=:name, description=:description, price=:price, category_id=:category_id, created=:created, modified=:modified";

		$stmt = $this->conn->prepare($query);
		$this->name=htmlspecialchars(strip_tags($this->name));
		$this->description=htmlspecialchars(strip_tags($this->description));
		$this->price=htmlspecialchars(strip_tags($this->price));
		$this->category_id=htmlspecialchars(strip_tags($this->category_id));

		$stmt->bindParam(":name", $this->name);
		$stmt->bindParam(":description", $this->description);
		$stmt->bindParam(":price", $this->price);
		$stmt->bindParam(":category_id", $this->category_id);
		$stmt->bindParam(":created", $this->created);
		$stmt->bindParam(":modified", $this->created);

		if($stmt->execute()) {
			return true;
		}
		
		return false;
	}
}
//echo 'one object reading';
?>