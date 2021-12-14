# React/Redux State Management

## No State Management: React Stateful Components

### When should state be lifted up?
When state must be shared across multiple child components

The parent component shouldn’t be concerned about state that
isn’t used by the parent component itself and isn’t shared across multiple child components.

Lifting state should be used to give components access to only the state they need.

### Problems with Stateful Components
When state has to be shared across multiple components, we must lift state to the parent component and pass state down through props.

As component hierarchies grow, this becomes problematic.
- How can we keep track of when and where state changes happen?
  - What happens when state tree becomes complex?
  - What if we share a code base with many developers working on shared components?
- What if the component hierarchy changes?

## State Management: Redux
Redux solves the problems state components by moving shared state to a global store which can be accessed by any component in our application.

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