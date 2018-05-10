var usedPhotoPosts = []

function UpdatePost() {
    for(var l = 0; l < 10; l++) {
        var id = 1;
        var check = false;
        for (id; id < usedPhotoPosts.length+1; id++ ) {
            for (var i = 0; i < usedPhotoPosts.length; i++ ) {
                if(id == usedPhotoPosts[i]) {
                    check = true;
                    break;
                }
            }
            if(check == false) {
                break;
            }
            else {
                check = false;
            }
        }

        var lPP = photoPosts.getLength() + 1;

        if(id < lPP) {
            var content = document.querySelector('template.photobox').content;

            usedPhotoPosts.push(id);

            post = photoPosts.getPhotoPost(id);
            var img = post.photoLink;
            var description = post.description;
            var idteg = content.querySelector('div.blockWbg');
            idteg.setAttribute('id', id + "");
            var text = content.querySelector('span.description');
            text.textContent = description;
            var imagine = content.querySelector('img');
            imagine.setAttribute('src', img);
            imagine.setAttribute('onclick', 'ViewPost(' + id + ')');
            document.querySelector('#content').appendChild(content.cloneNode(true));
        }
    }
}

function AddPost() {
    var content = document.querySelector('template.postUp').content;
    document.querySelector('#forms').appendChild(content.cloneNode(true));


}

function AddPostUp(post) {
    //получить данные с формы
    post =    {
        id: '1',
        description: 'i love my club members.......i\'ll share another picture tomorrow',
        createdAt: new Date('2018-01-01T01:00:00'),
        author: 'qwerty',
        photoLink: '../img/1.jpg'
    }
    photoPosts.addPhotoPost(post);
    AddPostDown();
}

function ViewPost(id) {
    var content = document.querySelector('template.vPost').content;

    var post = photoPosts.getPhotoPost(id);
    var description = post.description;
    var text = content.querySelector('description');
    text.textContent = description;

    document.querySelector('#forms').appendChild(content.cloneNode(true));
}

function AddPostDown() {
    //удалить загруженый темпл
}

function DeletePost(id) {

    photoPosts.removePhotoPost(id);
    document.querySelector('.body > .align-border .content .centralInfo').removeChild();
}

function ChangePost() {

    //photoPosts.addPhotoPost(post);
}
