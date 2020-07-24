<?php
#var_dump( $_GET );

$maxLimit = 1000000;

$ip = $_SERVER["REMOTE_ADDR"];
$me = $_SERVER["PHP_SELF"];

$mx = intval( $_GET["mx"] );
$my = intval( $_GET["my"] );
$r = floatval( $_GET["r"] );
$i = floatval( $_GET["i"] );

$cr = floatval( $_GET["cr"] );
$ci = floatval( $_GET["ci"] );
$cn = intval( $_GET["cn"] );

$limit = intval( $_GET["limit"] );
$worker = array_key_exists( "worker", $_GET );

#printf( "%s,%s (%f,%f) (%s)\n", $mx, $my, $r, $i, $cn );

#var_dump( ini_get('max_execution_time') );

if( $worker ) {
	$limit = ( isset( $limit ) && $limit > 0 )? $limit : $maxLimit;
	require_once( "Complex.php" );
	if( $cn > 0 && isset( $cr ) && isset( $ci ) ) {
		$sum = new Complex( $cr, $ci );
	} else {
		$sum = new Complex( 0, 0 );
		$cn = 0;
	}
	$start_time = microtime( true );
	$c = new Complex( $r, $i );
	#print( "\$c: $c\n\$cn: $cn\n\$sum: $sum\n" );
	
	while( $sum->abs() < 2 && $cn < $limit ) {
		$sum = $sum->multiply( $sum )->add( $c );
		$cn += 1;
	}
	$outArray = array( 
		"ip" => $ip,
		"mx" => $mx,
		"my" => $my,
		"r" => $r,
		"i" => $i,
		"cr" => $sum->r,
		"ci" => $sum->i,
		"cn" => $cn,
		"limit" => $limit,
		"time" => microtime( true ) - $start_time,
	);
	echo json_encode( $outArray );
}

?>
