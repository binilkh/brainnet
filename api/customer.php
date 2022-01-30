<?php
class Customer{
  
    // database connection and table name
    private $conn;
    private $table_name = "customer";
  
    // object properties
    public $brainNo;
    public $customerName;
    public $address;
    public $idType;
    public $idNo;
    public $photo;
    public $todate;
	public $customerData;
	public $brainNoIns;
    public $customerNameIns;
  
    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }
	// read products
	function read(){
	$searchQuery = "";
	if($this->customerName != ""){
		$searchQuery .= " AND c.customer_name LIKE '%".$this->customerName."%'";
	}
	if($this->brainNo != ""){
		$searchQuery .= " AND c.brainNo = '".$this->brainNo."'";
	}
    // select all query
    $sql = "SELECT
                c.customer_id, c.brainNo, c.customer_name, c.address, c.id_type, c.id_no, c.photo, c.todate
            FROM
                customer c
			WHERE 1=1".$searchQuery."
            ORDER BY
                c.customer_id DESC";
  
    // prepare query statement
	
    $stmt = $this->conn->query($sql);
    
    return $stmt;
	}
	
	function insert() {
		$toDate=date('Y-m-d');
		//$customerNameIns=$this->customerData->custName;
		$sql="insert into customer(customer_name,address,id_type,id_no,brainNo,photo,todate)values('$this->customerNameIns','$this->address','$this->idType','$this->idNo','$this->brainNoIns','$this->photo','$toDate')";
		$stmt = $this->conn->query($sql);
		$sql1 = "SELECT
                c.brainNo, c.customer_name, c.address, c.id_type, c.id_no, c.photo, c.todate
            FROM
                customer c
			ORDER BY c.customer_id DESC LIMIT 5 ";
  
		// prepare query statement
	
		$stmt1 = $this->conn->query($sql1);
		return $stmt1;
	
	}
}
?>