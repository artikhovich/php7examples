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
public function readAll(){
	$query = "SELECT
		id, name, description, created, modified
		FROM
		" . $this->table_name . "
		ORDER BY name";
		
		$stmt = $this->conn->prepare($query);
		$stmt->execute();
		return $stmt;
	
		// echo 'id, name, description, created, modified';
	}
}

?>