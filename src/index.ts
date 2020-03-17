import { Handler, Context, Callback } from 'aws-lambda'

export const hello: Handler = (event: any, context: Context, callback: Callback) => {
    const hw: string = 'Hello World';
    console.log(hw);
    callback(null, {
        message: hw
    });
};
