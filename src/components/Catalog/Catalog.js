import { useEffect, useState } from 'react'
import s from './Catalog.module.scss'
import { ProductItemm } from './ProductItem/ProductItem'
import { useStore } from '../../hooks/useStore'
import { useTelegram } from '../../hooks/useTelegram'

const products = [
    {
        id: 'asasas131',
        title: '0Гвоздики',
        amount: 12,
        description: 'Гвоздики ывлвылыв лсллдвылсл ыдвсл \n фвлзлвффлвлддж',
        photo: 'https://www.roza4u.ru/image/cache/catalog/golubaya-laguna/cvety-v-korobke-zima-v-japonii-700x700.jpg',
        price: 143
    },
    {
        id: 'asasas1321',
        title: '1Гвоздики',
        amount: 12,
        description: 'Гвоздики ывлвылыв лсллдвылсл ыдвсл \n фвлзлвффлвлддж',
        photo: 'https://www.roza4u.ru/image/cache/catalog/golubaya-laguna/cvety-v-korobke-zima-v-japonii-700x700.jpg',
        price: 143
    },
    {
        id: 'asasas1331',
        title: '2Гвоздики',
        amount: 12,
        description: 'Гвоздики ывлвылыв лсллдвылсл ыдвсл \n фвлзлвффлвлддж',
        photo: 'https://www.roza4u.ru/image/cache/catalog/golubaya-laguna/cvety-v-korobke-zima-v-japonii-700x700.jpg',
        price: 143
    },
    {
        id: 'asasas1341',
        title: '3Гвоздики',
        amount: 12,
        description: 'Гвоздики ывлвылыв лсллдвылсл ыдвсл \n фвлзлвффлвлддж',
        photo: 'https://www.roza4u.ru/image/cache/catalog/golubaya-laguna/cvety-v-korobke-zima-v-japonii-700x700.jpg',
        price: 143
    },
    {
        id: 'asasas1351',
        title: '4Гвоздики',
        amount: 12,
        description: 'Гвоздики ывлвылыв лсллдвылсл ыдвсл \n фвлзлвффлвлддж',
        photo: 'https://www.roza4u.ru/image/cache/catalog/golubaya-laguna/cvety-v-korobke-zima-v-japonii-700x700.jpg',
        price: 143
    },
    {
        id: 'asasas1361',
        title: '5Гвоздики',
        amount: 12,
        description: 'Гвоздики ывлвылыв лсллдвылсл ыдвсл \n фвлзлвффлвлддж',
        photo: 'https://www.roza4u.ru/image/cache/catalog/golubaya-laguna/cvety-v-korobke-zima-v-japonii-700x700.jpg',
        price: 143
    }
]

const categories = [
    {
        title: 'Лепестки',
        icon: '🌵'
    },
    {
        title: 'Корзины',

        icon: '🎄'
    },
    {
        title: 'Деревья',

        icon: '🌲'
    },
    {
        title: 'Букеты',
        icon: '🌴'
    },
]


export const Catalog = () => {
    const [showCategories, setShowCategories] = useState(false)
    const { tg, queryId } = useTelegram();
    const { store, storeSize, sumPrice } = useStore((state) => state)
    const search = (val) => {
        console.log(val)
    }
    // useEffect(() => {
    //     console.log(showCategories)
    // }, [showCategories])
    // useEffect(() => {
    //     console.log(store)
    // }, [store])
    if (storeSize > 0) {
        // console.log('Open')
        tg.MainButton.hide();
    } else {
        // console.log('HIDE')
        tg.MainButton.show();
        tg.MainButton.setParams({
            text: `Купить ${sumPrice} р.`
            //Возможность менять валюту через админку
        })

    }
    return (
        <section className={s.container}>
            <header className={s.header_categories}>
                <input
                    type='text'
                    onChange={(e) => search(e.target.value)}
                    placeholder='Поиск'
                />

                {
                    store.size > 0
                    &&

                    <span>
                        Корзина : {storeSize} Цена: {sumPrice}
                    </span>
                }

                <button
                    onClick={() =>
                    // setShowCategories(!showCategories)
                    { console.dir(store) }
                    }>
                    категории
                </button>
            </header>

            {
                showCategories
                    ?
                    // 'sds'
                    <main>
                        {categories.map(cat =>
                            <div
                                // onClick={}
                                className={s.cat_item}
                                key={cat.title}>
                                <div>{cat.icon}</div>
                                <div>{cat.title}</div>
                            </div>)}
                    </main>
                    :
                    // 'aa'
                    <main>
                        {products.map((pr) =>
                            <ProductItemm
                                id={pr.id}
                                title={pr.title}
                                description={pr.description}
                                photo={pr.photo}
                                amount={pr.amount}
                                price={pr.price}
                            />
                        )}
                    </main>
            }
        </section>
    )
}