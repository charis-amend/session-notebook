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

like this

<!-- body {font-family: Arial, Helvetica, sans-serif;} -->

-> all elements in body will have the same font!

#### in header we create margin, background and text align

so all elements in header get this styling

1. margin bottom px
2. background color
3. text-align center
4. borderer px
5. padding px
6. width px
7. height px

## one elements structure

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
