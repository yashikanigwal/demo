window.addEventListener('scroll',()=>{
    if(document.documentElement.scrollTop > 300){
        document.getElementById('navbar').style.top = '0';
    }
    else{
        document.getElementById('navbar').style.top = '-100px';
    }
})