# Module 4 Code Challenge: Bot Battlr 2

Welcome to __Bot Battlr 2__, the one and only spot in the known universe where you can custom build your own Bot Army!

Here's the scenario: a galactic overlord has hired you, a galactic web developer, to develop a galactic web app that will allow them to browse through a list of robots, enlist bots into their army and remove them from the army if they are not worthy.

As you probably already know we've worked on this before so heres the catch. Previously we were able to add and remove one robot at a time. Now we will need to be able to filter robots by stats and bulk add robots that meet your standards.

All of the code to style the page has been written for you, meaning that you should be adding to the code rather than editing it; your main responsibility will be to get information, render it into the right containers, and build out the page's functionality. Try your best to find the right places to insert code into the established code base, but if your finished product has some styling issues, don't worry too much about it.


## What You Already Have

`BotCard` and `BotSpecs` are presentational components that have been provided for you that will render out information about an individual bot formatted for a list view and for a full view, respectively. They are pre-styled, and it is your responsibility to get the data into them.

`BotCollection` and `YourBotArmy` are container components. `BotCollection` is where all the bots will be displayed, while `YourBotArmy` (the green portion on the top of the screen) will only display the bots that have been selected by the user.

`BotPage` is the highest component below App, and serves as the main container for all of the pieces of the page.

*Currently you have a fetch call getting all the bot instances and displaying them in your BotCollection. Also the functionality to click and add a single bot to the army as well as click a bot in the army to remove it from the army has already been implemented.*


## Instructions
To start, run `npm install && npm start` to get the app up and running. Follow along with these steps, making sure to read all of the instructions before beginning to code.

#### 1.  Filtering Bots by Health

Be able to use the slider to filter bots which meet the criteria. The number on the filter should be the MINIMUM amount needed to be rendered (Bots on page should have greater than or equal to the slider amount)

#### 2.  Adding All bots

Be able to click the "Import bots meeting this criteria" to bulk add all the bots who fit the criteria to the army. (All bots currently displayed in BotCollection). __No duplicate bots should be added__.

## Checkpoint!

If you have gotten this far, you have hit the checkpoint. Your app should look like the following:

![alt text][checkpoint]

[checkpoint]: ./public/bot-batlr-2.gif "Checkpoint demo"

Before proceeding to the next part of the challenge, __be sure to stage a commit at this point__. That way if your code breaks or you do not get to finish the next feature, we will be able to see that you were able to get up to this point.

#### 3.  Filter bots by damage and armor

Congrats on making it this far. Now we need to do more filtering! Add the logic to be able to filter by health, damage and armor all together!

#### BONUS

If you have finished all of the above features before time is called, consider building out an extra feature. This could a sort, a filter, or a search. This deliverable is entirely optional, so do not feel pressure to meet this goal.

## Finishing up

When time is called, please stop coding, push your code to your fork, and submit a pull request from Github. If you have any clarifying questions during or after the code challenge, please feel free to ask your instructor.

## Criteria
1. Props and state - Is state maintained in the right components? Are the functions to change state defined and executed in the appropriate places? Are the appropriate props passed from component to component?

2. Code structure and efficiency - Is the code clean and easy to read? Are large chunks of code separated into reusable functions? Is functionality appropriately delegated between class and functional components?

3. Rendering - Is information rendered in the correct locations? Were you able to conditionally render different components (i.e. `BotSpecs` and `BotCollection`)?

__Good Luck!__
