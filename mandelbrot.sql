drop table coords;

create table coords (
	xcenter varchar(255) not null,
	ycenter varchar(255) not null,
	zoom varchar(255) not null,
	ts timestamp not null,
	isfav char(1) default "N",
	primary key( xcenter, ycenter, zoom )
);


GRANT
	INDEX,
	INSERT,
	UPDATE,
	SELECT
ON mandelbrot.* TO opus@localhost;





 Name: Mandelbrot_X-0.751526970646_Y0.0308729631743_Zoom73563.5019782.png