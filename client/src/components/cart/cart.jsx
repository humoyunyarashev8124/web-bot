import './cart.css'
import Button from '../button/button'
import { totalPrice } from '../../units/total-price'

const cart = ({cartItem, onCheckOut}) => {
 
  return (
    <div className='cart__container'>
        <p>
            Umumiy narx: {totalPrice(cartItem).toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                })}
        </p>
        <Button 
         title={`${cartItem.length == 0 ? "Buyurtma" :  "to'lov"}`}
         disabled={cartItem.length == 0 ? true : false} 
         type={'checkout'}
         onClick={onCheckOut} />
    </div>
  )
}

export default cart