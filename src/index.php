<?php 

$XCenter = floatval( $_GET["XCenter"] );
$YCenter = floatval( $_GET["YCenter"] );
$Zoom = floatval( $_GET["Zoom"] );
if( $Zoom == 0 ) { $Zoom = 1; }

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
</td></tr>
<tr><td>
	<canvas id="fractal" width="1024" height="768" style="border:1px solid #000000;"></canvas>
</td><td>
	<canvas id="zoomCanvas" width="300" height="300" style="border:1px solid #000000;"></canvas>
</td></td>
</table>
</body>
</html>
