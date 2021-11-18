import { useEffect, useState } from "react";
import StellarSdk from "stellar-sdk";
const TestnetGetTransactionsComp = props => {
    const [acct,setAcct] = useState({});
    const server = new StellarSdk.Server("https://horizon-testnet.stellar.org");
    useEffect(()=>{
        server.transactions()
            .forAccount('GDQI2XSDRTOQPKUQATVKZHZ3HZNN33KRSKG5M2M4F7SW3XCU54PI7H6O')
            .call().then(function (r) { 
                
                console.log(r) });
    }, [])
    return null
}
export default TestnetGetTransactionsComp;