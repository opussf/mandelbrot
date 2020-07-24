<?php
# this is a simple class for complex numbers

class Complex {
	public $r;
	public $i;
	public function Complex( $r, $i = null ) {
		if( is_numeric( $r ) ) {
			$this->r = $r;
		} else {
			$this->r = 0;
		}
		if( is_numeric( $i ) ) {
			$this->i = $i;
		} else {
			$this->i = 0;
		}
	}

	/*
	 * $param value|Complex
	 * @param value|null
	 * @ return Complex
	 */
	public function add( $r, $i = null ) {
		if( is_a( $r, "Complex" ) ) {
			$i = $r->i;
			$r = $r->r;
		}
		$sr = $this->r + $r;
		$si = $this->i + $i;

		return new Complex( $sr, $si );
	}

	/*
	 * $param value|Complex
	 * @param value|null
	 * @ return Complex
	 */
	public function subtract( $r, $i = null ) {
		if( is_a( $r, "Complex" ) ) {
			$i = $r->i;
			$r = $r->r;
		}
		$dr = $this->r - $r;
		$di = $this->i - $i;

		return new Complex( $dr, $di );
	}

	/*
	 * $param value|Complex
	 * @param value|null
	 * @ return Complex
	 */
	public function multiply( $r, $i = null ) {
		if( is_a( $r, "Complex" ) ) {
			$i = $r->i;
			$r = $r->r;
		}
		$pr = ( ( $this->r * $r ) - ( $this->i * $i ) );
		$pi = ( ( $this->r * $i ) + ( $this->i * $r ) );

		return new Complex( $pr, $pi );
	}

	public function abs() {
		$h = sqrt( pow( $this->r, 2 ) + pow( $this->i, 2 ) );
		return $h;
	}

	public function toString() {
		return $this->__toString();
	}
	public function __toString() {
		return sprintf( "%s + %si", $this->r, $this->i );
	}
}
?>
