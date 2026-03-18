import React from 'react';
import {ManType} from "../destructuring/07.test";

type Props = {
  title: string
  man: ManType
  food: string[]
  car: {model: string}
}

export const ManComponent = (props: Props) => {
  const {
    title,
    man: {
      name
    },
    ...restProps
  } = props

  return (
    <div>
      <h1>{title}</h1>
      <hr/>
      <div>
        {name}
      </div>
      <div>
        {restProps.car.model}
      </div>
    </div>
  );
};
