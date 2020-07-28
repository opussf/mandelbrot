
function mkColorArray( r ) {
	if( r[0] == r[1] ) {
		return [ 0, 0, 0, 255 ];
	} else {
		
		var R = r[0] / r[1];
		var G = 128;
		var B = 128;
		var A = 255;
		return [R, G, B, A];
	}
};
