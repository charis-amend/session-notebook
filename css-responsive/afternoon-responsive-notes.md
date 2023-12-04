# responsive css class

## using rem in parent and in child

rem takes from the root!
em takes from parent

root font size: 10px

parent
font-size: 2rem
this would be 20px

child
font-size: (take 2rem from parent which is 20px) x 2
this would be 40px font-size

-> we cannot scale an h1 because it takes the root font-size for the size.

## width & height of child and parent

-> using vw or px for parent square big
-> using % of the nested child square small

square big
width 500vw

square small
width 50%

OR CALCULATE:
square big
width: calc(100vw-100px)

## in HTML put <img>-tag in a <picture>tag

as soon as the view-port browser window changes the size to more than 1200px (see min width) then it'll show img2 instead of img1.

edit in html doc:
1200px über 600px.
ansonsten überschreibt 1200px das 600px wenn es unten steht.
<picture>

<source media="(min-width: 1200px)" srcset="/img/cat_large.jpg" />
<source media="(min-width: 600px)" srcset="/img/cat_medium.jpg" />
    <img src="./img/cat_small.jpg" alt="A cat" />
  </picture>

## MEDIA QUERIES different colors for different viewport sizes

for different media queries...

- check <meta> line in hmtl name viewport and content="width=device-width"
- this makes sure that the browser understands there are different media queries.

its reversed in meaning because we do mobile to desktop.
!!! min-width = greater than 800px (from mobile to desktop)
!!! max-width = less than 800px (from desktop to mobile)

if we do mobile first:

- these root colors will load if the screen is bigger than 800px wide
- we are working from mobile size to the desktop size

````css
@media screen and (min-width: 800px) {
  :root {
    --primary-dark-color: papayawhip;
    --primary-color: tomato;
    --secondary-color: cyan;
    }
/* creating 2 columns because window size is getting bigger from mobile to desktop */
    #quotes-container {
  grid-template-columns: repeat (2, 1fr);
 }
}```

## light and dark mode

overrides the colors with the dark mode
if the browser or device in general is set to dark mode, then it'll load this dark mode.

```css
@media (prefers-color-scheme: dark) {
  :root {
    --primary-dark-color: black;
    --primary-color: white;
    --secondary-color: gray;
  }
}
````

## accessability reduced motion feature

@media (prefers-reduced-motion: reduce)
@media (prefers-contrast: more)

able to do 2 or more media features:
@media (mind-width:600px) and (orientation: landscape) {
}
