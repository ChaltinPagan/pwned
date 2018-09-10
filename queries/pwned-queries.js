const axios = require('axios');
const hasha = require('hasha');

const pwnedPasswordRange = (req, res, next) => {
    let passwordHash = hasha(req.params.input, { algorithm: 'sha1' });
    let passwordHashPrefix = passwordHash.slice(0, 5);
    let passwordHashSuffix = passwordHash.slice(5).toUpperCase();
    axios({
        method: 'get',
        url: `https://api.pwnedpasswords.com/range/${passwordHashPrefix}`
    })
        .then(res => res.data.split('\r\n')
        )
        .then(data => data.filter(el => el.match(passwordHashSuffix))
        )
        .then(final => {
            let count = Number(final.join('').split(":")[1]);
            if (count) {
                res.status(200)
                .send({
                    status: 'success',
                    count: count,
                    message: "Change your password ASAP."
                })
            } else {
                res.status(204)
                .send({
                    status: 'not found',
                    count: 0,
                    message: 'Password not found in the data set.'
                })
            }
        })
        .catch( err => console.log(err))
};

module.exports = {
    pwnedPasswordRange
}