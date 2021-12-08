(async function () {
    'use strict';

    const watchVideo = $('#video');
    const videoList = $('#sidebar ul');
    
    async function loadVideos() {
        const request = await fetch('videos.json')
        return await request.json();
    }

    function populateVideoList(videos) {

        videos.forEach(element => {
            const theLi = $(`<li>
            <span>${element.title}</span>
            <img src="${element.img}"></li>`)
                .appendTo(videoList)
                .click(function () {
                     

                    watchVideo.attr('src', videos.url);

                });




        });
    }


    const videos = await loadVideos();
    populateVideoList(videos);



}())