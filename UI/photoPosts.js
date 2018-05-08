var photoPosts = (function() {
    var photoPosts = [
        {
            id: '1',
            description: 'i love my club members.......i\'ll share another picture tomorrow',
            createdAt: new Date('2018-01-01T01:00:00'),
            author: 'qwerty',
            photoLink: '../img/1.jpg'
        },
        {
            id: '2',
            description: 'my new year\'s resolution is to pretend i have the willpower to magically fix all my problems',
            createdAt: new Date('2018-01-01T01:00:00'),
            author: 'Yukinon',
            photoLink: '../img/2.jpg'
        },
        {
            id: '3',
            description: 'i\'ll be inside my blanket mountain, if winter knocks tell them i\'m not home thanks ',
            createdAt: new Date('2018-01-01T01:00:00'),
            author: 'qwerty',
            photoLink: '../img/3.jpg'
        },
        {
            id: '4',
            description: 'eating candy till you feel sick then having "one more piece" every 5 minutes',
            createdAt: new Date('2018-01-01T01:00:00'),
            author: 'qwerty',
            photoLink: '../img/4.jpg'
        },
        {
            id: '5',
            description: 'morninggg ❤️ here\'s a little present to help you through the day',
            createdAt: new Date('2018-01-01T01:00:00'),
            author: 'Kurisu',
            photoLink: '../img/5.jpg'
        },
        {
            id: '6',
            description: 'you\'re cute when you smile so here\'s a smile for you ❤️',
            createdAt: new Date('2018-01-01T01:00:00'),
            author: 'Yukinon',
            photoLink: '../img/6.jpg'
        },
        {
            id: '7',
            description: 'i love fridayyy~ nothing bad can happen to you if you spend your friday the 13th relaxing at home ❤️',
            createdAt: new Date('2018-01-01T01:00:00'),
            author: 'qwerty',
            photoLink: '../img/7.jpg'
        },
        {
            id: '8',
            description: 'ummm what is happening??? i have so many followers???? i\'ve been really really busy w/ the club but thank you so much i\'m gonna cry omg',
            createdAt: new Date('2018-01-01T01:00:00'),
            author: 'Yukinon',
            photoLink: '../img/8.jpg'
        },
        {
            id: '9',
            description: 'the club is open!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
            createdAt: new Date('2018-01-01T01:00:00'),
            author: 'Kurisu',
            photoLink: '../img/9.jpg'
        },
        {
            id: '10',
            description: 'umm, what does it mean for someone to be "in beta"? i keep hearing that???',
            createdAt: new Date('2018-01-01T01:00:00'),
            author: 'Kurisu',
            photoLink: '../img/10.jpg'
        },
        {
            id: '11',
            description: 'i don\'t have a scary-looking face, do i...? i wish i could figure out how to be more approachable',
            createdAt: new Date('2018-01-01T01:00:00'),
            author: 'Yukinon',
            photoLink: '../img/11.jpg'
        },
        {
            id: '12',
            description: 'reducing meat consumption is an easy way to help save the world!',
            createdAt: new Date('2018-01-01T01:00:00'),
            author: 'Kurisu',
            photoLink: '../img/12.jpg'
        },
        {
            id: '13',
            description: 'i heard that some people have been talking about the literature club!!! maybe we\'ll be getting new members soon? o(>ω<)o',
            createdAt: new Date('2018-01-01T01:00:00'),
            author: 'Albedo',
            photoLink: '../img/13.jpg'
        },
        {
            id: '14',
            description: 'If I can\'t hear the sound of your heartbeat What do you call love in your reality?',
            createdAt: new Date('2018-01-01T01:00:00'),
            author: 'qwerty',
            photoLink: '../img/14.jpg'
        },
        {
            id: '15',
            description: 'jisu did an amazing drawing of me!!!! so excited to share it with everyone~',
            createdAt: new Date('2018-01-01T01:00:00'),
            author: 'Kurisu',
            photoLink: '../img/15.jpg'
        },
        {
            id: '16',
            description: 'it\'s so sad when you have friends who you can tell really want to share their emotions but they don\'t know how...',
            createdAt: new Date('2018-01-01T01:00:00'),
            author: 'Albedo',
            photoLink: '../img/16.jpg'
        }, {
            id: '17',
            description: 'i\'m bored...',
            createdAt: new Date('2018-01-01T01:00:00'),
            author: 'Albedo',
            photoLink: '../img/17.jpg'
        },
        {
            id: '18',
            description: 'also finally got on twitter......now to find some real people to follow hehe',
            createdAt: new Date('2018-01-01T01:00:00'),
            author: 'Yukinon',
            photoLink: '../img/18.jpg'
        },
        {
            id: '19',
            description: 'today\'s my favorite day!!!!! ❤️❤️❤️❤️❤️',
            createdAt: new Date('2018-01-01T01:00:00'),
            author: 'Kurisu',
            photoLink: '../img/19.jpg'
        },
        {
            id: '20',
            description: 'the club is open!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
            createdAt: new Date('2018-01-01T01:00:00'),
            author: 'Yukinon',
            photoLink: '../img/20.jpg'
        }
    ];

    function compareDates(a, b) {
        return a.createdAt - b.createdAt;
    }



    function validatePhotoPost(post) {
        if (!post.description || post.description.length >= 200)
            return false;
        if (!post.createdAt || !post.author || !post.photoLink)
            return false;
        return post.author.length != 0 && post.photoLink.length != 0;
    }

    function getPhotoPosts(skip, top, filterConfig) {
        if (filterConfig.author)
            result = photoPosts.filter(function (a) {
                return a.author == filterConfig.author;
            });
        if (filterConfig.createdAt)
            result = photoPosts.filter(function (a) {
                return a.createdAt == filterConfig.createdAt;
            });
        result.sort(compareDates);
        return result.slice(skip, skip + top);
    }

    function addPhotoPost(photoPost) {
        if (validatePhotoPost(photoPost)) {
            photoPosts.push(photoPost);
            return true;
        }
        return false;
    }

    function removePhotoPost(id) {
        photoPosts.splice(photoPosts.indexOf(getPhotoPost(id)), 1);
    }

    function editPhotoPost(id, photoPost) {
        post = getPhotoPost(id);
        photoPost.createdAt = post.createdAt;
        photoPost.author = post.author;
        photoPost.id = post.id;
        if (validatePhotoPost(photoPost)) {
            post.description = photoPost.description;
            post.photoLink = photoPost.photoLink;
            return true;
        }
        return false;
    }

    return {
        getPhotoPost: function(id) {
        return photoPosts.find(
            function (item, i, arr) {
                return item.id == id;
            }
        )
    },

        getPhotoPosts: function(skip, top, filterConfig) {
        if (filterConfig.author)
            result = photoPosts.filter(function (a) {
                return a.author == filterConfig.author;
            });
        if (filterConfig.createdAt)
            result = photoPosts.filter(function (a) {
                return a.createdAt == filterConfig.createdAt;
            });
        result.sort(compareDates);
        return result.slice(skip, skip + top);
    },

        addPhotoPost: function(photoPost) {
        if (validatePhotoPost(photoPost)) {
            photoPosts.push(photoPost);
            return true;
        }
        return false;
    },

        removePhotoPost: function(id) {
        photoPosts.splice(photoPosts.indexOf(getPhotoPost(id)), 1);
    },

        editPhotoPost: function(id, photoPost) {
        post = getPhotoPost(id);
        photoPost.createdAt = post.createdAt;
        photoPost.author = post.author;
        photoPost.id = post.id;
        if (validatePhotoPost(photoPost)) {
            post.description = photoPost.description;
            post.photoLink = photoPost.photoLink;
            return true;
        }
        return false;
    },

        getLength: function () {
            return photoPosts.length;
        }
    }
})();






