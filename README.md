#	Project 4:	Build a Private Blockchain Notary Service

##	Getting Started

In this project we are creating a Private Blockchain Notary Service

###	Requirements

	- Node.js
	- Postman
	- Express.js
	- crypto-js
	- hapi
	- hex2ascii
	- level
	- bitcoinjs-message
	- bitcoinjs-lib

###	Installments

```
git clone https://github.com/TheAisBack/BDND_Project_3_RESTful_Web_API.git

npm init

npm install
npm install crypto-js --save
npm install express --save
npm install hapi --save
npm install hex2ascii --save
npm install level --save
npm install bitcoinjs-message --save
npm install bitcoinjs-lib --save

node app.js
```

## Perform the Following Tasks to validate the Blockchain Notary Service

1.  Web API POST Endpoint to Validate Request with JSON Response.
2.  Web API POST Endpoint Validates Message Signature with JSON Response.
3.  Web API POST Endpoint with JSON Response that Submits The Star Information to be Saved in the Blockchain.
4.  Get Star Block by Hash with JSON Response.
5.  Get Star Block by Wallet Address (Blockchain Identity) with JSON Response.
6.  Get Star Block by Star Block Height with JSON Response.

###  Workflow

<p align="center">
    <img src="https://github.com/TheAisBack/BDND_Project_4_Private_Blockchain_Notary_Service/blob/master/project4-workflow.png">
</p>

###	Web API POST Endpoint to Validate Request with JSON Response.

Use the URL for the endpoint:

http://localhost:8000/requestValidation

The request should contain:
```
{
  "address": "19xaiMqayaNrn3x7AjV5cU4Mk5f5prRVpL"
}
```
The response should contain
```
{
  "walletAddress": "19xaiMqayaNrn3x7AjV5cU4Mk5f5prRVpL",
  "requestTimeStamp": "1544451269",
  "message": "19xaiMqayaNrn3x7AjV5cU4Mk5f5prRVpL:1544451269:starRegistry",
  "validationWindow": 300
}
```

###	Web API POST Endpoint Validates Message Signature with JSON Response.

Use the URL for the endpoint:

http://localhost:8000/message-signature/validate

The request should contain:
```
{
  "address": "19xaiMqayaNrn3x7AjV5cU4Mk5f5prRVpL",
  "signature": "H8K4+1MvyJo9tcr2YN2KejwvX1oqneyCH+fsUL1z1WBdWmswB9bijeFfOfMqK68kQ5RO6ZxhomoXQG3fkLaBl+Q="
}
```

The endpoint response should look like:
```
{
  "registerStar": true,
  "status": {
    "address": "19xaiMqayaNrn3x7AjV5cU4Mk5f5prRVpL",
    "requestTimeStamp": "1544454641",
    "message": "19xaiMqayaNrn3x7AjV5cU4Mk5f5prRVpL:1544454641:starRegistry",
    "validationWindow": 193,
    "messageSignature": true
  }
}
```

###	Web API POST Endpoint with JSON Response that Submits The Star Information to be Saved in the Blockchain.

Use the Url for the endpoint:

http://localhost:8000/block

The request should contain:
```
{
  "address": "19xaiMqayaNrn3x7AjV5cU4Mk5f5prRVpL",
  "star": {
    "dec": "68° 52' 56.9",
    "ra": "16h 29m 1.0s",
    "story": "Found star using https://www.google.com/sky/"
  }
}
```
Verify that the "address" that send the Star was validated in the previous steps, if not respond back with an error.

The response will look like:
```
{
  "hash": "8098c1d7f44f4513ba1e7e8ba9965e013520e3652e2db5a7d88e51d7b99c3cc8",
  "height": 1,
  "body": {
    "address": "19xaiMqayaNrn3x7AjV5cU4Mk5f5prRVpL",
    "star": {
      "ra": "16h 29m 1.0s",
      "dec": "68° 52' 56.9",
      "story": "466f756e642073746172207573696e672068747470733a2f2f7777772e676f6f676c652e636f6d2f736b792f"
    }
  },
  "time": "1544455399",
  "previousBlockHash": "639f8e4c4519759f489fc7da607054f50b212b7d8171e7717df244da2f7f2394"
}
```

