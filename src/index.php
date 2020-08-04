<?php 
require_once( 'dbconnect.php' );

$XCenter = floatval( $_GET["XCenter"] );
$YCenter = floatval( $_GET["YCenter"] );
$Zoom = floatval( $_GET["Zoom"] );
if( $Zoom == 0 ) { $Zoom = 1; }

function createLink( $x, $y, $z ) {
	return( array ("?XCenter=$x&YCenter=$y&Zoom=$z", "($x, $y, $z)" ) );
}

$sql = "select * from coords order by ts desc limit 15";
$sql = "select xcenter, ycenter, max(zoom) zoom from coords group by xcenter, ycenter order by ts desc limit 15";
$result = mysql_query( $sql, $conn ) or die( mysql_error() );
$recentList = array();
for( $i = 0; $i < mysql_num_rows( $result ); $i++ ) {
	$recentList[] = createLink( mysql_result( $result, $i, "xcenter" ),
			mysql_result( $result, $i, "ycenter" ),
			mysql_result( $result, $i, "zoom" ) );
}

$sql = "insert into coords ( xcenter, ycenter, zoom ) values ( $XCenter, $YCenter, $Zoom ) on duplicate key update ts=now();";
$result = mysql_query( $sql, $conn ) or die( mysql_error() );


?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<script src="js/colors.js"></script>
<script src="js/mandelbrot_client.js"></script>
<title>Mandelbrot Project</title>
</head>
<body onload="mandelbrotFunction()">
<table>
<tr><td>
	<form>
	<input type="text" name="XCenter" id="XCenter" value="<? echo $XCenter ?>">
	<input type="text" name="YCenter" id="YCenter" value="<? echo $YCenter ?>">
	<input type="text" name="Zoom" id="Zoom" value="<?php echo $Zoom ?>">
	<input type="submit" value="Go">
	</form>
</td><td>
	<button id="saveImage" onclick="saveImage()">Save Image</button>
	<a id="saveLink"></a>
	<button id="zoomImage">Zoom Image</button>
	<button id="useScreen" onclick="changeResoltion()">Use Screen Resolution</button>
</td><td>Calculation time: <input type="text" name="rendertime" id="rendertime">
Max Iterations: <input type="text" name="maxIterations" id="maxIterations"></td>
</tr>
<tr><td colspan=3>
	<canvas id="fractal" width="1024" height="768" style="border:1px solid #000000;"></canvas>
</td><td>
	<table><tr><th>Recently seen</th></tr>
	<tr><th>X, Y, max Zoom</th></tr>
	<?php foreach( $recentList as $value ) {
		echo( "<tr><td><a href='${value[0]}'>${value[1]}</a><br/></td></tr>" );
	} ?>
</table>
</td></tr>
</table>
</body>
</html>
