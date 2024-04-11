import {MainScreen} from "@app/components/MainScreen";
import {ListFee} from "@app/components/ListFee";

export const Body = () => {
    return <section className="flex-col">
        <section className="main-screen">
            <MainScreen/>
        </section>
        <section className="list-fee-today">
            <ListFee/>
        </section>
    </section>
}