
var pallette = [];

function mkPallette() {
	for( x=0; x<256; x++ ) {
		if( x<85 ) {		// colors 0-84
			r = x * 3;
			g = 0;
			b = 0;
		}
		if( x>84 && x<171 ) {	// colors 85-170
			r = 0;
			g = 3 * ( x-84 );
			b = 0;
		}
		if( x>170 ) {		// colors 170 -255
			r = 0;
			g = 0;
			b = 3 * ( x - 170 );
		}
		pallette[x] = [ r, g, b ];
	}
	
};

function mkColorArray( r ) {
	if( pallette.length == 0 ) { mkPallette(); }
	var pl = pallette.length;
	
	if( r[0] == r[1] ) {
		return [ 0, 0, 0, 255 ];
	} else {
		color = pallette[ r[0] % pl ]
		var R = color[0];
		var G = color[1];
		var B = color[2];
		var A = 255;
		return [R, G, B, A];
	}
};
