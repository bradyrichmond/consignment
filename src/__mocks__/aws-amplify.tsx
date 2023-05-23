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

export enum Predicates {
    ALL
}