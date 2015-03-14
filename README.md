# Rock Paper Scissors Lizard Spock

<div id="table-of-contents" />
## Table of Contents

1. [Introduction](#introduction)
2. [Try It](#try-it)
3. [Tutorial](#tutorial)
  1. [Initial Design](#initial-design)
  2. [Implementing HTML Layer](#implementing-html-layer)
  3. [Implementing CSS Layer](#implementing-css-layer)
  4. [Implementing JS Layer](#implementing-js-layer)
  5. [Creating Javascript Objects](#creating-javascript-objects")
4. [Key Concepts](#key-concepts)
5. [Key Code](#key-code)

<div id="introduction" />
## Introduction

Building a Rock Paper Scissors Lizard Spock game for you to play against the computer. The rule can be summarised by the picture below:

![alt text][logo]
[logo]: public/images/rule.jpg

<div id="try-it" />
## Try It

I have used Heroku to host the sinatra application, so you can click [here] to play the game!

[here]: https://rock-paper-scissors-jin.herokuapp.com

<div id="introduction" />
## Tutorial

<div id="initial-design" />
### Initial Design

Before starting building the repository, it is useful to first think about how the front-end of the application should be like. How would the user interact with the website? How many pages would be optimum to server the purpose? What would be the MVP sequence to build the application?

In my case, I have decided to implement the first MVP with 2 pages. One page allows the user to register their name and select their action, and immediately after they have pressed the icon, javascript will randomly select computer's action and return the result on the second page. The user then is able to return the first page by clicking anywhere on the screen. Simple and elegant.

After implementing the MVP1, the project is open to additional functionality and decorations, such as a statistic counter, fancy animations, and etc. But first, the MVP1.

The language to build the application would be html, css and javascript.

<div id="implementing-html-layer" />
### Implementing HTML Layer

The HTML layer includes the following elements:
* index.html
  * Registering block
  * Text message
  * Action icons
* result.html
  * Result message
  * Redirection message

**[back to top](#table-of-contents)**

<div id="implementing-css-layer" />
### Implementing CSS Layer

When trying to implement vertical-align: middle, it is not working. The issue is solved by setting the block element to absolute position, auto margin, and a suitable width and height.

After added the stylesheet, I decided to clean up the file stucture of the repository.
* js
* public
  * images
  * stylesheets
* spec
* views
* README

<div id="implementing-js-layer" />
### Implementing JS Layer

After styling the css to fit the requirement of MVP1, we start to add logic to the game.

1. Before the user register their name, she should not see the message "Please select your action". To implement this, JQuery can be used. We do not want to use the form tag here, because this will redirect to another page, and the JQuery actions will be overrided.

2. When the action icons appear, we want to add a hovering effect so the user will have an indication of where the mouse is pointing at. This can be accompolished by adding in the stylesheet :hover {opacity:0.5;}.

3. Once the user clicked on an action, she should be see the computer's random choice, and the page should show a message of who wins.

**[back to top](#table-of-contents)**

<div id="creating-javascript-objects" />
### Creating Javascript Objects

The method I used here is backward deduction. I start by creating a object constructor, then inserting the necessary variables and functions, in chronological sequence - that is, never call a function that lies underneath.

When debugging, turn the Safari console on! That's probably more helpful than Jasmine.

<div id="key-concepts" />
## Key Concepts

* Follow the sequence of **content** - **presentation** - **behaviour**. That is, first filling the content in the **html layer**, then styling in the **css layer**, finally adding logic through **javascript layer**.
* Think of every content on the screen is wrapped inside a invisible box.
* In order to push to Heroku, we follow the sequence of creating bundle and generating controller through cucumber-sinatra.

<div id="key-code" />
## Key Code

JQuery:
```
slideUp()
slideDown()
hide()
fadeIn()
fadeOut()
fadeToggle()
css({color:"red"})
```

**[back to top](#table-of-contents)**
