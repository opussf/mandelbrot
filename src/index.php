<?php 

$XCenter = floatval( $_GET["XCenter"] );
$YCenter = floatval( $_GET["YCenter"] );
$Zoom = floatval( $_GET["Zoom"] );
if( $Zoom == 0 ) { $Zoom = 2; }

?>
<!DOCTYPE html>
<html lang="en">
<head>
<script src="js/colors.js"></script>
<script src="js/mandelbrot_client.js"></script>
<title>Mandelbrot Project</title>
</head>
<body onload="mandelbrotFunction()">
<form>
<input type="text" name="XCenter" id="XCenter" value="<? echo $XCenter ?>">
<input type="text" name="YCenter" id="YCenter" value="<? echo $YCenter ?>">
<input type="text" name="Zoom" id="Zoom" value="<?php echo $Zoom ?>">
<input type="submit" value="Go">
</form>
<br/>
<canvas id="fractal" width="1024" height="768" style="border:1px solid #000000;"></canvas>
</body>
</html>
