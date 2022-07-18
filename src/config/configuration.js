export let Configuration = Object.freeze({
    port: (process.env.PORT),
    mongoUrl: (process.env.MONGO_URL)
});

export const obj = {
    id: {required: true, string: true, in: ['body']},
    name: {required: true, regex: '', in: ['body']}
};