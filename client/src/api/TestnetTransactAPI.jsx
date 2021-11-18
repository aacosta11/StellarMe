
import Button from "react-bootstrap/Button";
import { Networks } from "stellar-sdk";
const TestnetTransactAPI = props => {
    const StellarSdk = require("stellar-sdk");
    // destination account, in this case the user
    const { src, amnt, reciever, response } = props;
    // source account
    const srcPubKey = 'GBSN5LZY5BMBJ5J3QWRYY7WAOYG3DVRCK76PN4MR3E7GBQBINGO3SGTV';
    const srcSecKey = 'SD7MGXUGVAQVJVKCBZSK4GHGRQYS67X4F4KU6T7P7EAVP7Y3CMCDZTTN';
    const srcKeyPair = StellarSdk.Keypair.fromSecret(srcSecKey);
    // fetch base fee
    const fee = StellarSdk.BASE_FEE;    
    // instantiate horizon instance from stellar.org. the live network is "horizon.stellar.org"
    const server = new StellarSdk.Server("https://horizon-testnet.stellar.org");

    // || these are deprecated, refer to: https://git.io/fj9fG
    // StellarSdk.Network.usePublicNetwork();
    // StellarSdk.Network.useTestNetwork();


    const handleClick = e => {
        // check if destination account exists
        server.loadAccount(reciever)   
            .catch(err=>{
                if (err instanceof StellarSdk.NotFoundError) {
                    throw new Error("destination does not exist!");
                } else return err;
            })
            .then(()=>{
                return server.loadAccount(srcPubKey);
            })
            .then((srcAcct)=>{
                const transaction = new StellarSdk.TransactionBuilder(
                    srcAcct, { fee, networkPassphrase: Networks.TESTNET})
                    // add a 'payment' operation
                    .addOperation(StellarSdk.Operation.payment({
                        destination: reciever,
                        // need to specify 'native' so we can send Lumens
                        asset: StellarSdk.Asset.native(),
                        // Lumens are divisible by 7 decimal places. ex: 100.1234567
                        amount: amnt,
                    }),)
                    // transation is valid for only 1 minute
                    .setTimeout(60)
                    // to add memo:
                    // .addMemo(StellarSdk.Memo.text('Hello World!'))
                    .build();
                // source must sign the transaction with their keypair
                transaction.sign(srcKeyPair);
                
                return server.submitTransaction(transaction);
            })
            .then(res=>{
                response(amnt)
                console.log("Success! Results: ",res)})
            .catch(err=>{console.log("Something went wrong...", err)})
    }

    return (<>
        <Button onClick={handleClick}>Confirm</Button>
    </>)
}
export default TestnetTransactAPI;