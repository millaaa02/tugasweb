async function load() {
    let data = await fetch('./src/data.json');
    data = await data.json()
    let component = ""
    for (let i = 0; i < data.length; i++) {
        component = component + `<div class="teman">
        <div class="gambar">
            <img src="${data[i].fotoselfie}" alt="">
        </div>
        <div class="bio">
            <h1>Biodata Diri</h1>
            <div class="bio-text">
                <p>Nama : ${data[i].nama}</p>
                <p>Kelompok : ${data[i].kelompok}</p>
                <p>Nim : ${data[i].nim}</p>
                <p>Alamat :${data[i].alamat}</p>
                <p>Ttl : ${data[i].ttl}</p>
                <p>No : ${data[i].no}</p>
            </div>
        </div>
        </div>`

    }



    document.getElementById('main-teman').innerHTML = component
}

load()