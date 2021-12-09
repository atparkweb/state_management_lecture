# Lifting State Up or Passing Down

## When should state be lifted up?

When state must be shared across multiple child components

The parent component shouldn’t be concerned about state that
isn’t used by the parent component itself and isn’t shared across multiple child components.

Lifting state should be used to give components access to only the state they need.

## Setting State
Set state functions from `useState` are asynchronous operations in React. This is fine for scalar values but what about objects?

If the properties being set are stale, this could lead to bugs.