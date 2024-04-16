/* eslint-disable react/prop-types */

import { HelloWorld } from "./HelloWorld";

import classes from './Welcome.module.scss'

export function Welcome({ name, age }) {
  return (
    <div>
      {name ? <h2 className={classes.h2}>Welcome, <strong>{name}</strong>!</h2> : <HelloWorld /> }
      {Boolean(age) && <p>You are {age} years old.</p>}
      { age === 0 && <p>You are very young!</p> }

      { age > 18 && <p>You are {age} years old.</p>}
      { !!age && <p>You are {age} years old.</p>}
      { age > 18 && age < 65 && <p>You are {age} years old.</p>}
      { age > 18 && age < 65 && name === 'John' && <p>You are {age} years old.</p>}
    </div>
  );
}
