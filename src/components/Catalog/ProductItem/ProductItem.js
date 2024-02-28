import { useStore } from '../../../hooks/useStore'
import { AddToStore } from '../../AddToStore/AddToStore'
import s from './ProductItem.module.scss'


export function ProductItemm({id, title, description, photo,  amount, price, initAmount}) {
    const addToStore = useStore((state) => state.addToStore)
    const handlerChange = (amount) =>{
        addToStore({title, amount, id, price, photo})
    }


    return (
        <article className={s.container_product}
            key={id}
        >
            <div className={s.container_img}>
                <img
                    //  height={300} 
                    //  width={300} 
                    src={photo} alt={title.toLowerCase() + '_img'} />
            </div>
            <div className={s.container_text}>
                <header className={s.container_text_header}>
                    <h1 className={s.title}>
                        {title}
                    </h1>

                    <span className={s.amount}>
                        {amount}
                    </span>
                </header>

                <p className={s.description}>
                    {description}
                </p>
            </div>
            <div className={s.container_price}>

                <h3 className={s.container_price__value}>
                    {price} р.
                </h3>
                <AddToStore maxAmount={amount} onChangeAmount={handlerChange} initAmount={initAmount}/>
            </div>


        </article>
    )
}