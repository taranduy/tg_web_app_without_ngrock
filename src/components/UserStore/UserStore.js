import { useStore } from "../../hooks/useStore"
import { ProductItemm } from "../Catalog/ProductItem/ProductItem"







export const UserStore = () => {
    const {store, addToStore} = useStore((state) => state)

    const storeArr = mapToArray(store)
    console.log(storeArr)

    return(
        <section>
            <h1>Корзина</h1>
            {
                storeArr.length === 0
                ?
                <h1>
                    Ничего нет <br />
                    Добавьте что-то в карзину
                </h1>
                :
                <section>
                    {storeArr.map((item) => 
                        <ProductItemm
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        photo={item.photo}
                        amount={item.amount}
                        price={item.price}
                    />
                    )}
                </section>
            }
        </section>
    )
}


const mapToArray = (map) => {
    const res = []
    map.forEach((val, key) => res.push({...val, id: key}))
    return res;
}