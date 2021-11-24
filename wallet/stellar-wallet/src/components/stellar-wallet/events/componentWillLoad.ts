import { handleError } from "@services/error";
import { get } from "@services/storage";

export default async function componentWillLoad() {
    try {
        let keystore = await get("keyStore");

        this.error = null;

        if (keystore) {
            // keystore = atob(keystore);
            keystore = Buffer.from(keystore, 'base64');

            // const { publicKey } = JSON.parse(atob(JSON.parse(keystore).adata));
            const { publicKey } = JSON.parse((JSON.parse(keystore).adata).toString('base64'));

            this.account = {
                publicKey,
                keystore,
            };
        }
    } catch (err) {
        this.error = handleError(err);
    }
}