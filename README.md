1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ans: 
--> getElementById = To take an element by its id name into javascript. 
--> getElementsByClassName = To take multiple elements by one class name.
--> querySelector = It is able to take id,class and Tag name also.
--> querySelector = nodelist


2. How do you create and insert a new element into the DOM?
ans: 
-->By using document.createElement() [For creating element]. and .innerHTML/.innerText/.setAttribute()/.classList.add() 

3. What is Event Bubbling and how does it work?
ans: 
-->Event Bubbling is a system which is follows its parent node one by one to root.

4. What is Event Delegation in JavaScript? Why is it useful?
ans:
-->Event delegation is a pattern where event bubble up to their parents.its easy to controle all childs inside an element or section.

5. What is the difference between preventDefault() and stopPropagation() methods?
ans:
--> preventDefault = its stop page reloading. form input tag defaultly auto reloads a page. its stop auto reload
-->stopPropagation() = In my opinion, its stop event bubbling