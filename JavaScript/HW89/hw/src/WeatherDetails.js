import React from 'react'
import ListComponent from './ListComponents';

export default function WeatherDetails(props) {
  const { name , ingredients, directions } = props.recipe;
  return (
    <>
      <h2>{name}</h2>
      <ListComponent title="ID" items={id} />
      <ListComponent title="zip" items={zip} />
    </>
  )
}