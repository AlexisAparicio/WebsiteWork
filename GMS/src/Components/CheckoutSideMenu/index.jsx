import { useContext } from 'react'
import {XCircleIcon} from '@heroicons/react/24/outline'
import { ShoppingCartContext } from '../../Context'
import './style.css'

const CheckoutSideMenu = ()=>{
    const context = useContext(ShoppingCartContext)
    return(
        <aside 
        className={`${context.isCheckoutSideMenuOpen ? 'flex':'hidden'} checkout-side-menu backdrop-blur-[16px] backdrop-saturate-[100%] bg-[#0000] bg-opacity-10border border-opacity-20 border-[#ffffff] flex-col fixed right-2 border border-black rounded-lg p-4`}>
            <div className='flex justify-between items-center p-4'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <XCircleIcon className="cursor-pointer size-6 text-black-500 " onClick={()=>context.closeProductDetail()}  />

            </div>
            <p className='flex flex-col p-6 justify-between'>
                <span className='font-medium text-2xl mb-2'>${context.productsToShow.price}</span>
                <span className='font-medium text-md'>${context.productsToShow.title}</span>
                <span className='font-light text-sm'>${context.productsToShow.description}</span>
            </p>
        </aside>
    )
}

export default CheckoutSideMenu