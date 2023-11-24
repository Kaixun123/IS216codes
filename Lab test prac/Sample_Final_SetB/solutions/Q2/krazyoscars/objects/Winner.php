<?php
    class Winner {
    
        // database connection and table name
        private $conn;
        private $table_name = "winner";

        // object properties
        public $id;
        public $image;
        public $gender;
        public $name;
        public $year;
        public $title;
        public $description;
            
        // constructor with $db as database connection
        public function __construct($db) {
            $this->conn = $db;
        }

        // get all winners
        public function read() {
        
            // select all query
            $query = "SELECT
                            *
                        FROM
                            winner";

        
            // prepare query statement
            $stmt = $this->conn->prepare($query);
        
            // execute query
            $stmt->execute();
        
            return $stmt;
        }

        // read one item
        public function readOne() {
        
            // query to read single record
            $query = "SELECT
                            *
                        FROM
                            winner
                        WHERE
                            id = ?
                        LIMIT
                            0,1";
        
            // prepare query statement
            $stmt = $this->conn->prepare( $query );
        
            // bind id of product to be updated
            $stmt->bindParam(1, $this->id);
        
            // execute query
            $stmt->execute();
        
            // get retrieved row
            $row = $stmt->fetch(PDO::FETCH_ASSOC);
        
            // set values to object properties
            $this->image = $row['image'];
            $this->gender = $row['gender'];
            $this->name = $row['name'];
            $this->year = $row['year'];
            $this->title = $row['title'];
            $this->description = $row['description'];
        }

        // get all movie years
        public function get_movie_years() {
        
            // select all query
            $query = "SELECT
                            year as movie_year
                        FROM
                            winner
                        ";
        
            // prepare query statement
            $stmt = $this->conn->prepare($query);
        
            // execute query
            $stmt->execute();
        
            return $stmt;
        }

        // search by gender
        public function search_by_gender($gender) {
        
            // select all query
            $query = "SELECT
                        *
                        FROM
                            winner
                        WHERE
                            gender = ?
                        ORDER BY
                            id";
        
            // prepare query statement
            $stmt = $this->conn->prepare($query);
                
            // bind
            $stmt->bindParam(1, $gender);
        
            // execute query
            $stmt->execute();
        
            return $stmt;
        }

        // search by decade
        public function search_by_decade($decade) {
        
            // select all query
            $query = "SELECT
                        *
                        FROM
                            winner
                        WHERE
                            year between ? AND ?
                        ORDER BY
                            id";
        
            // prepare query statement
            $stmt = $this->conn->prepare($query);
                
            // bind
            $stmt->bindParam(1, $decade);
            $end_year = $decade + 9;
            $stmt->bindParam(2, $end_year);
        
            // execute query
            $stmt->execute();
        
            return $stmt;
        }

        // search by gender & decade
        public function search_by_gender_decade($gender, $decade) {
        
            // select all query
            $query = "SELECT
                        *
                        FROM
                            winner
                        WHERE
                            gender = ?
                            AND
                            year between ? AND ?
                        ORDER BY
                            id";
        
            // prepare query statement
            $stmt = $this->conn->prepare($query);
                
            // bind
            $stmt->bindParam(1, $gender);
            $stmt->bindParam(2, $decade);
            $end_year = $decade + 9;
            $stmt->bindParam(3, $end_year);
        
            // execute query
            $stmt->execute();
        
            return $stmt;
        }
    }
?>