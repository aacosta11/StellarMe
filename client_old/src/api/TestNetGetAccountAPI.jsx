import axios from "axios";
import { useEffect } from "react";
const TestnetGetAccountAPI = props => {
    const { response, pubKey } = props;
    useEffect(()=>{
        axios.get(`https://horizon-testnet.stellar.org/accounts/${pubKey}`)
            .then(res=>{
                response(res.data.balances[0].balance)
                console.log(res.data)})
            .catch(err=>{console.log(err)})
    },[pubKey])
    return null
}
export default TestnetGetAccountAPI;