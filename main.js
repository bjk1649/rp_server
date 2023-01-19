//express 서버 셋업
const express = require('express');
const app = express();
const port = 3000;

//express 서버 실행
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

//express 서버에 라우팅 설정
app.get('/', (req, res) => {
    res.send('Hello World!')
})

//라우팅 설정
app.get('/test', (req, res) => {
    res.send('test')
})
