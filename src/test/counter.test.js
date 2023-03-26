import { expect } from 'chai';
import { increment, decrement, reset } from '../src/features/counterSlice';

describe('counter slice', () => {
  it('should increment the counter value', () => {
    const initialState = { value: 0 };
    const newState = { value: 1 };
    const action = increment();

    expect(newState).to.eql(counterReducer(initialState, action));
  });

  it('should decrement the counter value', () => {
    const initialState = { value: 1 };
    const newState = { value: 0 };
    const action = decrement();

    expect(newState).to.eql(counterReducer(initialState, action));
  });

  it('should reset the counter value', () => {
    const initialState = { value: 1 };
    const newState = { value: 0 };
    const action = reset();

    expect(newState).to.eql(counterReducer(initialState, action));
  });
});