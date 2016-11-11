function renderImage (url, scale = 0.3) {
  let img = new Image()

  img.onload = () => {
    const style = `
      display: block !important;
      margin: 10px 0;
      font-size: ${img.height * scale}px;
      padding: ${Math.floor(img.height * scale/2)}px ${Math.floor(img.width * scale/2)}px;
      background: url(${url});
      background-size: ${img.width * scale}px ${img.height * scale}px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    `
    console.log('%c', style)
  }

  img.src = url
}

console.image = renderImage
