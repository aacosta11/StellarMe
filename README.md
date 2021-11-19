# StellarMe

MERN Full-Stack

This site was designed for mobile screens first (screens < 425px wide), so plz use dev tools to
browse this site with an emulated mobile screen.

Dependencies:
>stellarMe 📂 > server 📂

```json
{
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "mongoose": "^6.0.12"
  }
}
```

>stellarMe 📂 > client 📂

```json
  "dependencies": {
    "@testing-library/jest-dom": "^5.15.0",
    "@testing-library/react": "^11.2.7",
    "@testing-library/user-event": "^12.8.3",
    "axios": "^0.24.0",
    "bootstrap": "^5.1.3",
    "formik": "^2.2.9",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.2",
    "react-dom": "^17.0.2",
    "react-router-dom": "^6.0.2",
    "react-scripts": "4.0.3",
    "stellar-sdk": "^9.1.0",
    "web-vitals": "^1.1.2",
    "yup": "^0.32.11"
  },
```

inspiration:

- Keybase.io
- StellarX
- Lobstr.co
- SatoshiPay

## Vision

provide an all in one platform for transacting on the stellar network.

key feats:

- messaging
- key management
- decentralized market trading

---

full vision:

- profile creation
- chatting
- iMessage support
- iMessage stickers
- DEX trading
- 3rd party wallet support
- custodial wallet. ideally a separate service called StellarYu
- web extension for checkout processing
- support on all major platforms, as an application and as a web service

---

vision for project week:

- [ ] profile creation
- [x] make testnet accounts with horizon api
- [ ] store public&private keys into db
- [x] send, recieve payments (testnet)
- [x] display balance (testnet)
- [ ] albedo wallet integration

## Stellar Project Setup

wallet setup: [stellar documentation](https://developers.stellar.org/docs/building-apps/project-setup/)

federation address setup: [stellar documentation](https://developers.stellar.org/docs/glossary/federation/)
or their [github repo](https://github.com/stellar/stellar-protocol/blob/master/ecosystem/sep-0002.md)

---

### [Securing Web-based Projects](https://developers.stellar.org/docs/tutorials/securing-projects/)

---

SSL/TLS

- how to get ssl cert. here: https://letsencrypt.org/getting-started/

Content Security Policy (CSP) Headers

- how to implement here: https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP

HTTP Strict-Transport-Security Headers

- how to add header here: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security

Storing sensitive data

>ensure sensitive data is encrypted using a proven cipher like AES-256, and stored separately from application data and always pick an >AEAD mode. Any communication between the application server and secret server should be in a private network and / or authenticated >via HMAC. Your cipher strategy will change based on whether you will be sending the ciphertext over the wire multiple times. Finally, >back up any encryption keys you may use offline, and store them only in-memory in your app.
>
>Consult a good cryptographer and read up on best practices. A good place to start is looking into the documentation of your favorite >web framework.

Monitoring

- just check your logs for weird behavior

Authentication weaknesses

- how to add auth: https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications
- or: https://auth0.com/blog/complete-guide-to-react-user-authentication/
- Time-tested passowrd hashing
- 2FA, U2F, TOTP

Denial of Service Attacks (DOS)

- implement proof of work checks in your client
- or use services like Cloudfare: https://www.cloudflare.com/ddos/

Lock down unused ports

- how to do on AWS: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/authorizing-access-to-an-instance.html

Phishing and social engineering

- give users clear policies, how to check for legitimacy of emails, etc.

Scan your website and libraries for vulnerabilities

- Snyk tool: https://snyk.io/

SQL Injections

- Have inputs filtered, and validated

[EOF]
