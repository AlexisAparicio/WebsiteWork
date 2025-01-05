import './style.css'
import {XCircleIcon} from '@heroicons/react/24/outline'

const ProductDetails = ()=>{
    return(
        <aside className='product-detail backdrop-blur-[16px] backdrop-saturate-[100%] bg-[#0000] bg-opacity-10border border-opacity-20 border-[#ffffff] flex flex-col fixed right-0 border border-black rounded-lg'>
            <div className='flex justify-between items-center p-4'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <XCircleIcon className="size-6 text-black-500" />


            </div>
        </aside>
    )
}

export default ProductDetails