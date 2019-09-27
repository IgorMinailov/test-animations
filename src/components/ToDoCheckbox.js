import React from 'react';
import {Motion, spring} from 'react-motion';



function ToDoCheckbox({active}) {

  const totalLength = 79.7977294921875
  const circleLength = 0
  const checkedLength = -79.7977294921875

  const defaultSpring = totalLength
  const circleSpring = spring(circleLength, {stiffness: 30, damping: 12})
  const checkedSpring = spring(checkedLength, {stiffness: 100, damping: 16.8})

  return (
    <svg className='svgContainer' viewBox="0 0 30 30" >
      <g className='svgInner'>
        <Motion
          defaultStyle={{offset: defaultSpring}}
          style={{offset: !active ? circleSpring : checkedSpring}}
        >
          {({ offset }) =>
            <React.Fragment>
              <path
                strokeDasharray={`${totalLength} ${totalLength}`}
                strokeDashoffset={offset}
                d="M27 15C27 -1.5, 3 -1.5, 3 15S27 31.5, 27 15"
              />
              {active && <path d="M7 12L15 22L25 5" />}
            </React.Fragment>
          }
        </Motion>
      </g>
    </svg>
  )
}

export default ToDoCheckbox;