###	Get Star Block by Hash with JSON Response.

Use the URL:

http://localhost:8000/stars/hash:[HASH]

The response includes entire star block contents along with the addition of star story decoded to ASCII.
```
{
  "hash": "a59e9e399bc17c2db32a7a87379a8012f2c8e08dd661d7c0a6a4845d4f3ffb9f",
  "height": 1,
  "body": {
    "address": "142BDCeSGbXjWKaAnYXbMpZ6sbrSAo3DpZ",
    "star": {
      "ra": "16h 29m 1.0s",
      "dec": "-26° 29' 24.9",
      "story": "466f756e642073746172207573696e672068747470733a2f2f7777772e676f6f676c652e636f6d2f736b792f",
      "storyDecoded": "Found star using https://www.google.com/sky/"
    }
  },
  "time": "1532296234",
  "previousBlockHash": "49cce61ec3e6ae664514d5fa5722d86069cf981318fc303750ce66032d0acff3"
}
```

###	Get Star Block by Wallet Address (Blockchain Identity) with JSON Response.

Use the URL:

http://localhost:8000/stars/address:[ADDRESS]

The response includes entire star block contents along with the addition of star story decoded to ASCII.

This endpoint response contained a list of Stars because of one wallet address can be used to register multiple Stars.

Response:
```
[
  {
    "hash": "a59e9e399bc17c2db32a7a87379a8012f2c8e08dd661d7c0a6a4845d4f3ffb9f",
    "height": 1,
    "body": {
      "address": "142BDCeSGbXjWKaAnYXbMpZ6sbrSAo3DpZ",
      "star": {
        "ra": "16h 29m 1.0s",
        "dec": "-26° 29' 24.9",
        "story": "466f756e642073746172207573696e672068747470733a2f2f7777772e676f6f676c652e636f6d2f736b792f",
        "storyDecoded": "Found star using https://www.google.com/sky/"
      }
    },
    "time": "1532296234",
    "previousBlockHash": "49cce61ec3e6ae664514d5fa5722d86069cf981318fc303750ce66032d0acff3"
  },
  {
    "hash": "6ef99fc533b9725bf194c18bdf79065d64a971fa41b25f098ff4dff29ee531d0",
    "height": 2,
    "body": {
      "address": "142BDCeSGbXjWKaAnYXbMpZ6sbrSAo3DpZ",
      "star": {
        "ra": "17h 22m 13.1s",
        "dec": "-27° 14' 8.2",
        "story": "466f756e642073746172207573696e672068747470733a2f2f7777772e676f6f676c652e636f6d2f736b792f",
        "storyDecoded": "Found star using https://www.google.com/sky/"
      }
    },
    "time": "1532330848",
    "previousBlockHash": "a59e9e399bc17c2db32a7a87379a8012f2c8e08dd661d7c0a6a4845d4f3ffb9f"
  }
]
```

###	Get Star Block by Star Block Height with JSON Response.

Use the URL:

http://localhost:8000/block/[HEIGHT]

The response includes entire star block contents along with the addition of star story decoded to ASCII.
```
{
  "hash": "a59e9e399bc17c2db32a7a87379a8012f2c8e08dd661d7c0a6a4845d4f3ffb9f",
  "height": 1,
  "body": {
    "address": "142BDCeSGbXjWKaAnYXbMpZ6sbrSAo3DpZ",
    "star": {
      "ra": "16h 29m 1.0s",
      "dec": "-26° 29' 24.9",
      "story": "466f756e642073746172207573696e672068747470733a2f2f7777772e676f6f676c652e636f6d2f736b792f",
      "storyDecoded": "Found star using https://www.google.com/sky/"
    }
  },
  "time": "1532296234",
  "previousBlockHash": "49cce61ec3e6ae664514d5fa5722d86069cf981318fc303750ce66032d0acff3"
}
```