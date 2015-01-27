# Rock Paper Scissors Lizard Spock



## Introduction

Building a Rock Paper Scissors Lizard Spock game for you to play against the computer. The rule can be summarised by the picture below:

![alt text][logo]
[logo]: rule.jpg


## Tutorial

### Initial design

Before starting building the repository, it is useful to first think about how the front-end of the application should be like. How would the user interact with the website? How many pages would be optimum to server the purpose? What would be the MVP sequence to build the application?

In my case, I have decided to implement the first MVP with 2 pages. One page allows the user to register their name and select their action, and immediately after they have pressed the icon, javascript will randomly select computer's action and return the result on the second page. The user then is able to return the first page by clicking anywhere on the screen. Simple and elegant.

After implementing the MVP1, the project is open to additional functionality and decorations, such as a statistic counter, fancy animations, and etc. But first, the MVP1.

The language to build the application would be html, css and javascript.

### Implementing HTML layer

The HTML layer includes the following elements:
* index.html
  * Registering block
  * Text message
  * Action icons
* result.html
  * Result message
  * Redirection message

### Implementing the CSS layer

When trying to implement vertical-align: middle, it is not working. The issue is solved by setting the block element to absolute position, auto margin, and a suitable width and height.


### Key concepts

* Follow the sequence of **content** - **presentation** - **behaviour**. That is, first filling the content in the **html layer**, then styling in the **css layer**, finally adding logic through **javascript layer**.
* Think of every content on the screen is wrapped inside a invisible box.


### Key code


## Try It