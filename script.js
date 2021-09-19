setInterval(() => {
    z = new Date();
    htime = z.getHours();
    mtime = z.getMinutes();
    stime = z.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = mtime*6;
    srotation = stime*6;

    
    hour.style.transform = `rotate(${hrotation}deg)`;
    min.style.transform = `rotate(${mrotation}deg)`;
    sec.style.transform = `rotate(${srotation}deg)`;


}, 1000);
function digital() {
    location.href="Digital.html"
    
}