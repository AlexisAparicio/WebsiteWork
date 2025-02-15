import { XMarkIcon } from "@heroicons/react/24/outline"


const OrderCard=props=>{
    const {id,title,imageUrl,price} = props
    return (
        <div className="flex justify-between items-center p-4"> 
        <div className="flex items-center gap-2">
            <figure className="w-16 h-16">
                <img className="w-full h-full rounded-lg object-cover" src={imageUrl} alt={title} />
            </figure>
            <p className="text-sm font-light ">{title}</p>
        </div>
        <div className="flex items-center gap-2">
            <p className="text-lg font-medium">{price}</p>
            <XMarkIcon className="h-6 w-6 text-black cursor-pointer" ></XMarkIcon>
        </div>
        </div>
    )
}

export default OrderCard