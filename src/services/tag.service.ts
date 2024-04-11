import {ITag} from "@app/models/tag.model";

export class TagService {
    static async getAllTags(): Promise<ITag[]> {
        return fetch("/api/tag").then((response: Response) => {
            return response.json();
        })
    }

    static async createTag(data: { icon: string, title: string, type: string }): Promise<ITag> {
        const response = await fetch('/api/tag', {method: 'post', body: JSON.stringify(data)});
        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message);
        }

        return result;
    }
}