# StellarMe

MERN Full-Stack

The [docs](https://developers.stellar.org/docs/building-apps/basic-wallet/) is outdated. Going to explore the [js-stellar-wallets](https://github.com/stellar/js-stellar-wallets) library and create my own functional components.

This site was designed for mobile screens first (screens < 425px wide), so plz use dev tools to
browse this site with an emulated mobile screen. Desktop support will come soon!

Check out the /preview page!
  
inspiration:
  
- Keybase.io
- StellarX
- Interstellar
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

- profiles
- chatting
- iMessage support
- DEX trading
- wallets**
- web extension
- support on all major platforms, as an application and as a web service

>A **custodial** wallet is a feature that keybase.io seems to integrate well, and will be heavily reasearched before StellarMe sees that type of integration. For now let's make users responsible for their own assets 😅.
>
>I do, however, intend on building a **non-custodial** wallet with the same "StellarMe" theme. Using StellarMe's wallet will not be required.
>
>The Stellar federation protocol lets users use a simplified, email-like address instead the 56-character long public key.  username\*domain   ex:  rodWave\*stellarme.io

---

## Progress

**testnet:** ☑

**LIVE:** ✔

- key generation ☑
- key management
- profile creation
  - messaging
  - social networking
  - federation addresses
- market data
- market trading

## Project Setup

These are the steps I'll be taking as I roll out new features.

wallet setup: [stellar documentation](https://developers.stellar.org/docs/building-apps/project-setup/)

federation address setup: [stellar documentation](https://developers.stellar.org/docs/glossary/federation/)
or their [github repo](https://github.com/stellar/stellar-protocol/blob/master/ecosystem/sep-0002.md)

---

### Securing Web-Based Projects: [Link](https://developers.stellar.org/docs/tutorials/securing-projects/)

Things to consider while creating this project, found on the Stellar Documentation.

---

SSL/TLS

- how to get ssl cert. here: 'https://letsencrypt.org/getting-started/'

Content Security Policy (CSP) Headers

- how to implement here: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP'

HTTP Strict-Transport-Security Headers

- how to add header here: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security'

Storing sensitive data

>ensure sensitive data is encrypted using a proven cipher like AES-256, and stored separately from application data and always pick an >AEAD mode. Any communication between the application server and secret server should be in a private network and / or authenticated >via HMAC. Your cipher strategy will change based on whether you will be sending the ciphertext over the wire multiple times. Finally, >back up any encryption keys you may use offline, and store them only in-memory in your app.
>
>Consult a good cryptographer and read up on best practices. A good place to start is looking into the documentation of your favorite >web framework.

Monitoring

- just check your logs for weird behavior, check [this](https://www.tek-tools.com/apm/log-monitoring-best-practices-and-tools) page out.

Authentication weaknesses

- how to add auth: 'https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications'
- or: 'https://auth0.com/blog/complete-guide-to-react-user-authentication/'
- Time-tested passowrd hashing
- 2FA, U2F, TOTP

Denial of Service Attacks (DOS)

- implement proof of work checks in your client
- or use services like Cloudfare: 'https://www.cloudflare.com/ddos/'

Lock down unused ports

- how to do on AWS: 'https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/authorizing-access-to-an-instance.html'

Phishing and social engineering

- give users clear policies, how to check for legitimacy of emails, etc.

Scan your website and libraries for vulnerabilities

- Snyk tool: 'https://snyk.io/'

SQL Injections

- Have inputs filtered, and validated

[EOF]
