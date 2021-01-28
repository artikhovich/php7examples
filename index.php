<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<title>php7 Examples</title>
</head><body>
	<?php
print '<h3>php out very well</h3>';

class Product {
	protected $id;
	protected $name;

	public function geId() {
		return $this->id;
	}

	public function getName() {
		return $this->name;
	}
}

/*
class Entree {
	public $name;
	public $ingredients = array();
	public function __construct($name, $ingredients){
		if (! is_array($ingredients)){
			throw new Exception('$ingredients must be an array');
		}
		$this->name = $name;
		$this->ingredients = $ingredients;
	}

	public function hasIngredient($ingredients) {
		return in_array($ingredient, $this->ingredients);
	}
}

$soup = new Entree;
$soup->name = 'Chiken Soup';
$soup->ingredients = array('chicken','water','fruits');
*/

$connection = new PDO('mysql:host=localhost;dbname=restapi_db;charset=utf8', 'admin', '12345');

foreach($connection->query('SELECT * FROM products') as $row) {
    echo '<p>'.$row['id'] . ' ' . $row['name'] . '</p>';
}

// $statement = $connection->query('SELECT * FROM products');
// $statement = $connection->query('SELECT * FROM users');
// $statement->setFetchMode(PDO::FETCH_CLASS, ‘Product’);

// while($row = $statement->fetch(PDO::FETCH_CLASS, 'Product')) {
// 	echo $row->getId() . ' ' . $row->getName();
// }


// while($row = $statement->fetch(PDO::FETCH_CLASS)) {
//     echo $row->getId() . ' ' . $row->getName();
// }

?>
</body></html>