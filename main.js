//express 서버 셋업
const express = require('express');
const app = express();
const port = 3000;

//express 서버 실행
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/callbacks/kakao/sign_in', async (request, response) => {
    //Authentication Code 받아 돌려줄 api 
  const redirect = `webauthcallback://success?${new URLSearchParams(request.query).toString()}`;
  console.log(`Redirecting to ${redirect}`);
  response.redirect(307, redirect);
  })

app.post('/callbacks/kakao/token', async (request, response) => {
      //발급 받은 kakao AccessCode로 사용자 확인후 firebase 로 custom token 생성하기 위한 api
  kakao_auth.createFirebaseToken(request.body["accessToken"],(resulst)=>{
    response.send(resulst);})
  })
