"use client"
import {HistoryItem} from "@app/components/HistoryItem";
import {useEffect, useState} from "react";
import {History, HistoryService} from "@app/services/history.service";
import {Loading} from "@app/components/Loading";

const HistoryPage = () => {
    const [history, setHistory] = useState<History[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        HistoryService.getListHistory().then((res) => {
            setHistory(res);
            setLoading(false);
        });
    }, []);

    return loading ? <div className="flex justify-center items-center mt-20"><Loading /></div> : <div className="mt-10 mx-5">
        {history.map(({id, date, amount}) => <HistoryItem key={id} date={new Date(date)} amount={amount}/>)}
    </div>
}

export default HistoryPage;