export type History = {
    id: string;
    date: string;
    amount: number;
}

export class HistoryService {
    static async getListHistory(): Promise<History[]> {
        return fetch("/api/history").then((response: Response) => {
            return response.json();
        })
    }
}