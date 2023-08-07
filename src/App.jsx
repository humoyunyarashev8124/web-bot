// import { useState } from 'react'
import {getData} from './constants/db'
import './App.css'
import Card from './components/card/card'
import Cart from './components/cart/cart'
import { useState } from 'react';

const courses = getData();


const App = () => {

  const [cartItem, setCartItem] = useState([])

  const onAddItem = (item) => {
    const existItem = cartItem.find(c => c.id == item.id)
 

    if(existItem) {
      const newData = cartItem.map(c => c.id == item.id ? 
        {...existItem, quantity: existItem.quantity + 1} : c
        );
        setCartItem(newData)
    }else {
      const newData = [...cartItem, {...item, quantity: 1}]
      setCartItem(newData)
    }
  }

  const onRemoveItem = (item) => {
    const existItem = cartItem.find(c => c.id == item.id)
    console.log("ExistItem", existItem);

    if(existItem.quantity == 1) {
      const newData = cartItem.filter(c => c.id != existItem.id)
      console.log("delete_quantity", newData);
      setCartItem(newData)
    }else {
      const newData = cartItem.map(c => c.id == item.id ? 
        {...existItem, quantity: existItem.quantity - 1} : c
        );
        console.log("quantity", newData);
        setCartItem(newData)
    }
  }



  return (
    <>
      <h1 className='heading'>Zoo city</h1>
        <Cart />
      <div className="cards_container">
        {courses.map(course => (
          <Card 
          key={course.id} 
          course={course} 
          onAddItem={onAddItem} 
          onRemoveItem={onRemoveItem}
          />
        ))}
      </div>
    </>
  )
}

export default App


