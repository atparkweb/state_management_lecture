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
- What if we need to change our component tree structure?

## State Management: Redux
Redux solves the problems state components by moving shared state to a global store which can be accessed by any component in our application.

When state becomes global we solve the problem of lifting state, but we still need to make state changes predictable and without side effects.

To make state changes predictable we need to make some rules about when and how state can be mutated.
To reduce side effects, we can use pure functions.

### Redux Terms
- Action: An object that has
  - `type` property which describes an state changing event
  - fields with additional information about the event
    - e.g. `payload` or `context`

- Reducer: A function that receives the current state and an action
  1. Determines how state is updated
  2. Returns new state
  3. Pure functions
