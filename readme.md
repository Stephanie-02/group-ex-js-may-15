Start by editing the index.html file:

A button called "refresh", that will trigger the fetch request we will create later.
A "Save to memory" button., 
A "Load from Memory" button.
Create a div with a .container class.

In the main.js file:

When we click on the "refresh" button, use "fetch" to get data from this API link:
https://jsonplaceholder.typicode.com/todos

Get the request response using the .json method on the response object.

Write a function that receives the data we got earlier, where we do the following:
For each list item, using document.createElement, create:
 - a div, with class ".list-item" that contains a list item. Use .className = "list-item" for setting the class.
    - h3 with class "title" tag for the title
    - input checkbox, with class "completed", and setting the value using what we have in the "completed" property. You can use checkbox.checked = true to check the checkbox.
    - use container.append() for appending an html tag to another html tag.


When we click on "Save to memory", we will save in localStorage all the data we got using that fetch request.
When we click on "Load from Memory", we will load all the data from localStorage, and display it on the screen.


