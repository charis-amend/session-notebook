// --------  STYLED COMPONENTS --------
// works for REACT!
// use scss/sass (css) lanugague 

// -------- global styles for project:
// create styles.js file:
// styles.js
import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: etc}`
// Import the GlobalStyle component into the pages/_app.js file: 
export default function App({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            {/* render it above the <Component />: */}
            <Component {...pageProps} />
        </>
    );
}




// 1. use .js file
// 2. To create a styled component:
import styled from "styled-components";
// 3. import component to styles.js file
import ComponentName from "/componentfolder/ComponentName" //no .js ending
// ---- main index.js file: ---- 
export default function List() {
    return (
        <StyledList>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
        </StyledList>
    );
}
// styling each item:
const styledComponentName = styled.HtmlElement`
background - color: red;
; `
// name of a styled component is in uppercase (because it's a component), 
// but must not equal the function name; 
// a common naming pattern is to include the word --> Styled <---
const STYLEDListItem = styled.li`
background - color: crimson;
`;
const StyledList = styled.ul`
list - style - type: none;
`;

// ´--------  EXTENDED STYLING --------------
// change styling of a component slightly for a single case
// To easily make a new component that inherits the styling of another, just wrap it in the...
---> styled() // constructor.
// example:
// The Button from the last section without the interpolations:
const Button = styled.button`
color: #BF4F74;
font - size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid #BF4F74;
border - radius: 3px;
`;
// A new component based on Button, but with some override styles
const TomatoButton = styled(Button)`
color: tomato;
border - color: tomato;
`;
render(
    <div>
        <Button>Normal Button</Button>
        <TomatoButton>Tomato Button</TomatoButton>
    </div>
);

// ------------- ESCAPE HATCH -------------------
// In some cases you might want to change which tag or component a styled component renders. 
// This is common when building a navigation bar for example, 
// where there are a mix of anchor links and buttons but they should be styled identically.
// example:
// use the "as" polymorphic prop to dynamically swap out the element that receives the styles you wrote
render(
    <div>
        <Button>Normal Button</Button>
        {/* Normal Button has a different <a> Tag and accordingly a different href. 
      defining the difference for the tag as="nameOfTheTag" */}
        <Button as="a" href="#">Link with Button styles</Button>
        <TomatoButton as="a" href="#">Link with Tomato Button styles</TomatoButton>
    </div>
);

// ------------------escape hatch with custom components:
// Reversed button should have the exisiting {...props} 
// and for the children inside this ReversedButton <Button> Component it should change the Name
// change from "Custom Button with Normal Button styles" to "selyts nottuB lamroN htiw nottuB motsuC"
const ReversedButton = props => <Button {...props} children={props.children.split('').reverse()} />
render(
    <div>
        <Button>Normal Button</Button>
        <Button as={ReversedButton}>Custom Button with Normal Button styles</Button>
    </div>
);

// -------------------- STYILING Adapting based on props --------------------
// You can adapt styling based on props. 
// To do so, you need to pass the props to the styled component
// -----> "$isOnFire"
export default function List() {
    return (
        <StyledList $isOnFire></StyledList>)
}

// Th "$" tells styled components, that the prop should not be passed to the underlying DOM element or component 
// and should only be used for styling.
// $ infront of prop is a CONVENTION!!

// ----------------styling based on a condition 
// use function, function uses the prop as an argument
// example:
const StyledList = styled.ul`
list - style - type: ${function ChangeListWhetherIsOnFireOrNot(props) {
        return (props.$isOnFire ? "🔥" : "❄️");
    }
    };
/* or with destructuring: */
list - style - type: ${function ChangeListWhetherIsOnFireOrNot({ $isOnFire }) {
        return ($isOnFire ? "🔥" : "❄️");
    }
    };
`;
// -- change multiple css stylings for the condition:
// with "css``" helper
const StyledList = styled.ul`
  ${({ $isOnFire }) =>
        $isOnFire &&
        css`
      list-style-type: "🔥";
      background-color: red;
      color: white;
    `}
`;

// in the  session example: 
// in the index.js file
< Container $direction = "column" /> // ---> is only a styling component
        <InfoBox /> // ---> is a REACT component

// ------------ PSEUDO ELEMENTS (:hover)--------------
// To apply pseudoelements, pseudoselectors, or nesting styles, 
// you can use a single ampersand &
// --->   &:hover inside the `` css helper!
const StyledLink = styled(Link)`
text - decoration: none;
  &:hover {
    color: red;
}
`;
