# CSS syntax

#### Selector like h1

target specific element
if we select h1 then all the h1 header will have the same styling

for example

<!-- h1 [{ # color: blue; # } -->

adding same color for h2 as well:

<!-- h1, h2 [{ # color: blue; # } -->

over-riding style of eg a h1 with !IMPORTANT:

<!-- h2{margin: 20px; color: blue !important;} -->

#### for each page a separat css file. - one html file -> one css file - 4 html files -> 4 css files

how to link the css file to the html file

<!--- in the
<head>
    <title>here goes the title</title>
        <link
            rel="put name here"
            href="put link to css file here">
</head> -->

#### in body we create font-family

##### use rem for font-size

like this

<!-- body {
    font-family: Arial, Helvetica, sans-serif;
    font-size:10px;
    } -->

-> all elements in body will have the same font!
-> alle schriften werden gleiche font-size: 10px haben
-> dann später im css file einfach {font-size:1rem;} nutzen
-> für h1 dann {font-size:5rem} dann ist es {font-size: 5 x 10px;} wäre also {font-size: 50px}
-> für h2 oder h3 bisschen kleiner also {font-size:2rem} (wäre 20px)

#### in header we create margin, background and text align

so all elements in header get this styling

1. margin bottom px
2. background color
3. text-align center
4. borderer px
5. padding px
6. width px
7. height px

## one element's structure (margin border padding etc.)

see dev tools on safari to see

1. margin
   -start html element-
2. border
3. padding
4. actual element

### calculate total width and height

#### complicateed:

width/height + padding + border + margin (see where it is aligned!)

#### easy:

box-sizing: border-box;
box-sizing is... + element width and heigth + padding + border
-> margin is separat!!

##### difference margin and border

- define location of margin (top, bottom, center, etc)
- margin is on the outside
- then with the border the html element starts

## default margins when starting project

deleting default margins that come with browser default:
[//]: \* {box-sizing: border-box; margin: 0; padding=0}

```css
example header element {
  margin: 0 auto;
}
```

-> 0 is top and bottom no space between
-> auto is left and right - in this case of the header element auto is centering it in the middle of the page body{} (or parent element)

## section structure

<!-- in html document you have created
    <main>
        <section>
            here is content
        </section>
    </main>

IMPORTANT!
to do the styling in css file for this whole section
class name has to be called with a dot like this
.main section {
    padding: 20px;
    background color;
    border-radius;
    margin;} -->

## further styling tipps

<!--
add ul list:
    ul {
        list-style: none;
        }

create style for the link:
    a {
        color:hotpink;
        text-decoration
    }

    -->

create animation for hovering over link: 1. go to dev tools in browser 2. see styles in elements 3. go to force element state
:active, :focus, :hover, etc.
:visited (this is important, this changes the color so if we visited this link it doesnt change to the default pink)
like this:

<!--
    a:hover {
        font-weight;
        font-size;
        }
    a:active {
        color: green;
        }
    -->

    to style button:

<!--
        button:active {

        } -->

## input field

<!-- how to create styling for input field

    input:focus {
        outline: 10px dotted tomato;
        border none;
        border radius 10px;
    }
-->

## changing a style of one child in a section in main

class names are practical because you can use them everywhere
but you cant use the id twice
nowadays we dont use ids very often
ALWAYS use classes!!!
FIND GOOD names for classes, like class="main-sectionfood-titlespices"

<!--
in html file:
<section class="main-section">
    <article>
        <p class="text">
        text blabla
        </p>

        <p class="text" id="very-important-text">
        blabla
        </p>

    </article>
</section>

in css file:
.main-section:nth-child(2) {
    background color;
}

-->

make text very important and override all styles

<!--
#very-important-text {
    color;
    font-weight;
    font-size;
    }
-->

## block elements

take the whole width of the screen
like all elements from the html structure

- header
- head
- main
  etc.

## inline element

<!-- <span> </span>
<em></em>
-->

### dev tools tipps

you can display the inline or block elements in the dev console
in styles
seleting one element like h1 then click on margin and color and tick boxes

if you change stuff in the browser in dev tools
then click on the link on the right side "filename".css:"line where the change is"

## shadows

html file shows:

<section class="skyblue">
<button class="button3">different fonts button with inset shadow</button>
</section>
<section>
<button class="button4">outside shadow button</button>
</section>

css file shows:

```css
/* button with inset shadow */
.button3 {
  box-sizing: border-box;
  width: 200px;
  height: 70px;
  background-color: blueviolet;
  border: 2px black dashed;
  color: white;
  font-size: 9px;
  font-weight: 100;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-stretch: expanded;
  box-shadow: inset 0px 0px 30px green;
}

/* Button with outside shadow*/
.button4 {
  box-sizing: border-box;
  height: 100px;
  width: 300px;
  border: 10px red dotted;
  background-color: aqua;
  color: grey;
  font-size: 20px;
  box-shadow: 30px 40px 20px black;
}
```
