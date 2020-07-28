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
	var R = 255;
	var G = r ;
	var B = r ;
	var A = 255;
	return [R, G, B, A];
};

function mandelbrotFunction() {
	var c = document.getElementById( "fractal" );
	var ctx = c.getContext( "2d" );

	var width = c.width;
	var height = c.height;
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
	for( y = 0; y <= 100; y++ ) {
		for( x = 0; x <= width; x++ ) {
			console.log( x + "," + y + "\n" ) ;
			mbX = mbXMin + ( xInc * x );
			mbY = mbYMin + ( yInc * y );
			var json = apiCall( x, y, mbX, mbY ).then(function( data ) {
				document.getElementById("height").value = data.cn;
				var dataCoord = ( ( y * width ) + x ) * 4;
				console.log( dataCoord  )
				var colors = mkColorArray( data.cn );
				console.log( "Colors: " + colors );
				colors.forEach( function( item, index, array ) {
					imgData.data[dataCoord + index] = item;
				} );
			} );
		

			document.getElementById( "width" ).value = mbX;
		}
		ctx.putImageData( imgData, 0, 0 );
	}
}

