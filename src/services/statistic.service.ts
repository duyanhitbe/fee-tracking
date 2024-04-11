export class StatisticService {
    static async getInMonth(): Promise<number> {
        const response = await fetch("/api/statistic/month");
        const res = await response.json();
        return res.total;
    }
}