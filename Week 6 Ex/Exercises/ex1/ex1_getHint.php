<?php error_reporting(0); ?>  
<?php
    header("Access-Control-Allow-Origin: *");
    
    $names = array();
    // Array with names
    $names[]='åAnna';
    $names[]='Anna';
    $names[]='Brittany';
    $names[]='Cinderella';
    $names[]='Diana';
    $names[]='Eva';
    $names[]='Fiona';
    $names[]='Gunda';
    $names[]='Hege';
    $names[]='Inga';
    $names[]='Johanna';
    $names[]='Kitty';
    $names[]='Linda';
    $names[]='Ophelia';
    $names[]='Petunia';
    $names[]='Amanda';
    $names[]='Raquel';
    $names[]='Cindy';
    $names[]='Doris';
    $names[]='Eve';
    $names[]='Evita';
    $names[]='Ståle';
    $names[]='Sunniva';
    $names[]='Tove';
    $names[]='Unni';
    $names[]='Violet';
    $names[]='Liza';
    $names[]='Elizabeth';
    $names[]='Ellen';
    $names[]='Wenche';
    $names[]='Vicky';

    //get query parameter from URL
    $query = $_GET["query"];
    $hint = "";
	
    // lookup all hints from array if $query is not "" 
	if($query != "") {
        $query = strtolower($query);
        $len = strlen($query);

        foreach($names as $name) {
            // e.g. stristr('USER@EXAMPLE.com', 'e') --> ER@EXAMPLE.COM
            if (stristr($query, substr($name, 0, $len ))) {
                if ($hint == "") {
                    $hint = $name;
                } else {
                    $hint = $hint . ", $name";
                }
            }
        }
    }
    // return the hint if found or "no suggestion" if no hint found 
    echo $hint== "" ? "no suggestion" : $hint; // -> text
?>