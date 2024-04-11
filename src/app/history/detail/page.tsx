"use client"
import { useSearchParams } from 'next/navigation'
import {useEffect, useState} from "react";
import {IFee} from "@app/models/fee.model";
import {FeeService} from "@app/services/fee.service";
import {ListFee} from "@app/components/ListFee";
import {MainScreen} from "@app/components/MainScreen";
import {toLongDate} from "@app/helpers/format.helper";

const HistoryDetailPage = () => {
    const searchParams = useSearchParams()
    const startDate = searchParams.get('startDate')
    const [fees, setFees] = useState<IFee[]>([])
    const [loading, setLoading] = useState(true);
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        FeeService.getInDay(startDate ? new Date(startDate) : new Date()).then((res) => {
            setFees(res);
            setLoading(false);
            setAmount(res.reduce((a, b) => a + b.amount, 0));
        });
    }, [startDate]);

    return <div className="mt-20 mx-5">
        <MainScreen title={startDate ? toLongDate(new Date(startDate)) : "Spent in today"} isLoading={loading} amount={amount} />
        <ListFee fees={fees} loading={loading}/>
    </div>
};

export default HistoryDetailPage;