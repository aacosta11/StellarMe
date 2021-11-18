import TestnetGetAccountAPI from "../../api/TestNetGetAccountAPI";
import NavBarComp from "../../components/homepage/NavBarComp";
import TestnetTransactAPI from "../../api/TestnetTransactAPI";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import MakeNewKeysAPI from "../../api/MakeNewKeysAPI.jsx";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import "../../styles/pageStyles/testDashStyle.css";
export default props => {
    const [keyPair, setKeyPair] = useState({ 'public': 'GC7XVS643FTWOKTFJGHPOUPG24CIVKHHB35WCPVPJEDNZRYCBN2MTC2W', 'private': '' });
    const [balance, setBalance] = useState('');
    const [keyPair2,setKeyPair2] = useState({'public':'','private':''});
    const [balance2, setBalance2] = useState('');
    const guest1 = 'guest982';
    const guest2 = 'guest321';
    const [slots,setSlots] = useState({
        0:{'name':guest1,'public':keyPair.public,'private':keyPair.private,'balance':balance},
        1:{'name':guest2,'public':keyPair2.public,'private':keyPair2.private,'balance':balance2}})
    const [tradeAmnt,setTradeAmnt] = useState(0)

    const generateNewKeys = (res) => {
        setKeyPair({...res});
    }
    const generateNewKeys2 = (res) => {
        setKeyPair2({...res});
    }
    const handleUpdate = e => {
        e.preventDefault();
    }
    const handleAccountReport = res => {
        setBalance(res);
    }
    const handleAccountReport2 = res => {
        setBalance2(res);
    }
    const handleTransaction2 = res => {
        setBalance2(Math.round(((parseFloat(balance2) + parseFloat(res)) * 100) / 100).toFixed(7));
    }
    const handleTransaction = res => {
        setBalance(Math.round(((parseFloat(balance) + parseFloat(res)) * 100) / 100).toFixed(7));
    }
    const handleSwapSlots = () => {
        if (slots[0].name === guest1) {
            setSlots({0:{'name':guest2,'public':keyPair2.public,'private':keyPair2.private,'balance':balance2},
            1:{'name':guest1,'public':keyPair.public,'private':keyPair.private,'balance':balance}})
        } else {
            setSlots({0:{'name':guest1,'public':keyPair.public,'private':keyPair.private,'balance':balance},
            1:{'name':guest2,'public':keyPair2.public,'private':keyPair2.private,'balance':balance2}})
        }
    }

    return (
        <>
            <div className="testdashwrap">
                <div className="testdashtopfill">
                    <h1>Welcome, guest!</h1>
                </div>
                <NavBarComp />
                <div className="testusercard testupdatecredentials">
                    <div className="hr hr-t" />
                    <h2>Update Login (preview)</h2>
                    <Form onSubmit={handleUpdate}>
                        <FloatingLabel controlId="username" label="Username" className="mb-3">
                            <Form.Control type="text" placeholder="Username" />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3">
                            <Form.Control type="email" placeholder="name@example.com" className="testlogininput" />
                        </FloatingLabel>
                        <Button>Save Changes</Button>
                    </Form>
                    <div className="hr hr-b" />
                </div>
                {/* key pair for guest1 */}
                <div className="addresses testusercard">
                    <div className="hr hr-t" />
                    <h2>@{guest1}'s testnet key pair:</h2>
                    {/* public */}
                    <h6>public: </h6>
                    {keyPair.public.length === 0 ?
                        <p>none</p>
                        : <div className="testkey">{keyPair.public}</div>}
                    {/* private */}
                    <h6>private: </h6>
                    {keyPair.private.length === 0 ?
                        <p>none</p>
                        : <div className="testkey">{keyPair.private}</div>}
                    <MakeNewKeysAPI response={generateNewKeys} className="newkeysplz" />
                    <div className="hr hr-b" />
                </div>

                {/* key pair for guest2 */}
                <div className="addresses testusercard">
                    <div className="hr hr-t" />
                    <h2>@{guest2}'s testnet key pair:</h2>
                    {/* public */}
                    <h6>public: </h6>
                    {keyPair2.public.length === 0 ?
                        <p>none</p>
                        : <div className="testkey">{keyPair2.public}</div>}
                    {/* private */}
                    <h6>private: </h6>
                    {keyPair2.private.length === 0 ?
                        <p>none</p>
                        : <div className="testkey">{keyPair2.private}</div>}
                    <MakeNewKeysAPI response={generateNewKeys2} className="newkeysplz" />
                    <div className="hr hr-b" />
                </div>

                {/* balance for guest1 */}
                <div className="testusercard testnetaccountinfo">
                    <div className="hr hr-t" />
                    <h2>Balance for @{guest1}</h2>
                    {/* <TestnetGetAccountAPI pubKey={keyPair.public} response={handleAccountReport} /> */}
                    <div>XLM {balance}</div>
                    {keyPair.public.length !== 0 ?
                    <>
                    <h3>add 100 XML to your balance?</h3>
                    <TestnetTransactAPI reciever={keyPair.public} response={handleTransaction} amnt='100' />
                    </>
                    : <p>Generate Key Pairs!</p>}
                    <div className="hr hr-b" />
                </div>
                <div className="testusercard testnetaccountinfo">
                    <div className="hr hr-t" />
                    <h2>Balance for @{guest2}</h2>
                    {/* <TestnetGetAccountAPI pubKey={keyPair.public} response={handleAccountReport} /> */}
                    <div>XLM {balance2}</div>
                    {keyPair2.public.length !== 0 ?
                    <>
                    <h3>add 100 XML to your balance?</h3>
                    <TestnetTransactAPI reciever={keyPair2.public} response={handleTransaction2} amnt='100' />
                    </>
                    : <p>Generate Key Pairs!</p>}
                    <div className="hr hr-b" />
                </div>
                
                {/* make a trade */}
                <div className="testusercard testnettransactpreview">
                    <TestnetGetAccountAPI pubKey={keyPair2.public} response={handleAccountReport2} />
                    <TestnetGetAccountAPI pubKey={keyPair.public} response={handleAccountReport} />
                    <div className="hr hr-t" />
                    <h2>Make A Trade!</h2>
                    {slots[0].balance > 0 && <div>@{slots[0].name} Balance: XLM {slots[0].balance}</div>}
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">XLM</InputGroup.Text>
                        <FormControl
                            min="1"
                            type="number"
                            value={tradeAmnt}
                            onChange={e=>setTradeAmnt(e.target.value)}
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"/>
                        <Button onClick={handleSwapSlots}>swap</Button>
                    </InputGroup>
                    <div>@{slots[1].name} Balance: XLM {slots[1].balance}</div>
                    {keyPair.public.length < 1 || keyPair2.public.length < 1 ?
                    <h3>Generate Key Pairs First!</h3>
                    :
                    <TestnetTransactAPI 
                    src={slots[0]}
                    amnt={tradeAmnt}
                    reciever={slots[1].public}
                    response={handleTransaction}
                    />
                    }
                    <div className="hr hr-b" />
                </div>
            </div>
        </>
    )
}