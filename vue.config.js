// GET http://192.168.1.102:8080/sockjs-node/info?t=1608719207155 net::ERR_EMPTY_RESPONSE Error
// devDerver.hostがIP(192.168.1.102:8080)に向けられていると参照できず上記エラーが出るため`localhost`に向けるように設定を上書き
module.exports = {
  devServer: {
    host: "localhost",
  },
};
