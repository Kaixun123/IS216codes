<?php error_reporting(0); ?>  
<?php
    // how to call: ex2_getData.php?type=customers&limit=5
    // type can be customers, products or suppliers
    // limit can be 1-5

    header("Access-Control-Allow-Origin: *");
	
    // data arrays
    $customers = [ 
            ["name" => "Jack", "age" => 30, "city" => "London"],
            ["name" => "Mary", "age" => 24, "city" => "Paris"],
            ["name" => "Dan", "age" => 18, "city" => "Prague"],
            ["name" => "Olav", "age" => 32, "city" => "Moscow"],
            ["name" => "Billie", "age" => 43, "city" => "Barcelona"]
    ];

    $products = [ 
            ["name" => "iPhone", "price" => 2049],
            ["name" => "Samsung", "price" => 1699],
            ["name" => "Huawei", "price" => 1499],
            ["name" => "Oppo", "price" => 1199],
            ["name" => "LG", "price" => 1299]
    ];

    $suppliers =  [ 
            ["name" => "Bane", "age" => 35, "city" => "Tokyo"],
            ["name" => "Joker", "age" => 44, "city" => "Seoul"],
            ["name" => "Penguin", "age" => 28, "city" => "KL"],
            ["name" => "Dent", "age" => 38, "city" => "Singapore"],
            ["name" => "Fish", "age" => 40, "city" => "Jakarta"]
    ];

    $data = array();

    $type = $_GET['type'];
    $limit = 1; // default
    if (isset($_GET['limit'])) {
        $limit = $_GET['limit'];
    }

    if($type == "customers") {
        $data = array_slice($customers, 0, $limit);
    } else if($type == "products") {
        $data = array_slice($products, 0, $limit);
    } else if($type == "suppliers") {
        $data = array_slice($suppliers, 0, $limit);
    }

    $processed_data = [ "type" => $type, "records" => $data];

    // create json string and send back to client
    $jsonObj = json_encode($processed_data);
    echo $jsonObj;
?>