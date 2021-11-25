import axios from "axios";
import StellarSdk from "stellar-sdk";
import Button from "react-bootstrap/Button";
export default props => {
    const { response } = props;
    const server = new StellarSdk.Server("https://horizon-testnet.stellar.org"); // connect to Horizon API

    // pair.secret();
    // pair.publicKey();
    
    // console.log(pair.canSign());
    // console.log('public: ')
    // console.log(pair.publicKey());
    // console.log('secret: ')
    // console.log(pair.secret());
    const request = () => {
        const pair = StellarSdk.Keypair.random(); // generate a new key pair
        console.log("public key: ",pair.publicKey());
        console.log("private key: ",pair.secret());
        // testnet faucet; funds account with 10000 XLM and 
        axios.get(`https://friendbot.stellar.org?addr=${encodeURIComponent( 
            pair.publicKey(),
        )}`)
            .then(res => {
                response({'public':pair.publicKey(),'private':pair.secret()}) // send response to parent component
                console.log("SUCCESS! You have a new account :)\n", res.data)
            })
            .catch(err => console.log("error while creating account, ", err))
    }
    const handleClick = () => {
        request();
    }
    return <Button onClick={handleClick}>Generate New Keys</Button>
}

// public: 
// GDQI2XSDRTOQPKUQATVKZHZ3HZNN33KRSKG5M2M4F7SW3XCU54PI7H6O

// private:
// SALV2QXVIWFTISFIJWPB3KOXDPQBLWJVZMCH545Q6GL4UHPTSEQ22UFW