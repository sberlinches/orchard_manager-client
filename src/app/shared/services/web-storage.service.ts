/**
 * WebStorageService
 *
 * This class retrieves, stores and deletes data from the sessionStorage and localStorage.
 */
export class WebStorageService {

    /**
     * Retrieves the object from storage
     * This method will retrieve the object from session preferably.
     *
     * @param {string} key The key which the data will be retrieved.
     * @returns {any} The data retrieved
     */
    public getItem(key: string): any {

        let storage = (sessionStorage.getItem(key))? sessionStorage.getItem(key): localStorage.getItem(key);
        return JSON.parse(storage);
    }

    /**
     * Puts the object into storage.
     * Depending on the isPersistent flag the object will be stored in localStorage or sessionStorage.
     * localStorage persists until is explicitly deleted.
     * sessionStorage is available until the window or tab is closed.
     *
     * @param {string} key The key which the data will be stored
     * @param {any} data The data to be stored
     * @param {boolean} isPersistent Indicates whether the data is going to persist until is explicitly deleted, or not.
     */
    public setItem(key: string, data: any, isPersistent: boolean = false): void {

        if(isPersistent) {
            localStorage.setItem(key, JSON.stringify(data));
        } else {
            sessionStorage.setItem(key, JSON.stringify(data));
        }
    }

    /**
     * Removes the object from storage
     * This method does not distinguish session or local, so it will delete the key from both.
     *
     * @param {string} key The key which the data will be deleted
     */
    public removeItem(key: string): void {

        sessionStorage.removeItem(key);
        localStorage.removeItem(key);
    }

    /**
     * Clears all objects from storage.
     * This method does not distinguish session or local, so it will clear both.
     */
    public clear(): void {

        sessionStorage.clear();
        localStorage.clear();
    }
}