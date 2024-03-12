
export interface ICard {
    "id": number,
    "title": string,
    "price": number,
    "description": string,
    "category": string,
    "image": string,
    "rating": {
        "rate": number,
        "count": number
    }
}

export type Loading = 'idle' | 'loading' | 'error'