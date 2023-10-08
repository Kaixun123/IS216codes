<?php
//=================================================================
// DO NOT MODIFY THIS FILE
//=================================================================
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$data = [
    "USA" => [
        "head_of_state" => "Joseph Biden",
        "flag_relative_url" => "flags/usa.jpg",
        "personnel" => [
            "total_population" => 334998398,
            "total_fit_for_service" => 122274415,
            "total_military_personnel" => 1832000
        ],
        "airpower" => [
            "total_aircraft_strength" => 13247,
            "total_fighters" => 1957,
            "total_helicopters" => 5463
        ],
        "land_forces" => [
            "total_tanks" => 6612,
            "total_armored_vehicles" => 45193,
            "total_artillery" => 2837,
            "total_rocket_projectors" => 1366
        ],
        "naval_forces" => [
            "total_aircraft_carriers" => 11,
            "total_helicopter_carriers" => 9,
            "total_destroyers" => 92,
            "submarines" => 68
        ]
    ],
    "Russia" => [
        "head_of_state" => "Vladimir Putin",
        "flag_relative_url" => "flags/russia.jpg",
        "personnel" => [
            "total_population" => 142320790,
            "total_fit_for_service" => 46681219,
            "total_military_personnel" => 1350000
        ],
        "airpower" => [
            "total_aircraft_strength" => 4173,
            "total_fighters" => 772,
            "total_helicopters" => 1543
        ],
        "land_forces" => [
            "total_tanks" => 12420,
            "total_armored_vehicles" => 30122,
            "total_artillery" => 14145,
            "total_rocket_projectors" => 3391
        ],
        "naval_forces" => [
            "total_aircraft_carriers" => 1,
            "total_helicopter_carriers" => 0,
            "total_destroyers" => 15,
            "submarines" => 70
        ]
    ],
    "South Korea" => [
        "head_of_state" => "Moon Jae In",
        "flag_relative_url" => "flags/southkorea.jpg",
        "personnel" => [
            "total_population" => 51715162,
            "total_fit_for_service" => 21203216,
            "total_military_personnel" => 1130000
        ],
        "airpower" => [
            "total_aircraft_strength" => 1595,
            "total_fighters" => 402,
            "total_helicopters" => 739
        ],
        "land_forces" => [
            "total_tanks" => 2624,
            "total_armored_vehicles" => 13990,
            "total_artillery" => 6894,
            "total_rocket_projectors" => 574
        ],
        "naval_forces" => [
            "total_aircraft_carriers" => 0,
            "total_helicopter_carriers" => 2,
            "total_destroyers" => 12,
            "submarines" => 22
        ]
    ],
    "Ukraine" => [
        "head_of_state" => "Volodymyr Zelenskyy",
        "flag_relative_url" => "flags/ukraine.jpg",
        "personnel" => [
            "total_population" => 43745640,
            "total_fit_for_service" => 15617193,
            "total_military_personnel" => 500000
        ],
        "airpower" => [
            "total_aircraft_strength" => 318,
            "total_fighters" => 69,
            "total_helicopters" => 112
        ],
        "land_forces" => [
            "total_tanks" => 2596,
            "total_armored_vehicles" => 12303,
            "total_artillery" => 3107,
            "total_rocket_projectors" => 490
        ],
        "naval_forces" => [
            "total_aircraft_carriers" => 0,
            "total_helicopter_carriers" => 0,
            "total_destroyers" => 0,
            "submarines" => 0
        ]
    ],
    "North Korea" => [
        "head_of_state" => "Kim Jong Un",
        "flag_relative_url" => "flags/northkorea.jpg",
        "personnel" => [
            "total_population" => 25831360,
            "total_fit_for_service" => 5217935,
            "total_military_personnel" => 2000000
        ],
        "airpower" => [
            "total_aircraft_strength" => 946,
            "total_fighters" => 458,
            "total_helicopters" => 204
        ],
        "land_forces" => [
            "total_tanks" => 5895,
            "total_armored_vehicles" => 4114,
            "total_artillery" => 700,
            "total_rocket_projectors" => 1360
        ],
        "naval_forces" => [
            "total_aircraft_carriers" => 0,
            "total_helicopter_carriers" => 0,
            "total_destroyers" => 0,
            "submarines" => 35
        ]
    ]
];

$result_arr = array();
$result_arr["military_statistics"] = $data;

$date = new DateTime("now", new DateTimeZone('Asia/Singapore'));
$result_arr["info"] = array(
    "author" => "Global Fire Power Statistics",
    "response_datetime_singapore" => $date->format('Y-m-d H:i:sP')
);

// set response code - 200 OK
http_response_code(200);

// show response
echo json_encode($result_arr);

?>