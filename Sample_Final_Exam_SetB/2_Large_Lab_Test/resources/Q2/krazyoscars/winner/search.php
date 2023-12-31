<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
  
// include database and object files
include_once '../config/database.php';
include_once '../objects/Winner.php';
  
// instantiate database and product object
$database = new Database();
$db = $database->getConnection();
  
// initialize object
$winner = new Winner($db);

// get search query
if( isset($_GET["g"]) && isset($_GET["d"]) && sizeof($_GET) == 2 ) {
    // Gender and Year
    $stmt = $winner->search_by_gender_decade($_GET["g"], $_GET["d"]);

}
elseif( isset($_GET["g"]) && !isset($_GET["d"]) && sizeof($_GET) == 1 ) {
    // Gender only
    $stmt = $winner->search_by_gender($_GET["g"]);
}
elseif( !isset($_GET["g"]) && isset($_GET["d"]) && sizeof($_GET) == 1 ) {
    // Name only
    $stmt = $winner->search_by_decade($_GET["d"]);
}
else {
    // set response code - 404 Not found
    http_response_code(404);
  
    // tell the user no items found
    echo json_encode(
        array("message" => "Query parameters are not set. No results.")
    );
    exit;
}

$num = $stmt->rowCount();

// check if more than 0 record found
if($num > 0) {
  
    // products array
    $result_arr = array();
    $result_arr["records"] = array();
    
    while( $row = $stmt->fetch(PDO::FETCH_ASSOC) ) {
        // extract row
        // this will make $row['name'] to
        // just $name only
        extract($row);
  
        $item = array(
            "id" => $id,
            
            "bio" => [
                "name" => $name,
                "gender" => $gender
            ],
    
            "movie" => [
                "title" => $title,
                "year" => $year,
                "description" => html_entity_decode($description)
            ],
    
            "others" => [
                "image" => $image
            ]
        );

        array_push($result_arr["records"], $item);
    }

    // Add info node (1 per response)
    $date = new DateTime('', new DateTimeZone('Asia/Singapore'));
    $result_arr["info"] = array(
        "author" => "Krazy Woman",
        "response_datetime_singapore" => $date->format('Y-m-d H:i:sP')
    );
  
    // set response code - 200 OK
    http_response_code(200);
  
    // show products data
    echo json_encode($result_arr);
}
else {
    // set response code - 404 Not found
    http_response_code(404);
  
    // tell the user no items found
    echo json_encode(
        array("message" => "No records found.")
    );
}
?>