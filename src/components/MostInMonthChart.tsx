import {Pie} from 'react-chartjs-2';
import React, {useEffect} from "react";
import {StatisticService} from "@app/services/statistic.service";
import {Loading} from "@app/components/Loading";

export const MostInMonthChart = () => {
    const [labels, setLabels] = React.useState<string[]>([]);
    const [values, setValues] = React.useState<number[]>([]);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        StatisticService.getMostInMonth().then((res) => {
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
                text: 'Những khoản chi nhiều nhất trong tháng',
            },
        },
    };

    const data = {
        labels,
        datasets: [
            {
                label: 'Đã chi',
                data: values,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderWidth: 1,
            },
        ],
    }

    return loading ? <div className="flex justify-center items-center mt-10"><Loading/></div> :
        <div className="w-full flex justify-center items-center">
            <div className="w-[70%]">
                <Pie data={data} options={options} className="mt-5"/>
            </div>
        </div>;
}