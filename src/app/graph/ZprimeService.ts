// test promises chain
export class ZprimeService {
    public getData(): Promise<any> {
        return new Promise((resolve) => {
            resolve('Init Text');
        });
    }

    public getMain() {
        this.getData()
            .then(this.firstFunc)
            .then(this.secondFunc)
            .then(this.threeFunc)
            .catch((error) => {
                console.log('Error: ' + error);
            });
    }

    private firstFunc(text) {
        console.log('From: ' + text);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('new Promise');
            }, 5000);
        });
    }

    private secondFunc(text) {
        console.log('From: ' + text);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject("result");
            }, 5000);
        });
    }

    private threeFunc(text) {
        console.log('End: ' + text);        
    }

    /* !!! SERVERICE REALIZATION !!! */

    public getObservedData(): Promise<any> {
        return this.sendHttpRequest()
            .then((response) => {
                // set cache
                // search in chache and return from there
                return new Promise((resolve, reject) => {
                    resolve([[123, 321], [123, 321]]);
                });
            });
    }

    private sendHttpRequest(): Promise<any> {
        // now it emulate http request
        return new Promise((resolve, reject) => {
            // or reject
            setTimeout(() => {
                resolve([[123, 321], [123, 321]]);                
            }, 5000);
        });
        // try set catch with reject (catch which for with status and reject msg for ui)
    }
}