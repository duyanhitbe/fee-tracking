import {Bar, Line} from 'react-chartjs-2';
import {randomInteger} from "@app/helpers/random";
import React, {useEffect} from "react";
import {StatisticService} from "@app/services/statistic.service";
import {Loading} from "@app/components/Loading";

export const InMonthChart = () => {
    const [labels, setLabels] = React.useState<string[]>([]);
    const [values, setValues] = React.useState<number[]>([]);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        StatisticService.getInMonth().then((res) => {
            setLabels(res.labels)
            setValues(res.values)
            setLoading(false);
        });
    }, []);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'Thu chi trong tháng',
            },
        },
    };

    const data = {
        labels,
        datasets: [
            {
                data: values,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: '#ffc3c3',
            },
        ],
    };

    return loading ? <div className="flex justify-center items-center mt-10"><Loading /></div> : <Bar options={options} data={data} className="px-5 mt-5"/>;
}