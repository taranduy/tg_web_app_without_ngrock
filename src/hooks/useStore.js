import { create } from "zustand";


export const useStore = create((set) => ({
    data: [],
    store: new Map(),
    storeSize: 0,
    sumPrice: 0,
    addToStore: (val) => {set((state) => {
        // if(state.store.has(val.id)){
            if(val.amount === 0){
                // console.log(state.store)
                state.store.delete(val.id)
            }else{
                state.store.set(val.id, val)
            }
            
            return ({store: state.store, storeSize: state.store.size, sumPrice: sumAllPrice(state.store)})
        // }else{
        //     state.store.i
        // }
        
    })},
    
}))


const sumAllPrice = (store) =>{
    let res = 0;
    store.forEach((val, key) => res = res + (val.price * val.amount))

    return res
}