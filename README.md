# Mars Rovers

This project is a `react` based web application compliant with a code assessment provided by [number8](https://www.number8.com/)
for the client [DealerOn](https://www.dealeron.com/). It uses `redux` to handle internal state management and `react-redux`
to obtain desired sections of our state three. However, the solution did not require the uses of states.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the
[Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Problem
NASA intends to land robotic rovers on Mars to explore a particularly curious-looking plateau. The rovers must
navigate this rectangular plateau in a way so that their onboard cameras can get a complete image of the
surrounding terrain to send back to Earth.<br/>
A simple two-dimensional coordinate grid is mapped to the plateau to aid in rover navigation. Each point on the grid is
represented by a pair of numbers X Y which correspond to the number of points East or North, respectively, from the
origin. The origin of the grid is represented by 0 0 which corresponds to the southwest corner of the plateau. 0 1 is
the point directly north of 0 0, 1 1 is the point immediately east of 0 1, etc. A rover’s current position and heading are
represented by a triple X Y Z consisting of its current grid position X Y plus a letter Z corresponding to one of the four
cardinal compass points, N E S W. For example, 0 0 N indicates that the rover is in the very southwest corner of the
plateau, facing north.<br/>
NASA remotely controls rovers via instructions consisting of strings of letters. Possible instruction letters are L, R,
and M. L and R instruct the rover to turn 90 degrees left or right, respectively (without moving from its current spot),
while M instructs the rover to move forward one grid point along its current heading.<br/>
Your task is to write an application that takes the test input (instructions from NASA) and provides the expected output
(the feedback from the rovers to NASA). Each rover will move in series, i.e. the next rover will not start moving until
the one preceding it finishes.

### Example

#### Input
Assume the southwest corner of the grid is 0,0 (the origin). The first line of input establishes the exploration grid 
bounds by indicating the coordinates corresponding to the northeast corner of the plateau.<br/>
Next, each rover is given its instructions in turn. Each rover’s instructions consists of two lines of strings. The 
first string confirms the rover’s current position and heading. The second string consists of turn / move instructions.<br/>

#### Output
Once each rover has received and completely executed its given instructions, it transmits its updated position and 
heading to NASA.

**Test input**<br/>
5 5<br/>
1 2 N<br/>
LMLMLMLMM<br/>
3 3 E<br/>
MMRMMRMRRM<br/>

**Test output**<br/>
1 3 N<br/>
5 1 E<br/>

## Installation
To install peer and dev dependencies simply run:

```bash
npm install
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!
