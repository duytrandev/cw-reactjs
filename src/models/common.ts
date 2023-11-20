interface Pagination {
    limit: number | string,
    page: number | string,
    total: number | string
}

export interface ListReponse<T> {
    list: T[],
    pagination: Pagination
}