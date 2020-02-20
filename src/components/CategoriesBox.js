import React from 'react'
import Dropdown from './Dropdown'

export default function CategoriesBox({categories, state}){
  return(
    <div className="categories info-box">
      <h4 style={{ color: state && '#707683' }}>
        categories
      </h4>
      <Dropdown list={categories} state={state} />
    </div>
  )
}