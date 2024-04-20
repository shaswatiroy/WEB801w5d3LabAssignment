const images = [
    { id:"img_1", src: "https://cdn12.picryl.com/photo/2016/12/31/dog-cat-enmity-animals-79d57a-1024.jpg", alt: "Description of image 1", caption: "DOG AND CAT", description: "Black and white dog", infoText: "They like playing together"},
    { id:"img_2", src: "https://miro.medium.com/v2/resize:fit:1400/1*gGDNpBBaTSMXVBjSJetY7g.jpeg", alt: "Description of image 2", caption: "DOG AND CAT SLEEPING", description: "Sleeping dog and cat", infoText: "They like playing together"},
    { id:"img_3", src: "https://www.collierescue.net/wp-content/uploads/2023/12/Inspire-3.jpg", alt: "Description of image 3", caption: "SMILING DOG", description: "Standing dog", infoText: "Loyal, fearless and strong companion"},
    { id:"img_4", src: "https://www.ballantynevet.com/hubfs/Blog%20Images/Pet%20Allergies-rawpixel-5926086.jpg#keepProtocol", alt: "Description of image 4", caption: "DOG GRINNING", description: "Cute labrador", infoText: "They like playing together"},
    { id:"img_5", src: "https://ottawahumane.ca/wp-content/uploads/2015/01/a156303-star-2.jpg", alt: "Description of image 5", caption: "TORTOISESHELL CAT", description: "Kitten", infoText: "Fiesty little fur ball"},
    { id:"img_6", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZEj4YCUBGRP78uJfobXHnDrmV_bwh6cBBk9rxAS2v-JB3ybcNjqa4QsV2OpD2DvZ5XzY&usqp=CAU", alt: "Description of image 6", caption: "PUPPIES", description: "Playful pups", infoText: "They like playing together"},
    { id:"img_7", src: "https://res.cloudinary.com/petrescue/image/upload/v1668409268/mlawsheljmbqn0mqeerd.jpg", alt: "Description of image 7", caption: "DOG NAPPING", description: "Sleepy brown dog", infoText: "Low maintenance and loveable"},
    { id:"img_8", src: "https://www.stockvault.net/data/2016/06/01/201124/preview16.jpg", alt: "Description of image 8", caption: "THREE CATS", description: "Brown and white cats", infoText: "Fluffy and sweet for endless cuddles"},
    { id:"img_9", src: "https://www.collierescue.net/wp-content/uploads/2023/10/Sprout-1.jpg", alt: "Description of image 9", caption: "DOG 2", description: "Happy pup", infoText: "Adorable, silly and loving companion"},
    { id:"img_10", src: "https://barnlake.com/images/slideshow/002Merril.jpg", alt: "Description of image 10", caption: "4 DOGS", description: "Dogs with their owner", infoText: "Developing trust and bonding with in-home training"}
];

let galleryHTML = images.map(image => 
    `<li class="photo"><a href="#/" class="lightbox-toggle">
    <img id="${image.id}"src="${image.src}" alt="${image.alt}"></a>
    <caption>${image.caption}</caption>
    <div class="description">${image.description}</div></li>`
).join('');
document.querySelector('#gallery_list').innerHTML = galleryHTML;

var descriptionElements = document.getElementsByClassName('description');
var closeLink = document.getElementById('closeLink');
var infoBox = document.getElementById('infoBox');
var infoCaption = document.getElementById('infoCaption');
var infoText = document.getElementById('infoText');

for(let i = 0; i < descriptionElements.length; i++) {
    descriptionElements[i].addEventListener('click', function(e) {
        infoCaption.innerText = images[i].caption;
        infoText.innerText = images[i].infoText;
        infoBox.style.display = 'block';
    });
}

closeLink.addEventListener('click', function(e) {
    e.preventDefault();
    infoBox.style.display = 'none';
});

/* JQuery */
$(document).ready(function(){
    /* Open lightbox on button click */
    $('.lightbox-toggle img').click(function(){
        $('.backdrop').animate({'opacity':'.50'}, 300, 'linear').css('display', 'block');
        $('.box').fadeIn();

        //Check if lightbox has an image
        if ($('.box').contents('img')) {
            $('.box').contents().remove('img'); //If true, clear image
        }

        //Get text content in attribute
        var imageID = $(this).attr('id').split('img_')[1]; //or var altvalue = $(this).attr('alt');
        var img = $(`.photo:nth-child(${imageID}) img`).clone(); //Duplicate DOM element
        $('.box').append(img); //Insert duplicated element in another element
    });

    /* Click to close lightbox */
    $('.close, .backdrop').click(function(){
        $('.backdrop').animate({'opacity':'0'}, 300, 'linear', function(){
            $('.backdrop').css('display', 'none');
        });
        $('.box').fadeOut();
    });
});