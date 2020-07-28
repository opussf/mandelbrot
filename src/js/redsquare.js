// Do the Mandle brot

async function apiCall( x, y, r, i ) {
	var u = "http://www.zz9-za.com/~opus/mandelbrot/mandelbrot.php?worker";
	u = u + "&mx=" + x;
	u = u + "&my=" + y;
	u = u + "&r=" + mbX;
	u = u + "&i=" + mbY;
	console.log( u );
	let response = await fetch( u );
	let data = await response.json();
	//console.log( "data: " + data );
	//console.log( "cn:   " + data.cn );
	return data;
};

function mkColorArray( r ) {
	var R = r % 256;
	var G = 0;
	var B = 0;
	var A = 255;
	return [R, G, B, A];
};

function mandelbrotFunction() {
	var c = document.getElementById( "fractal" );
	var width = c.width;
	var height = c.height;
	
	var ctx = c.getContext( "2d" );
	var imgData = ctx.createImageData( width, height );

	// imgData is an array of 4 values per pixel
	// [0] = Red (0-255)
	// [1] = Green (0-255)
	// [2] = Blue 
	// [4] = Alpha ( 0 transparent - 255 fully visible )

	var XCenter = document.getElementById( 'XCenter' ).value;
	var YCenter = document.getElementById( 'YCenter' ).value;
	var Zoom = document.getElementById( "Zoom" ).value;

	if( XCenter == undefined || XCenter == "" ) { XCenter = 0; }
	if( YCenter == undefined || YCenter == "" ) { YCenter = 0; }
	if( Zoom == undefined || Zoom == "" ) { Zoom = 2; }

	document.getElementById( "XCenter" ).value = XCenter;
	document.getElementById( "YCenter" ).value = YCenter;
	document.getElementById( "Zoom" ).value = Zoom;

	var mbXMin = Number( XCenter - Zoom );
	var mbXMax = Number( XCenter + Zoom );
	var mbYMin = Number( YCenter - Zoom );
	var mbYMax = Number( YCenter + Zoom );

	var xInc = ( mbXMax - mbXMin ) / width;
	var yInc = ( mbYMax - mbYMin ) / height;

	var x, y;
	for( y = 0; y <= height; y++ ) {
		for( x = 0; x <= width; x++ ) {
			mbX = mbXMin + ( xInc * x );
			mbY = mbYMin + ( yInc * y );
			var dataCoord = ( ( y * width ) + x ) * 4;
			var dataCoord = ( y * width * 4 ) + ( x * 4 );
			console.log( x + "," + y + ": " + dataCoord )
			var colors = mkColorArray( 255 );
			console.log( "Colors: " + colors );
			colors.forEach( function( item, index, array ) {
				imgData.data[dataCoord + index] = item;
			} );

			document.getElementById( "width" ).value = mbX;
		}
	}
	ctx.putImageData( imgData, 0, 0 );
}

