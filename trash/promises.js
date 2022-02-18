
new Promise((resolve, reject) => resolve(1))
    .then( res => {
        console.log('start then');
        console.log(res);
        throw 'test error'
    })
    .catch( error => {
        console.log('start catch');
        console.log(error);
    })

**Вчера**
- Добавил таблицу мероприятий на вкладку управления билетами
- Сделал активным пункт меню "Мероприятия"

**Сегодня**
- возьму новую задачу

Чинил баги отложенной переоценки:
- Починил немедленный запуск
- Починил обновление свободной рассадки после переоценки
- Добавил очистку корзины после создания отложенной переоценки
- Поправил формат даты в таблице переоценок




curl 'http://pro.ticketland.local:8080/api/invitation' \
  -H 'Connection: keep-alive' \
  -H 'Pragma: no-cache' \
  -H 'Cache-Control: no-cache' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36' \
  -H 'Content-Type: application/json' \
  -H 'Origin: http://pro.ticketland.local:8080' \
  -H 'Referer: http://pro.ticketland.local:8080/management/show/21667220/invitations' \
  -H 'Accept-Language: en,ru;q=0.9,uk;q=0.8,pt-PT;q=0.7,pt;q=0.6,pt-BR;q=0.5,it;q=0.4,es-CO;q=0.3,es;q=0.2,de-DE;q=0.1,de;q=0.1,ru-RU;q=0.1,en-US;q=0.1,kk;q=0.1,ky;q=0.1,vi;q=0.1' \
  -H 'Cookie: wtosid=1ni6bt5f40uuisoiv3r7a9v7n7; _iwto=ac63f57191f7d6734ee0036a501207fe71afd7fc3cbbbd9a1f24e4003c5cef96a%3A2%3A%7Bi%3A0%3Bs%3A5%3A%22_iwto%22%3Bi%3A1%3Bs%3A405%3A%22eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NDI3NTE5OTUsIm5iZiI6MTY0Mjc1MTk5NSwianRpIjoiMTIxNDM5NiIsImV4cCI6MTY0MjgwOTYwMCwiaXNzIjoiVGhlYXRlclRPXzNUIiwiYXVkIjoidGlja2V0bGFuZC5ydSIsImF1dGhLZXkiOiJUaGVhdGVyVE9fM1RcL2Q1MzQ3MTI4LWEwOGItNDg5Yy1hMDIxLTBjMDgwZTE0OGU1MyIsImV4cGxvcmVyQXBwVG9rZW4iOiJKYXZhQkVfM1RcL2E3MGYxYjEwLWJjZWEtNGMwYy05ZmFmLTRkNTdmMmEzZTM2YSJ9.LZkzq-m_niJI3qAkmYqA_IyJJ53KlSEdVUTR7x7jb8U%22%3B%7D; _csrf=782838a689115fbe21cb0e2ed3ddd16bb64de3ee498373a6ac24d87a0eaeac2aa%3A2%3A%7Bi%3A0%3Bs%3A5%3A%22_csrf%22%3Bi%3A1%3Bs%3A32%3A%221ow7b5JOIQKcMHRIK87TKT34HgeusWAd%22%3B%7D' \
  --data-raw '{"title":"testComment","performanceId":25917699,"receiveType":"email","email":"evtimofeev87@gmail.com","places":[35741347]}' \
  --compressed \
  --insecure

