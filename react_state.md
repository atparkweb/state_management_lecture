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
- How can we keep track of where state changes happen?
- How can we know when state changes happen?
  - Note: `useState` setter functions are asynchronous
- What if we need to change our component tree structure?

## State Management: Redux
Redux solves the problems state components by moving shared state to a global store which can be accessed by any component in our application.

When state becomes global, we solved the need for centralized shared state, but we did not make the state changes any easier to track.

When we work solo, it's not too difficult to keep track of where state changes happen across component hierarchy. What happens when are state becomes complex, or if we share a code base with many developers?

To make state changes predictable we need to make some rules about when and how state can be mutated.

### Redux Terms
- Action: An object that has
  - `type` property which describes an state changing event
  - fields with additional information about the event
    - e.g. `payload` or `context`

- Reducer: A function that receives the current state and an action
  1. Determines how state is updated
  2. Returns new state
