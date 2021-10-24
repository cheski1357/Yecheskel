
async function videoFunction() {

    const response = await fetch('songs.json');
    const songs = await response.json();
   const theVideoBox = document.getElementById('videoBox');



    songs.forEach(element => {

        const theVideo = document.createElement('video');
        theVideo.src = element.url;
        
       
        theVideoBox.appendChild(theVideo)

        theVideo.addEventListener('click', () => {
            theVideo.play();
        })
    
    });

}
videoFunction();
