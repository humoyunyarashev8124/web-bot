import './cart.css'
import Button from '../button/button'

const cart = () => {
  return (
    <div className='cart__container'>
        <p>
            Umumiy narx: 120$
        </p>
        <Button title={'Buyurtma'} type={'checkout'} />
    </div>
  )
}

export default cart