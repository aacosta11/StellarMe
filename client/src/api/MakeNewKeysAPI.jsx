import axios from "axios";
import StellarSdk from "stellar-sdk";
import Button from "react-bootstrap/Button";
export default props => {
    const { response } = props;
    const server = new StellarSdk.Server("https://horizon-testnet.stellar.org");

    // pair.secret();
    // pair.publicKey();
    
    // console.log(pair.canSign());
    // console.log('public: ')
    // console.log(pair.publicKey());
    // console.log('secret: ')
    // console.log(pair.secret());
    const request = () => {
        const pair = StellarSdk.Keypair.random();
        console.log("public key: ",pair.publicKey());
        console.log("private key: ",pair.secret());
        axios.get(`https://friendbot.stellar.org?addr=${encodeURIComponent(
            pair.publicKey(),
        )}`)
            .then(res => {
                response({'public':pair.publicKey(),'private':pair.secret()})
                console.log("SUCCESS! You have a new account :)\n", res.data)
            })
            .catch(err => console.log("error while creating account, ", err))
    }
    const getTransactions = pubKey => {
        server.transactions()
            .forAccount(pubKey)
            .call().then(function (r) { console.log(r) });
    }
    const handleClick = () => {
        request();
    }

    return <Button onClick={handleClick}>Make New Keys</Button>
}

// public: 
// GDQI2XSDRTOQPKUQATVKZHZ3HZNN33KRSKG5M2M4F7SW3XCU54PI7H6O

// private:
// SALV2QXVIWFTISFIJWPB3KOXDPQBLWJVZMCH545Q6GL4UHPTSEQ22UFW