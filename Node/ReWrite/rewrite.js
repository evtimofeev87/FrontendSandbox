let fs = require('fs');

let data = fs.readFileSync('./target.js','utf8');
// data = data.replace(/subscribersCount/g,"sentComputed");
data = data.replace(/uniqueOpenings/g,"openedComputed");
data = data.replace(/uniqueClicks/g,"clickedComputed");
data = data.replace(/unsubscribed/g,"unsubscribedComputed");
data = data.replace(/complained/g,"complainedComputed");
fs.writeFileSync('./result.js', data,'utf8');