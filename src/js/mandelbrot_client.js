// Do the Mandle brot

function mandelSet( x, y, limit = 1024 ) {
	zr = x;
	zi = y;
	rsqrd = zr*zr + zi*zi;
	var i;
	for( i=0; i<limit && rsqrd<=4.0; i++ ) {
		tr = zr*zr - zi*zi + x;
		ti = 2*zr*zi + y;
		zr = tr;
		zi = ti;
		rsqrd = zr*zr + zi*zi;
	}
	return [ i, limit ];
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
	Zoom = 2/Zoom;

	var mbXMin = Number( XCenter ) - Number( Zoom );
	var mbXMax = Number( XCenter ) + Number( Zoom );
	var mbYMin = Number( YCenter ) - Number( Zoom );
	var mbYMax = Number( YCenter ) + Number( Zoom );

	var xInc = ( mbXMax - mbXMin ) / width;
	var yInc = ( mbYMax - mbYMin ) / height;

	var x, y;
	for( y = 0; y <= height; y++ ) {
		for( x = 0; x <= width; x++ ) {
			console.log( x + "," + y + "\n" ) ;
			mbX = mbXMin + ( xInc * x );
			mbY = mbYMin + ( yInc * y );
			var cA = mandelSet( mbX, mbY, 40000 );
			var dataCoord = ( ( y * width ) + x ) * 4;
			//console.log( dataCoord  )
			var colors = mkColorArray( cA );
			//console.log( "Colors: " + colors );
			colors.forEach( function( item, index, array ) {
				imgData.data[dataCoord + index] = item;
			} );

			//document.getElementById( "width" ).value = mbX;
		}
		ctx.putImageData( imgData, 0, 0 );
	}
}
