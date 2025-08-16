### Few Notes Points Gain on Hands'on Practice 
** If you are using single value in the state for multiple button's or multiple elements 
then all buttons starts working together for all elements EvenListeners will be fired together even you are written separate event listeners for each button.

**So Best Practice** 
* Use seperate key-value pair in the state for each button or element.

**If no content need to display at initial level** 
* Best Practice: use double ampersand conditional statement instead of ternary or if-else use - 'condition && element' mean if condition is true then only element will be rendered otherwise it will be null.