# Redux with React 

```sh
cd redux-zoo && npm i
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.


## Redux DevTools

The computers on campus should already have the Redux DevTools installed. If you'd like them on your own computer you can install the Firefox add-on [here](https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/) and the Chrome extension from [here](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd).


## Exercise

### Using Redux DevTools

Load up Redux DevTools and dispatch a few `ADD_WOMBAT` and `DEL_WOMBAT` actions to see what's going on. This screenshot illustrates how to dispatch actions:

![Dispatching actions using Redux dev tools](./screenshot1.png)


### Write some code

- Add an `UPDATE_WOMBAT` action to the reducer in `reducers/wombats.js`. Take your time to read through what the reducer currently does, and follow the established pattern to create your new action.

To update a wombat you will need to provide the **new** name of the wombat (so that it can be changed) but also the **old** name (so that the reducer can find the wombat that needs to be updated). To hold these two data items, your `payload` will need to be an object instead of a string.

Make sure you can dispatch this new action successfully from Redux DevTools. You'll dispatch this action from code in a later step.

#### Add a Wombat

- Add a simple input field to the page with a button to add a wombat.
(Which component should this input field be added to, `Wombat.jsx` or `Wombats.jsx`?)
- Add an event listener to handle the button's `onClick` event.
- Wire up this input so that it can `dispatch` an `ADD_WOMBAT` action to the store to add the wombat's name from the input box.
- **Important!** Make sure that:
  1. Ensure that the `ADD_WOMBAT` action works from Redux DevTools before making it work through your code.
  2. The correct action is being dispatched from your code on the click event. You could use a function to *produce* an action: these are called *action creators*.


#### Delete a Wombat

Add a delete button next to each of the wombats so they can be deleted:

- Modify the `Wombat.jsx` component to add a button next to each of the wombats.
- Add an event listener to handle an `onClick` event. Or alternatively you could put your input field in a form, and handle the form's onSubmit event.
- In the event listener, dispatch a `DEL_WOMBAT` action to the store to delete the wombat based on its name.
- It may be worth referring to the recommended problem solving steps above.


#### Update a Wombat

- Modify the `Wombat.jsx` component to add an input box and a button next to each of the wombats.
- Add an event to this new input/button upon submission.
- Looking back at your `UPDATE_WOMBAT` action, it expected both the **new** and **old** name of the wombat, so make sure that you can provide both of these values when you dispatch your action.
- `dispatch` the action to the store to change the name of the wombat.


#### Add a new type of animal

- Add a new reducer file for another animal. We already have `wombats`; how about `aardvarks`?
- In `reducers/index.js`, pass your new reducer file to `combineReducers`.
- Add some actions to the new reducer.
- Make a client-side component (or components) for your new animal.


## See also

When you're starting to get happier with this process, you could try reinforcing it with the [Getting Started with Redux](https://egghead.io/courses/getting-started-with-redux) video tutorials from Redux creator Dan Abramov.