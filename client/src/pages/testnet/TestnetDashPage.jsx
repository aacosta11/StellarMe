import TestnetGetAccountAPI from "../../api/TestNetGetAccountAPI";
import NavBarComp from "../../components/homepage/NavBarComp";
import TestnetTransactAPI from "../../api/TestnetTransactAPI";
import MakeNewKeysAPI from "../../api/MakeNewKeysAPI.jsx";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import React, { useState, useEffect } from "react";
import "../../styles/pageStyles/testDashStyle.css";
export default props => {
    const [keyPair, setKeyPair] = useState({
        'public': 'GBSN5LZY5BMBJ5J3QWRYY7WAOYG3DVRCK76PN4MR3E7GBQBINGO3SGTV',
        'private': 'SD7MGXUGVAQVJVKCBZSK4GHGRQYS67X4F4KU6T7P7EAVP7Y3CMCDZTTN' });
    const [keyPair2,setKeyPair2] = useState({
        'public':'GDQI2XSDRTOQPKUQATVKZHZ3HZNN33KRSKG5M2M4F7SW3XCU54PI7H6O',
        'private':'SALV2QXVIWFTISFIJWPB3KOXDPQBLWJVZMCH545Q6GL4UHPTSEQ22UFW'});
    const [balance, setBalance] = useState(0);
    const [balance2, setBalance2] = useState(0);
    const guest1 = 'guest982';
    const guest2 = 'guest321';
    const [slots,setSlots] = useState({
        0:{'name':guest1,'public':keyPair.public,'private':keyPair.private,'balance':balance},
        1:{'name':guest2,'public':keyPair2.public,'private':keyPair2.private,'balance':balance2}})
    const [tradeAmnt,setTradeAmnt] = useState(0)

    useEffect(()=>{
        slots[0].name === guest1 ?
        setSlots({...slots,0:{'name':guest1,'public':keyPair.public,'private':keyPair.private,'balance':balance}})
        :
        setSlots({...slots,1:{'name':guest1,'public':keyPair.public,'private':keyPair.private,'balance':balance}})
    }, [balance])
    useEffect(()=>{
        slots[0].name === guest2 ?
        setSlots({...slots,0:{'name':guest2,'public':keyPair2.public,'private':keyPair2.private,'balance':balance2}})
        :
        setSlots({...slots,1:{'name':guest2,'public':keyPair2.public,'private':keyPair2.private,'balance':balance2}})
    }, [balance2])
    
    const generateNewKeys = res => {setKeyPair({...res});}
    const generateNewKeys2 = res => {setKeyPair2({...res});}
    
    const handleAccountReport = res => {
        setBalance(res);}
    const handleAccountReport2 = res => {
        setBalance2(res);}

    const handleTransaction2 = res => {
        setBalance2((((parseFloat(balance2) + parseFloat(res)) * 100) / 100).toFixed(7));}
    
    const handleTransaction = res => {
        setBalance((((parseFloat(balance) + parseFloat(res)) * 100) / 100).toFixed(7));}
    
    const handleSwapSlots = () => {
        if (slots[0].name === guest1) {
            setSlots({0:{'name':guest2,'public':keyPair2.public,'private':keyPair2.private,'balance':balance2},
            1:{'name':guest1,'public':keyPair.public,'private':keyPair.private,'balance':balance}})
        } 
        else {
            setSlots({0:{'name':guest1,'public':keyPair.public,'private':keyPair.private,'balance':balance},
            1:{'name':guest2,'public':keyPair2.public,'private':keyPair2.private,'balance':balance2}})}
    }

    const handleTradeDemo = res => {
        slots[0].name === guest1 ?
        <>
        {setBalance((((parseFloat(balance) - parseFloat(res)) * 100) / 100).toFixed(7))}
        {setBalance2((((parseFloat(balance2) + parseFloat(res)) * 100) / 100).toFixed(7))}
        </>
        :
        <>
        {setBalance((((parseFloat(balance) + parseFloat(res)) * 100) / 100).toFixed(7))}
        {setBalance2((((parseFloat(balance2) - parseFloat(res)) * 100) / 100).toFixed(7))}
        </>
    }
    return (
        <>
            <TestnetGetAccountAPI pubKey={keyPair2.public} response={handleAccountReport2} />
            <TestnetGetAccountAPI pubKey={keyPair.public} response={handleAccountReport} />
            <div className="testdashwrap">
                <div className="testdashtopfill">
                    <h1>Welcome, guest!</h1>
                </div>
                <NavBarComp />

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
                    {keyPair.public.length !== 0 ?
                    <>
                    <div>{balance} XLM</div>
                    <h3>add 100 XML to your balance?</h3>
                    <TestnetTransactAPI reciever={keyPair.public} response={handleTransaction} amnt='100'
                    src={'SA4JSHUECQ4S5ECT6LGSMQPM467CDNBNAGBVFMDCNSMYUJW3ZXQNWE5O'}/>
                    </>
                    : <p>Generate Key Pairs!</p>}
                    <div className="hr hr-b" />
                </div>

                {/* balance for guest2 */}
                <div className="testusercard testnetaccountinfo">
                    <div className="hr hr-t" />
                    <h2>Balance for @{guest2}</h2>
                    {/* <TestnetGetAccountAPI pubKey={keyPair.public} response={handleAccountReport} /> */}
                    {keyPair2.public.length !== 0 ?
                    <>
                    <div>{balance2} XLM</div>
                    <h3>add 100 XML to your balance?</h3>
                    <TestnetTransactAPI reciever={keyPair2.public} response={handleTransaction2} amnt='100' 
                    src={'SA4JSHUECQ4S5ECT6LGSMQPM467CDNBNAGBVFMDCNSMYUJW3ZXQNWE5O'}/>
                    </>
                    : <p>Generate Key Pairs!</p>}
                    <div className="hr hr-b" />
                </div>

                {/* make a trade */}
                <div className="testusercard testnettransactpreview">
                    <div className="hr hr-t" />
                    <h2>Make A Trade!</h2>
                    <div>@{slots[0].name} Balance: XLM {slots[0].balance}</div>
                    <InputGroup className="mb-3">
                        <FormControl
                            min="1"
                            type="number"
                            value={tradeAmnt}
                            onChange={e=>setTradeAmnt(e.target.value)}
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"/>
                    <InputGroup.Text id="inputGroup-sizing-default">XLM</InputGroup.Text>
                    <Button onClick={handleSwapSlots}>swap</Button>
                    </InputGroup>
                    <div>@{slots[1].name} Balance: XLM {slots[1].balance}</div>
                    {keyPair.public.length < 1 || keyPair2.public.length < 1 ?
                    <h3>Generate Key Pairs First!</h3>
                    :
                    <TestnetTransactAPI 
                    src={slots[0].private}
                    amnt={tradeAmnt}
                    reciever={slots[1].public}
                    response={handleTradeDemo}
                    />
                    }
                    <div className="hr hr-b" />
                </div>
            </div>
        </>
    )
}