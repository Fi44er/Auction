const Home = () => {
    return (
        <div className="flex justify-center" style={{ height: "calc(100vh - 96px)" }}>
            <div className="flex items-center justify-center flex-col">
                <h1 className="text-8xl font-bold">Аукцион</h1>
                <p style={{ maxWidth: "726px" }} className="text-center text-2xl py-20">Повышаем ставки, разыгрываем страсти! Аукцион - место,
                    где каждая ставка имеет значение. Участвуй, побеждай,
                    обретай уникальные предметы и переживай настоящие эмоции!
                    Здесь каждый лот - это возможность сделать свою жизнь более
                    захватывающей. Присоединяйся к увлекательному миру аукционов прямо сейчас!</p>
                <button style={{ border: "5px solid #66FCF1" }} className="p-2 text-2xl">Перейти к лотам</button>
            </div>
        </div>
    )
}

export default Home
