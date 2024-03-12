
export interface IProduct {
    "id": number,
    "title": string,
    "price": number,
    "quantity": number,
    "total": number,
    "discountPercentage": number,
    "discountedPrice": number,
    "thumbnail": string
}

// ! response

export type Loading = 'idle' | 'loading' | 'error'