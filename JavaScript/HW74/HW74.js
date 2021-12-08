(function () {
    'use strict';

    const goButton = $('#go');
    const theUserInput = $('#tag');
    const thePictures = $('#pictures');
    const pictureImg = $('#picture img');
    const pictureTitle = $('#picture h2');
    const theRight = $('#right');
    const theLeft = $('#left');
    let pictures;
    let index = 0;

    function refreshPicture() {
        //pictureImg.attr('src', pictures[index].media.m.replace('_m', ''));
        pictureImg.attr('src', pictures[index].src);
        pictureImg.attr('alt', pictures[index].title);
        pictureTitle.text(pictures[index].title);
    }

    goButton.click(() => {
        $.getJSON(`https://api.flickr.com/services/feeds/photos_public.gne?&format=json&jsoncallback=?`, { tags: theUserInput.val() })
            .then(pictures => {
                console.log(pictures)

                // pictures.items.forEach(element => {

                //     thePictures.append(`<div><h4>${element.title}</h4><img src="${element.media.m}"></div>`)

                // });
                

                thePictures.append(`<div><h4>${pictures.items[0].title}</h4><img src="${pictures.items[0].media.m}"></div>`)
                theRight.click(() => {
                    if (--index < 0) {
                        index = pictures.length - 1;
                    }
                    refreshPicture();
                });
            })

    })
   




}())