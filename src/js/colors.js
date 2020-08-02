
var pallette = [];

function mkPallette() {
	var R = 15;
	var G = 0;
	var B = 0;
	var hues = [];
	for( ; G <= 15; G++ ) {
		hues.push( [R, G, B] );	
	}
	for( R = 14; R>=0; R-- ) {
		hues.push( [R, G, B] );
	}
	for( B = 1; B<=15; B++ ) {
		hues.push( [R, G, B] );
	}
	for( G = 14; G>=0; G-- ) {
		hues.push( [R, G, B] );
	}
	for( R = 1; R<=15; R++ ) {
		hues.push( [R, G, B] );
	}
	for( B = 14; B>=0; B-- ) {
		hues.push( [R, G, B] );
	}
	hues.pop()  // remove the last one

	for( h=0; h<hues.length; h++ ) {
		for( bright=17; bright>=1; bright-- ) {
			R = hues[h][0] * bright;
			G = hues[h][1] * bright;
			B = hues[h][2] * bright;
			pallette.push( [R, G, B] );
		}
	}
};

function mkPalletteRGB() {
	pallette[0] = [ 255, 0, 0 ];   // red
	pallette[1] = [ 0, 255, 0 ];   // green
	pallette[2] = [ 0, 0, 255 ];   // blue
};

function mkPallette2() {
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
