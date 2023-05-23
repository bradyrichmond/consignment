export const DataStore = {
    save:  (model: any) => {
        return Promise.resolve(model);
    },
    query: (model: any, options: any) => {
        return [];
    }
}

export const Auth = {
    currentUserInfo: () => {
        return {
            username: 'Test'
        }
    }
}

export const API = {
    post: (api: string, endpoint: string) => {
        if (api === 'stripeApi') {
            if (endpoint === '/create-payment-intent') {
                return { clientSecret: 'testSecret' };
            }
        }
    }
}

export enum Predicates {
    ALL
}