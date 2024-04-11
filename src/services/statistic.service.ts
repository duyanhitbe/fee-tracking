type StatisticChart = {
    labels: string[];
    values: number[]
}

export class StatisticService {
    static async getInTotalMonth(): Promise<number> {
        const response = await fetch("/api/statistic/month");
        const res = await response.json();
        return res.total;
    }
    static async getInWeek(): Promise<StatisticChart> {
        const response = await fetch("/api/statistic/chart/in-week");
        return response.json();
    }
    static async getInMonth(): Promise<StatisticChart> {
        const response = await fetch("/api/statistic/chart/in-month");
        return response.json();
    }
    static async getMostInMonth(): Promise<StatisticChart> {
        const response = await fetch("/api/statistic/chart/most-in-month");
        return response.json();
    }
}