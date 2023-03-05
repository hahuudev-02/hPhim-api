import admin from "firebase-admin";

const serviceAccount = {
    type: "service_account",
    project_id: "hphim-55b0b",
    private_key_id: "afdf2010381457f75db957ff8556e9a46e337a82",
    private_key:
        "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCx5HzLqFSQXKTg\nFilUYi/506hs5+NPOxbEkQJSTEzy9AfKhSTMA9RxmrctqrukszPwYerLv3+uClds\n98gcJMgzaqTUZcsydLuHxDlAYutbunn5HzDUku1U1Sz/G5Oa3A1Wm9KyiXopSaHU\ny99hNL7sVAE4mpiNaFymWs7Som3CozJq0O2lCpUPg7GyzyOt8RltLggjzFi++17X\niutgCSNQEAXt8yYMDTKg7xq3y3rh/kbC4W+rgtbvQ9300USmD+WwsMpeFPq8WZ+O\nLSAUTyqPAtuSOJu+evW6/kzeJC2gk/85mC7N6AdLXJ4lo/ccp449mVQf+1IZ6mjR\nwSxYsi93AgMBAAECggEACRTYBhw+zOvd2DlpZ2Rn0ezV5qa5OlHoP1ADz/292T1P\nVIMS4NNlOgjNnH2LJ2+lPCVTiOPqzxC6FoGua+QOJbR7sQLNVR2+dmzfBgQcGHUJ\nmwfWRKkyMn17gZPVJ40KT/HpLLIgqWZCkQwjXYwFdH0etCwNk6fQlbGBviEKp2ql\nYrs8yPop8yK3+DvjznaYGQUAVCnqkua9P4URP+xT+hPCHiAUBKgMlPqrcNrgJLJ4\nRvW6WNfKVxXBC6Agwk/rT3PZ8B2QIrzFeAiGG5+Icrmgp2YMtEo1zj/MzqEcpTwb\nKnPvylCwNFHHsk6dMgqs9ddhOb4ErzrLihNXr1N4iQKBgQD23Z7GmAotP9cOvL6h\niwMNZt6f7R76hz6/3HAP4Agy1FFvN2sRsZFmgkm5PRiXHy15hwM8aiIqB2iS3qPy\nEWJI61ZLcMxuNKTP8Zvk8amOFOPx8jv8O1/kQ+sukrdJfCdWE8bGq8IGma0W5Cqm\nDkPPnlpGXlQoADdD4O0YWLQH3QKBgQC4eYjOgRtr65PPwLEjw5w1HkckYak0h6xJ\nNgy+tHM2Vnm770Q/wkLGJjOyD/wKOw2idBuEjJVOFdYHd7kJ2yY7XKqAqe+KY+DE\nU9nvzlPIog6I1D65ztanofRNoC/PRxSCFNLKfUTZq30t04vfLKYvxseOA9JJjiw8\nuM01vmfpYwKBgDLD7lO+jlEx0KLKM5V6xbzqy5stovI3/7JqvWy2UFlLiheJ2O3B\nizn+TvTV2ImzMqHMHuE8nhvwfBO/zw0HgCOoqY1H+/Ipxz6v27Qf8hMyvpFRk/5R\no22IfgOMzj5BVsF/vZ+7UGIVFiAf+Zk+U7mNQdk4qquzJ6pAxeD81MDNAoGBAKg+\nl6oXD+ZWXWG90RDYJ1A+xA2HUGXLUzMWK3uGYgltxurDJlCsIHBNiRpd/7Vo9F90\nW2CBQu6Ldb8rzsQRbgX31r0vv3tM6kLEYuCWIc27F1xtjqOx5A3Q5FojvVbi8e5N\nhY4Nv8xx3eH8rPWm6A5s0bVRAOn605exx967QFQXAoGAZ/K6dNs0+5dLIMxvU/YA\nnkqvo91PlPin+2SiCbimeV6CNKzOe+FkqRnjtR9qYRolA+SGF+jsLQ0rtmPOGHtZ\nnyL9IO7F+4TNAS25jHHR2sFXNm8XJ++eYFxafrW6RTCeSv/79Ca2PCgCtHxZ/nX3\nQaJzetb621HWAsPefe6hDvs=\n-----END PRIVATE KEY-----\n",
    client_email: "firebase-adminsdk-mmmou@hphim-55b0b.iam.gserviceaccount.com",
    client_id: "115854127778990218507",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
        "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-mmmou%40hphim-55b0b.iam.gserviceaccount.com",
};
// const serviceAccount = require("./private_key.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

export default admin;
