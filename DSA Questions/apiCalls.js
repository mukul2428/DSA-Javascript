const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';
// fetch(apiUrl).then(data => data.json()).then(resp => console.log(resp));
async function callApis(){
    const resp = await fetch(apiUrl);
    const data = await resp.json();
    console.log(data);
}
callApis();