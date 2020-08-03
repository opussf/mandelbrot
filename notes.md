# Notes

https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas

## Colors:

http://slicker.me/fractals/color.htm

## JS open

```window.open('?','_self');```

## Scale

ctx.scale(2, 2) // Doubles size of anything draw to canvas.

## Save

https://stackoverflow.com/questions/37859069/how-to-change-save-image-to-file-default-name/38007603



<a id="link"></a>

JAVASCRIPT:

  var link = document.getElementById('link');
  link.setAttribute('download', 'MintyPaper.png');
  link.setAttribute('href', canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"));
  link.click();

https://stackoverflow.com/questions/10673122/how-to-save-canvas-as-an-image-with-canvas-todataurl

```// Convert canvas to image
document.getElementById('btn-download').addEventListener("click", function(e) {
    var canvas = document.querySelector('#my-canvas');

    var dataURL = canvas.toDataURL("image/jpeg", 1.0);

    downloadImage(dataURL, 'my-canvas.jpeg');
});

// Save | Download image
function downloadImage(data, filename = 'untitled.jpeg') {
    var a = document.createElement('a');
    a.href = data;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
}```

## More interaction (slow script fix)

https://stackoverflow.com/questions/6598285/how-do-i-prevent-the-slow-script-warning-and-force-the-browser-to-continue-runni

1920 x 1200

2560 x 1600

