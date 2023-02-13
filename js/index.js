//  delete all test

// let url = `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-089?Authorization=CWB-7118B202-1151-43E8-BE84-EBA964198849&format=JSON&locationName=${city}`;
let url = "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-089?Authorization=CWB-7118B202-1151-43E8-BE84-EBA964198849";
fetch(url).then(res => res.json()).then(res => {
  console.log(res["records"])
})
// let taipeiTime = new Date().getTime();
let taipeiTime = new Date().toLocaleString();
let timeSYD = new Date().getHours() + ":" + new Date().getMinutes();
let dateSYD = new Date().getDay()

console.log(taipeiTime)
console.log(timeSYD)
console.log(dateSYD)
console.log(new Date().getUTCMonth())
