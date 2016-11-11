# console.image
A nice snippet to log images in chrome console 🌈


## Why is that ?
This snippet is heavily inspired from [Paul Irish](https://twitter.com/paul_irish) talk at Chrome Dev Summit.
He shows all the new stuff coming in Chrome Devtools in the latest version of Chrome (v55).

[Check it out!](https://www.youtube.com/watch?v=HF1luRD4Qmk)

This is HIS idea.

I've only managed to reproduce his output from what I've seen on his snippet. 😉


## Usage

```js
const avatar_url = 'https://avatars3.githubusercontent.com/u/USER_ID'

console.image(avatar_url)
```
and you get :

![demo](http://g.recordit.co/0zWsCsrFd7.gif)




Here's the code if you want to store it to your Chrome snippets :

```js
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
```
