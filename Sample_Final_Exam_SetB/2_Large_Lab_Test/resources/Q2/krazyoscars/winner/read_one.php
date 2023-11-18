<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');
  
// include database and object files
include_once '../config/database.php';
include_once '../objects/Winner.php';
  
// get database connection
$database = new Database();
$db = $database->getConnection();
  
// prepare product object
$winner = new Winner($db);
  
// set ID property of record to read
$winner->id = isset($_GET['id']) ? $_GET['id'] : die();
  
// read the details of product to be edited
$winner->readOne();
  
if($winner->name != null) {

    // Add info node (1 per response)
    $date = new DateTime('', new DateTimeZone('Asia/Singapore'));

    // create array
    $item = array(
        "id" => $winner->id,
        
        "bio" => [
            "name" => $winner->name,
            "gender" => $winner->gender
        ],

        "movie" => [
            "title" => $winner->title,
            "year" => $winner->year,
            "description" => html_entity_decode($winner->description)
        ],

        "others" => [
            "image" => $winner->image
        ],

        "info" => [
            "author" => "Krazy Woman",
            "response_datetime_singapore" => $date->format('Y-m-d H:i:sP')
        ]
    );
  
    // set response code - 200 OK
    http_response_code(200);
  
    // make it json format
    echo json_encode($item);
}
else {
    // set response code - 404 Not found
    http_response_code(404);
  
    // tell the user item does not exist
    echo json_encode(array("message" => "Unable to find."));
}
?>