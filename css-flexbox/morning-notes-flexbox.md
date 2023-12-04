# CSS Flexbox

## generall rules and structure

- flex container then all kid elements are relaating to the container
- if you create another containre in the flexbox it is not aautoomaatically a flexbox
- the kids from the flex contaianer are acting like inline elements
- purpose of flex
- adds responsiveness
  - doesnt geet bigger in flexbox
  - but gets smaller
- the elements height will always per default have the height of the containerr
- the width will be as small as possible

#### important

horizontal achse is main achse
vertical is the cross achse

therefore:
align-items -> cross achse
justify-content -> main achse

## how to do flex box

1.  change container into a flex box :

```css
flex container element {
  display: flex;
}
```

2. add gap: 20px;
   dont add margin!!

- gap is distance between elements in container
- margin is distance of the whole container

        ```css
        flex container element {
        display: flex;
        gap: 20px;
        }
        ```

3.  change that all elements align in the center

    ```css
    flex container element {
      display: flex;
      gap: 20px;
      justify-content: center;
    }
    ```

4.  spread elements in th available space in container
    elements wont change size until gap is 20px is reached

    ```css
    flex container element {
      display: flex;
      gap: 20px;
      justify-content: space-inbetween;
    }
    ```

5.  put element in the center of container
    by do justify-content and align items both in center
    align-items -> cross achse
    justify-content -> main achse

    ```css
    flex container element {
      display: flex;
      gap: 20px;
      justify-content: center;
      align-items: center;
    }
    ```

6.  transform element inside flex container to a flexbox itself to center eg the text inside the element
    _display: flex;_

7.  add spacing around the elements to use all the available space in the container
    _justify-contnt: space-evently;_

8.  select one element in container
    align-self only works on an element
    doesnt work on flex container

    align-self moves the flex-item to the start of the flex container:

    ```css
    .flex-item: nth-child(1) {
      align-self: flex-start;
    }
    ```

    move flex item to the end of flex container:

    ```css
    .flex-item: nth-child(2) {
      align-self: flex-end;
    }
    ```

9.  change order of a element inside the container
    make element nr. 5 move before element nr 1
    default order = 0
    so -1 moves it before 0
    moves element nr 5 before element nr 1

    ```css
    .flex-item: nth-child(5) {
      align-self: flex-end;
      order: -1;
    }
    ```

10. change main achse and cross achse

    _flex-direction: column-reverse;_
    applies to the elements inside the container

    or

    _flex-direction: column;_
    leaves the elements inside their order
    moves all elements to their deefault to the left

    ```css
    flex container element {
      display: flex;
      gap: 20px;
      justify-content: center;
      align-items: center;

      flex-direction: reverse;
    }
    ```

11. make it eeven more responsive
    _flex-wrap: wrap;_
    it allows my myself to wrap the elements in flex container. if you change display size of browser window
    then it'll put the elements underneath each other

12. make the elements sizes in container the same size if you changee browser window
    _flex-grow: default is 0_
    _flex-grow: 1;_
    every box is taking the same space

13. change width proportional of on element comparing to other elements
    element 3 is bigger thatn other elements 1, 2, 4 and 5

    use _flex-grow: 3;_

    ```css
    .flex-item: nth-child(3 element) {
      align-self: flex-end;

      flex-grow: 3;
    }
    ```

14. whenever element is smaller than 200px the element is wraping into the next line vertically
