<?php
class Database{
  
    // specify your own database credentials
    private $host = "localhost";
    private $db_name = "kretha_brainnet";
    private $username = "kretha_user";
    private $password = "@GF@hwdEK[0T";
    public $conn;
  
    // get the database connection
    public function getConnection(){
        $this->conn = null;
		
		$this->conn = new mysqli($this->host, $this->username, $this->password,$this->db_name);
		
		// Check connection
		if ($conn->connect_error) {
			die("Connection failed: " . $conn->connect_error);
		}
		//echo "Connected successfully";
  
        return $this->conn;
	}
}
?>