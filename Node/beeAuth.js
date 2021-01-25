const { get } = require("http");

const fetch = require("node-fetch");

getBeeToken = async function() {
    let result = await fetch('https://auth.getbee.io/apiauth',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'client_id=60fee9f0-b767-4347-937f-d0506a1a0fd8&client_secret=THlCFZpNmIzgLfZaWNOj46pwGLtC1JWiDgbjgrqga3KOdeh93LYS'
    });
    return await result.json();
}

module.exports = {
    getBeeToken
}