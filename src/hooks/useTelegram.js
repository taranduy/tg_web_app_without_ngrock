const tg = window.Telegram.WebApp


export function useTelegram() {
    const onClose = () => {
        tg.close()
    }

    const onToggleButton = () => {
        if(tg.MainButton.isVisible) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }
    
    const tgDataBuy = (items, queryId) => {
        try {
            fetch('https://5b11-94-25-225-177.ngrok-free.app/web_app/my_store', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({items, queryId})
            })
        } catch (e) {
            console.log(e)
        }
    }
    return {
        onClose,
        onToggleButton,
        tgDataBuy,
        tg,
        user: tg.initDataUnsafe?.user,
        queryId: tg.initDataUnsafe?.query_id,
    }
}