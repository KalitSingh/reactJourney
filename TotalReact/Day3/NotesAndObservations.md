# Notes 

##  **State** Object in the class component.

* An js object that store data need to be change over a time. 
* States are **Merged** Mean - When we update only one key-value pair stored in the 
state it doest not affect other key-value pairs or state.

### Observations.
* We use ** data** stored in the **state** object directly in the *JSX* to update *UI*.

---

## **this.setState() in the class component.

* ** this.setState()** is used to update data stored inside the **state** object
only it do not contribute in the data or style change in the UI directly.
* We can pass either **callback function** to it or **object** to it as a parameter.
* **callback and object** method is used to update data of **state**.
* ** callback method** example: *this.setState((prevState) => {})* this is used in such a
situation when in the *UI* needs change on the basis of *previous data* like counter app.
We can also use object method but callback method is recomended.
* **object method** example: *this.setState({this.state.key1: value2})* - Its very simple we use it in the 
situation where we have to make change in the *UI* needs change in the static data, there is no use 
of previous data. like at onclick button colour shoud be change, some text should be change etc. Welcome App real-world example.

### Observations 
* **this.setState()**  Actually we use it inside any React Event function Definition, outside the render(){} method but inside
the **class component**.
* Inside the function definition *if-else conditional rendering* and inside this conditional rendering 
we can use this.setState() to change data of state according to the condition/logic.

---

## Conditional Rendering 

* can be done 4 in ways -- 
	- ** if-else statement ** - It should be use inside the event function definition to change the state with this.setState().
	- ** Using Element Variable ** - We can use this one for rendering *JSX* inside the render() method of class component, based on the *state data*.
	- ** Ternary operator ** - We can use it inside the return() of render() in the class component. based on the *state date*.
	- ** Using Logical && Operator ** - It can be also use as *Ternary operator*. Vist Welcome app for use-case and syntax.

### Observations 
* We use *if-else-statemet* specially with *this.setState()* to update the *state data*, here in the 
if-else we use **pre-initialize data in the state** as their condition to update the *state data*.

* Rest of all conditional ways we can use but its recomended.
* Other 3 ways like *ternary, Using logical && operator* we use them in the *JSX*, directly inside the return() in the render() method of class component.

---
