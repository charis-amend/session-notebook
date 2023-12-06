# CSS GRID

practice https://cssgridgarden.com

## change in css {display:grid;}

put in the parent container:

```css
parent-container {
  display: grid;
}
```

grid doesnt have a default until we set other variables

- adding gap to the parent container: gap:20px;

```css
parent-container {
  display: grid;
  gap: 20px;
}
```

## TEMPLATE-columns or rows

add in the element in the grid parent container grid-template-columns: 200px;
so one column-space is 200px big

```css
element-in-container {
  grid-template-columns: 200px;
}

element-in-container {
  grid-template-row: 200px;
}
```

!! a column or row is always the line that separates a space
not the space itself !!

#### if we want 4 columns we change it to:

```css
parent-container {
  grid-template-columns: 200px 200px 200px 200px;
}
```

- for this is a shortcut:

```css
parent-container {
  grid-template-columns: repeat(4, 200px);
}
```

-> you can mix and match units! 200px or 100rem or 50% possible

## fraction unit:

- nice option to not calculate to make all the column sizes structure automatic

- grid-template-columns: 1fr 1fr 1fr;
  - or grid-template-columns: repeat (3, 1fr);
  - takes up the space we have
  - _fr only use with grid-template-columns or grid-template-rows_
- every item which doesnt fit in the row will automatically be wrapped to the next row.

```css
parent-container {
  grid-template-columns: 1fr 1fr 1fr;
}

parent-container {
  grid-template-rows: repeat (3, 1fr);
}
```

## use grit in web dev tools

- open grid in elements
- next to display: grid; is the icon to change the grid options

## spread an item across multiple columns

!!! 1 is always the number of the first column !!! not 0!

1. first item should go
   from column 1 (=line left of the first space)
   to
   column 3 (=line right of the second space)
   spans across 2 columns for the first item:
   grid-column: span 2;

2. second item or other items should go
   grid-column-start: 1;
   grid-column-end: 3;

3. usw...
   grid-column-start: 2;
   grid-column-end; 4;

## spread an item across multiple rows

!!! also 1 is the first row!!!

```css
element-in-container {
  grid-row-start: 1;
}

element-in-container {
  grid-row-end: 3;
}
```

## change the spot of an item in the whole grid including columns and rows

### combining grid-row span and grid-row-end and grid-row-start

```css
element-in-container {
  grid-row: 1 / 3;
}

element-in-container {
  grid-row: 1 / span 2;
}
```

### same goes for columns

```css
element-in-container {
  grid-column: 2 / span 2;
}

element-in-container {
  grid-column: 2 / 4;
}
```

or if the grid-row-start/grid-column-start already defined in the css:
then use only grid-column: span 2;

## special stuff

#### add scrolling to one column

!!! only works if the elements have a defined height !!!

```css
element-in-container {
  overflow-y: scroll;
}
```

#### adding auto fill for repeeating elements in container

```css
parent-container {
  grid-template-columns: repeat (auto-fill, 200px);
}
```

-> each column is now 200px wide

#### make it reseponsive in the container so the grid adjusts to and wraps the elements in the container

giving the container-columns a minimum of 200px so it creates

```css
.wrapper-container {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}

.wrapper-element {
  aspect-ratio: 4/5;
  object-fit: cover;
}
```

## TEMPLATE-area

define th different areas:

```css
.area-example-element {
  display: grid;
  gap: 20px;
  grid-template-areas:
    "element1 element1 element3"
    "element2 element5 element5"
    "element2 element6 element7";
}
```

-> element1 takes up space in the first 2 columns in the first row
-> element5 takes up space in the last 2 columns in the second row
-> elements2 takes up space in the first column in the second and third row

define the elements

```css
.area-example-element1 {
  grid-area: element1;
}

.area-example-element2 {
  grid-area: element2;
}

.area-example-element5 {
  grid-area: element5;
}
```

usw....
