
export interface IProduct {
    id: number,
    title: string,
    price: number,
    quantity: number,
    total: number,
    discountPercentage: number,
    discountedPrice: number,
    thumbnail: string
    description: string;
}

export interface IProductResponse {
    discountedTotal: number;
    id: number;
    products: IProduct[];
    total: number;
    totalProducts: number
    totalQuantity: number
    userId: number
}

export type TLoading = 'idle' | 'loading' | 'error'