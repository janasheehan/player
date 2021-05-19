import * as React from "react"

export const Next = (props) => {
  return (
    <svg
      width={131}
      height={147}
      viewBox="0 0 131 147"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{"next"}</title>
      <g fillRule="evenodd">
        <path d="M117 73.5L0 147V0zM126 0h5v147h-5z" />
      </g>
    </svg>
  )
}

export const Play = (props) => {
  return (
    <svg
      width={190}
      height={239}
      viewBox="0 0 190 239"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{"play"}</title>
      <path
        d="M189.714 119.714l-189.428 119v-238z"
        fillRule="evenodd"
      />
    </svg>
  )
}

export const Pause = (props) => {
  return (
    <svg
      width={133}
      height={238}
      viewBox="0 0 133 238"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{"pause"}</title>
      <g fill="#D8D8D8" fillRule="evenodd">
        <path d="M83 0h50v238H83zM0 0h50v238H0z" />
      </g>
    </svg>
  )
}

export const Prev = (props) => {
  return (
    <svg
      width={132}
      height={147}
      viewBox="0 0 132 147"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{"prev"}</title>
      <g  fillRule="evenodd">
        <path d="M0 0h5v147H0zM15 73.5L132 0v147z" />
      </g>
    </svg>
  )
}

export const Shuffle = (props) => {
  return (
    <svg
      width={256}
      height={179}
      viewBox="0 0 256 179"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>shuffle</title>
      <g fillRule="evenodd">
        <path
          d="M239.8 35.846c0 2.5-1.2 4.9-3.2 6.5l-28.6 23.3c-1.1.9-2.5 1.4-3.8 1.4-1.8 0-3.5-.8-4.7-2.2-2.1-2.6-1.7-6.4.9-8.4l17.8-14.4h-6.4c-29.2 0-56.9 11.4-74 30.5-1.2 1.3-2.8 2-4.5 2-1.4 0-2.8-.5-4-1.5-2.5-2.2-2.7-6-.5-8.5 19.3-21.6 50.3-34.5 82.9-34.5h6.4l-17.8-14.4c-2.6-2.1-3-5.8-.9-8.4 2.1-2.6 5.9-3 8.5-.9l28.6 23.2c2.1 1.5 3.3 3.8 3.3 6.3z"
          fillRule="nonzero"
        />
        <path
          d="M239.8 139.31c0 2.43-1.2 4.763-3.2 6.319L208 168.182c-1.1.875-2.4 1.264-3.8 1.264-1.8 0-3.5-.778-4.7-2.139-2.1-2.527-1.7-6.221.9-8.166l17.8-13.999h-6.4c-43.7 0-82.8-22.262-97.2-55.412C102 60.955 67.3 41.512 28.3 41.512H6.6c-3.3 0-6-2.625-6-5.833s2.7-5.833 6-5.833h21.7c43.8 0 82.8 22.262 97.3 55.412 12.6 28.873 47.2 48.219 86.2 48.219h6.4l-17.8-14c-2.6-2.04-3-5.735-.9-8.165 2.1-2.528 5.9-2.917 8.5-.875l28.6 22.554c2 1.652 3.2 3.985 3.2 6.319z"
          fillRule="nonzero"
        />
        <path
          d="M28.3 148.446H6.6c-3.3 0-6-2.7-6-6s2.7-6 6-6h21.7c29.2 0 56.9-11.4 74-30.5 2.2-2.5 6-2.7 8.5-.5s2.7 6 .5 8.5c-19.4 21.6-50.4 34.5-83 34.5z"
          fillRule="nonzero"
        />
        <path d="M255.952 37.112l-59 37.064V.048zM255.952 141.112l-59 37.064v-74.128z" />
      </g>
    </svg>
  )
} 