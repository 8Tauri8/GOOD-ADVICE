function advice() {
let fetchRes = fetch("https://api.adviceslip.com/advice");
    fetchRes.then(res => res.json())
    .then(d => {console.log(d)})
}

