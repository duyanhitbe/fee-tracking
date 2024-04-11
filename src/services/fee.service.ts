import {IFee} from "@app/models/fee.model";

export class FeeService {
    static async getAllFees(): Promise<IFee[]> {
        return fetch("/api/fee").then((response: Response) => {
            return response.json();
        })
    }

    static async getAllFeesToday(): Promise<IFee[]> {
        return fetch("/api/fee/today").then((response: Response) => {
            return response.json();
        })
    }

    static async createFee(data: { tagId: string, amount: number }): Promise<IFee> {
        const response = await fetch('/api/fee', {method: 'post', body: JSON.stringify(data)});
        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message);
        }

        return result;
    }
}