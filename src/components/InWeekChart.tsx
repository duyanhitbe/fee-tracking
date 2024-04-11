import React, {useEffect} from 'react';
import {Bar, Line} from 'react-chartjs-2';
import {randomInteger} from "@app/helpers/random";
import {StatisticService} from "@app/services/statistic.service";
import {Loading} from "@app/components/Loading";


export const InWeekChart = () => {
    const [labels, setLabels] = React.useState<string[]>([]);
    const [values, setValues] = React.useState<number[]>([]);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        StatisticService.getInWeek().then((res) => {
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
                text: 'Thu chi trong tuần',
            },
        }
    };

    const data = {
        labels,
        datasets: [
            {
                label: '',
                data: values,
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
            },
        ],
    };

    return loading ? <div className="flex justify-center items-center mt-10"><Loading /></div> : <Line options={options} data={data} className="px-2 mt-5"/>;
}