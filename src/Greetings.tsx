import React from 'react';

type GreetingProps = {
  name: string;
  mark?: string;
}
function Greetings({ name, mark } : GreetingProps) {
  return (
    <div>
      Hello {name} {mark}
    </div>
  )
}
Greetings.defaultProps = {
  mark: '!'
}

export default Greetings;