<?php

class DBconn{
	private $host = "localhost";
	private $db = "restapi_db";
	private $username = "admin";
	private $password = "12345";
	public $conn;


	public function getDb(){
		$this->conn = null;
		try {
			$this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db, $this->username, $this->password);
			$this->conn->exec("set names utf8");
			} catch(PDOException $exception){
			echo "connectiondbdb error: " . $exception->getMessage();
			}
		return $this->conn;
	}

	public function Close(){
		echo "Close database...";
		return mysql_close(self::$conn);
	}

	public function TellMe(){
		echo "login.php Class DBconn connected\r\n";
	}
}
/*
$host = 'localhost';
$db= 'restapi_db';
$charset = 'utf8';
$username = 'admin';
$password = '12345';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
    $opt = [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES   => false,
    ];
$conn = new PDO($dsn, $username, $password, $opt);
*/
?>