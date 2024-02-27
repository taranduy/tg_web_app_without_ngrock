import { useEffect, useState } from 'react'
import s from './AddToStore.module.scss'



export const AddToStore = ({onChangeAmount, maxAmount}) =>{

    // const maxAmount = maxAmount
    // let amountVal = 0
    const [amount, setAmount] = useState(0)
    // const handlerChange = () =>{
    //     onChangeAmount(amount)
    // }
    // useEffect(() => {
    //     if (amount > 0) {
    //         onChangeAmount(amount)
    //     }
        
    // }, [amount])
    const increase = () =>{
        // amountVal++;
        
        onChangeAmount(amount + 1)
        setAmount(amount + 1)
    }
    const decrease = () => {
        // amountVal--;
        onChangeAmount(amount - 1)
        setAmount(amount - 1)
    }
    return(
        <div className={s.container}>
            <button 
            disabled={amount >= maxAmount}
            onClick={() => increase()}>
                +
            </button>
            <div className={s.value}>
                { amount }
            </div>
            <button onClick={() => decrease()} disabled={ amount > 0 ? false : true}>
                -
            </button>
        </div>
    )
}