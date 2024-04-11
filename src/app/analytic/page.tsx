"use client"
import {InWeekChart} from "@app/components/InWeekChart";
import {
    ArcElement,
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale, LineElement,
    PointElement,
    Title,
    Tooltip
} from 'chart.js';
import {MostInMonthChart} from "@app/components/MostInMonthChart";
import {InMonthChart} from "@app/components/InMonthChart";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    PointElement,
    LineElement
);

const AnalyticPage = () => {
    return <>
        <InWeekChart/>
        <MostInMonthChart />
        <InMonthChart />
    </>
}

export default AnalyticPage;