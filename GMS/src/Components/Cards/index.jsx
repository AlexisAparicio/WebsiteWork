import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { PlusCircleIcon} from '@heroicons/react/24/outline'

const Card=(data)=>{
    const context = useContext(ShoppingCartContext)

    const showProductDetail = (ProductDetail) => {
        context.openProductDetail()
        context.setProductsToShow(ProductDetail)
    }

    const addProductstoCart =(event,ProductData)=>{
        event.stopPropagation()
        context.setCount(context.count+1)
        context.setCartProducts([...context.cartProducts,ProductData])
        context.openCheckoutSideMenu()
        context.closeProductDetail()
        console.log('Cart:',context.cartProducts)
    }

    return(
        <div 
        className="backdrop-blur-[16px] backdrop-saturate-[100%] bg-[#ffffff] bg-opacity-10border border-opacity-20 border-[#ffffff]"
        onClick={()=>showProductDetail(data.data)}>
        {/* <div className="bg-white cursor-pointer w-56 h-60 rounded-lg"> */}
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xm m-2 px-3 py-0.5">{data.data.category.name}</span>
                <img className='w-full h-full object-cover rounded-lg' src={data.data.images[0]} alt={data.data.title} />
                <button 
                onClick={(event)=>addProductstoCart(event,data.data)}
                className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
                >
                <PlusCircleIcon className="size-6 text-black-500" />
                </button>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-normal">{data.data.title}</span>
                <span className="text-sm font-bold">${data.data.price}</span>
            </p>
        </div>
    )
}

export default Card