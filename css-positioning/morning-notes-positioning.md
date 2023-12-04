# CSS Positioning

- [CSS Positioning](#css-positioning)
  - [types of positioning](#types-of-positioning)
  - [How to do it](#how-to-do-it)
    - [relative](#relative)
    - [absolute](#absolute)
    - [fixed elements (eg header \& image)](#fixed-elements-eg-header--image)
      - [fix the image outside of website:](#fix-the-image-outside-of-website)
      - [operator transform: very powerful](#operator-transform-very-powerful)
      - [einheit vw and vh](#einheit-vw-and-vh)
    - [sticky element](#sticky-element)
  - [flexible image webbrowser size](#flexible-image-webbrowser-size)
  - [difference between parent element {} and parent \> element {}](#difference-between-parent-element--and-parent--element-)

## types of positioning

Specificity Calculator:
check how different styles affect each other:
https://specificity.keegan.st

1. relative
2. fixed
3. sticky
   #example:
   https://www.atelier-meta.art/residences example for sticky elements
   the first element is sticking on the top
4. floated

## How to do it

- every element already has a default static positioning

```css
h3 {
  position: static;
}
```

### relative

- you have to change static to relative so that left/right and bottom/top take effect!!

```css
h3 {
  position: relative;
  left: 50px;
  bottom: 50px;
}
```

### absolute

- element h3 positions itself to the next parent (eg container) that has a position: relative
- if you have no parent set with position: relative the element h3 its gonna position to the body of html file

!!! the absolute element h3 is no longer in the html section!

!!! the absolute element h3 is separat from the html file's order !

- use nth-child to position the absolute element h3 according to its relative parent eg container
- the h3 now is proportionally positioning itself to container

```css
h3 {
  position: absolute;
  left: 50px;
  bottom: 50px;
}

h3:nth-child(1) {
  top: 0;
  left: 0;
}

h3:nth-child(3) {
  bottom: 0;
  left: 0;
}

h3:nth-child(4) {
  bottom: 0;
  right: 0;
}
```

### fixed elements (eg header & image)

- takes element eg header and positions itself to the element main
- with fixed we can put an element eg header
- if we use fixed always give a the element width, top and left

```css
header {
height: 80px;
border: 5px dashed blue;
background-color: white;
position: fixed;
width: 100% /* (100% because the heaader uses the full width of screen) */
top: 0; /* (or -50px it creates nice animation by showing header then scrolling and it stays) */
left: 0;
z-index: 1; /*(puts header on the 2nd position)*/
}
```

#### fix the image outside of website:

moves the image from its own width 50% on x-achse and own height 50% on y-achse

```css
img {
  position: fixed;
  right: 0;
  bottom: 0;
  transform: translate (50%, 50%);
  transform: translate x(50%) /*or*/ translate y(50%);
}
```

#### operator transform: very powerful

- transform: can be used in any cases
- use it for img, containers
- transform: translate (translating element moving on x aand/or y axe), rotate, scale,

#### einheit vw and vh

- view width and view height
- port = size of the browser window
- vw 80vw = 80% of width of browser window
- vh 70vh = 70% of height of browser window

```css
main {
margin: 10px
width: vw
height: hv
}
```

### sticky element

1. we always have to use "position: relative;" for the nearest parent
2. if no nearest parent has position: relative; then it is the top of the screen.

3. in parent position relative case eg:
   - nearest parent is main
   - sticky example reaches 80px from the top of parent main
4. in no nearest parent defined case eg:
   - parent is screen (or body depending on html file)
   - sticky example reaches 80px from the top of screen or body of html file

```css
.sticky example {
  background-color: blue;
  position: 90px;
  top: 80px;
  /* (oncethestickyexamplereaches80pxfromthetopofthescreenornearestparent) */
  height: 20px;
  z-index: 0;
}
```

## flexible image webbrowser size

```css
.image-fluid {
  width: 100%;
  height: auto;
}
´´´
```

## difference between parent element {} and parent > element {}

`````css
main > p {
}
``` -> selecting only the direct childs of main

````css
main p {
}
``` -> selecting all <p>childs</p> in main

html structure would look like this:

<main>

    p<p>
    this text is a direct child of main
    </p>

    <div>
    this is a section inside main
      <p> this text is a child of the div section. and it is not a child of main"</p>
    </div>

    <p>
    this text is also a direct child of main!
    </p>

</main>
`````
