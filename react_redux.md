# React/Redux State Management

## No State Management: React Stateful Components

A component shouldn’t contain state that
it doesn't use or render.

### When should state be lifted up?
When state must be passed from a child component to a parent.

Example:
A form component with input children components.
The form needs the input text in the children to submit the form data.

### Problems with Stateful Components
When state has to be shared across multiple components, we must lift state to the parent component and/or pass state down, through props, to a different child component.

As component hierarchies grow, this becomes problematic.
Why?

- How can we keep track of when and where state changes happen?
  - What happens when the state tree becomes complex?
  - What if we share a code base with many developers working on shared components?
- What if the component hierarchy needs to change?

## State Management: Context + Reducers
Through the Context API we can set a top level Provider component that holds the state.
Anywhere down the component hierarchy, we can define a Consumer component to use that state from the provider.
This makes the state being passed down the component tree only visible to the components that use or render the state.
Note: The state is still passed down through each component implicitly, but it's only accessible by Consumers.

Now that our state is broader in scope, we need to be more careful in how we update it.
State changes are all happening asynchronously since changes can happen at any time.
Asynchronous means we cannot guarantee the order of the changes, so how do we know the changes happen in the "correct" order?
Well, we can't! So a safer way to update state is with pure functions. We can define a state updating function that takes the
previous state and changes as arguments and returns a brand new state.

```javascript
function pureStateChange(oldState, changes) {
    const newState = createNewState(oldState, changes);
    return newState;
}

// the above function signature is:
(state, change) => newState
// it turns two arguments into one, like REDUCE:
_.reduce(
    (arg1, arg2) => result,
    initialArg
);
```

So let's call this a *Reducer*.
There is a React hook called `useReducer` that let's us create functions inside our components to safely update state.

**Warning** If the Context data changes frequently, it may trigger unnecessary re-renders in the component tree, since
state is still passed down to all components. It's kind of sneaking it's way down through all the components.

So is there a better solution?

## State Management: Redux
Redux solves the problems of stateful components by moving shared state to a global store which can be accessed by any component in our application.

When state becomes global we no longer have to pass state around through props, but we still need to make state changes predictable and without side effects.
Redux turns our state into a *single immutable state tree*. The state tree is read-only.

Whenever we want to change the state tree, we use a pure function that takes
the current state and returns a new state tree.

### Redux Terms
- Action: An object that has
  - `type` property which describes an state changing event
  - fields with additional information about the event
    - e.g. `payload` or `context`
	
- Action Creator: A function that generalizes action creation so we don't have to write
  out custom actions.

- Reducer: A function that receives the current state and an action
  1. Determines how state is updated
  2. Returns new state
  3. Pure functions

### Redux: Actions
If we replace React component state with Redux, the component just needs to
dispatch an action with the data that we want to change. The component doesn't
know HOW the state is updated, it only needs to dispatch changes and the global store
handles the rest.

Actions also define contracts around how state can be updated.

Example:

    ```
    // A Redux action
    {
      type: "ADD_USER",
      payload: {
        name: "Andy"
      }
    }
    ```

### Redux: Action Creators

It's kind of a pain to write out our actions objects for each reducer:

```javascript
store.dispatch({ type: "ADD_USER", payload: { name: "Akuma" }});
store.dispatch({ type: "ADD_USER", payload: { name: "Ryu" }});
store.dispatch({ type: "ADD_USER", payload: { name: "Dan" }});
```

With action creators, we can make it a bit more DRY (Don't Repeat Yourself):

```javascript
// This is an Action Creator.
// It just generates Action objects for us.
function addUserAction(name) {
    return {
        type: "ADD_USER",
        payload: {
            name
        }
    }
}

store.dispatch(addUserAction("Akuma"));
store.dispatch(addUserAction("Ryu"));
store.dispatch(addUserAction("Dan"));
```

Of course, you don't need to use action creators, but it's easier to read and less error prone.
