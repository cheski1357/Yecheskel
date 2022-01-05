import React from 'react'

export default function ListComponent(props) {
  const { title, items } = props;

  return (
    <>
      <h4>{title}</h4>
      <ul className="bulletless">
        {items.map(item => <li key={item.id || item.cities || item}>{item.cities || item}</li>)}
      </ul>
    </>
  )
}