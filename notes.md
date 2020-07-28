# Notes

https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas

## Colors:

http://slicker.me/fractals/color.htm

## JS open

```window.open('?','_self');```

## Scale

ctx.scale(2, 2) // Doubles size of anything draw to canvas.

## Save

<a id="link"></a>

JAVASCRIPT:

  var link = document.getElementById('link');
  link.setAttribute('download', 'MintyPaper.png');
  link.setAttribute('href', canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"));
  link.click();

