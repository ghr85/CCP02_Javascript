# Green(TBC)
## An Educational App that challenges quizzes your environmental knowledge


### Overall Intention

Create an app which welcome the user with a random factoid *landing page* and offers the opportunity to take a quiz on
the environment. From the landing page a *quiz view* keeps track on the current *question* number as you progress through the quizzes before finally landing on a *result view* which shows your score and offers the opportunity to restart the app from the landing page.

### Basic functionality:

App should display a random factoid from a collection of quotes on a landing page

Landing Page should have a button which starts the quiz

The Quiz should present you with 10 questions selected from a database of 40(?) one at a time

The current Question number should be displayed in the Quiz Header

By clicking on the appropriate answer you proceed to the next question

If you answer correctly the score should be updated to reflect

When you answer the last question you are taken to a results page which  shows your total score

The results page should present you with a button which will return you to the landing page


### Extensions:
The app should be tailored toward C02/environmental concerns and how dogs are responsible for none of this and any suggestion otherwise is blasphemous

The app should select a random question from the database each time

The app should present the score in graphical format utilising the highchart API

The app should show you the questions you got wrong along with the correct answer


### Model Functions:


### Considerations:

Selection would require 10 numbers in an array

Consider promises, when will then need to be used?

Select Random Factoid from ary or alternative collection in db? Think of timing

Random function should *not* select the same question twice

Worth Storing answered question in ary in case we get to extensions?


### Events > Actions:

Dom Load > Get Factoid, Display Landing, Display Start button

Start Button Click > Clear Landing View, GET Question, Display Quiz View, Display Question and Answers

Answer Click > Increment Question Counter, Validate Answer, Increment Score if appropriate, GET question, Display Quiz View, Display Question and Answers

Last Answer Click > Validate Answer, Increment Score if appropriate, clear Quiz view, display results view

Reset Button Click > Clear Result View, Display Landing view, reset question counter, reset score counter




### PubSub Event > Sender > Recipient > Channels > Message > Actions


| Event  | Sender  |  Recipent |Channel | Message  |Actions|
|---|---|---|---|---|---|
|  On Dom Load |  Landing View | Model  | LandingView:Page-Loaded  | 0  | Generate Factoid > Publish |
|   |   |   |   |   |   |
|   |   |   |   |   |  | |

On Dom Load > Landing > Model > LandingView:Page-Loaded >
