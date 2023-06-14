export const ROUTES = {
    HOME: '/',
    CART: '/cart',
    CATEGORY: '/categories/:id',
    PRODUCT: '/products/:id',
}

export const buildUrl = (url, params) => {
    let urlWithParams = url;

    Object.entries(params).forEach(([key, value], i) => {
        const sign = !i ? "?" : "&";
        urlWithParams += `${sign}${key}=${value}`;
    });

    return urlWithParams;
};


export const BASE_URL = 'https://api.escuelajs.co/api/v1'




