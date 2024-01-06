    // membangkitkan bilangan random
function getComputer() {
    const comp = Math.random();
    if( comp < 0.34 ) return 'gajah';
    if( comp >= 0.34 && comp < 0.67 ) return 'orang';
    return 'semut';
}

    // menentukan rules
function getHasil(comp,player) {
    if( player == comp ) return 'SERI!';
    if( player == 'gajah' ) return ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
    if( player == 'orang' ) return ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
    if( player == 'semut' ) return ( comp == 'orang' ) ? 'KALAH!' : 'MENANG!';
}


function putar() {
    const img = document.querySelector('.img-komputer');
    const gambar = ['gajah','orang','semut'];
    let i= 0;
    const waktuMulai = new Date().getTime();
    setInterval(function() {
        if (new Date().getTime() - waktuMulai > 800){
            clearInterval;
            return;
        };
        img.setAttribute('src', 'assets/' + gambar[i++] + '.png');
        if (i == gambar.length) i = 0;
    },100);
};


const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(e) {
    e.addEventListener('click',function(){
    const pilihanComputer = getComputer();
    const pilihanPlayer = e.className;
    const hasil = getHasil(pilihanComputer,pilihanPlayer);
    console.log(hasil);
    

    //ubah warna random
    const r=Math.round(Math.random() *255 +1);
    const g=Math.round(Math.random() *255 +1);
    const b=Math.round(Math.random() *255 +1);
    document.querySelector('.container .area-player').style.backgroundColor=
    'rgb('+r+','+g+','+b+')';
    

    putar();
    
    setTimeout(function() {
        const imgComputer = document.querySelector('.img-komputer');
        imgComputer.setAttribute('src', 'assets/' + pilihanComputer + '.png');
        const info = document.querySelector('.info');
        info.innerHTML = hasil;
         // add sound
        const audioMenang = new Audio("assets/menang.mp3");
        const audioKalah = new Audio("assets/kalah.mp3");
        const audioSeri = new Audio("assets/seri.mp3");
        if(hasil === 'MENANG!') {
            audioMenang.play();
        }if (hasil === 'KALAH!') {
            audioKalah.play();
        }if (hasil === 'SERI!') {
            audioSeri.play();
        } else {
            console.log("THANK YOU FOR PLAYING THIS GAME");
        }
    }, 800);
    })
});




//click window to random color
// document.body.addEventListener('mousemove',function(event) {
//     const xPos = Math.round(event.clientX / window.innerHeight) *255;
//     const yPos = Math.round(event.clientY / window.innerHeight) *255;
//     const random=Math.round(Math.random() *255 +1);
//     document.body.style.backgroundColor =
//     'rgb('+xPos+','+yPos+','+random+')';
// });