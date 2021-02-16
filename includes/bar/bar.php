<?php
require_once 'includes/login.php';
print '<h3>php out very well</h3>';

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

?>