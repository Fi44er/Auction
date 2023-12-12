const Reg = () => {
    return (
        <div className="flex justify-center" style={{ height: "calc(100vh - 96px)" }}>
            <div className="flex items-center justify-center flex-col w-full">
                <form action="/auth" style={{ border: "5px solid #66FCF1" }} className="p-10 flex flex-col gap-y-4 w-1/4">
                    <h1 className="text-3xl">Регестрация</h1>

                    <div className="flex flex-col">
                        <label htmlFor="FIO" className="font-light text-sm pb-1">ФИО</label>
                        <input className="p-2 outline-none text-slate-950" type="text" placeholder="ФИО" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="Email" className="font-light text-sm pb-1">Почта</label>
                        <input className="p-2 outline-none text-slate-950" type="text" placeholder="Почта" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="Password" className="font-light text-sm pb-1">Пароль</label>
                        <input className="p-2 outline-none text-slate-950" type="password" placeholder="Пароль" />
                    </div>
                    <button style={{ background: "#1F2833" }} className="p-2 mt-8">Зарегестрироваться</button>
                </form>
            </div>
        </div >
    )
}

export default Reg