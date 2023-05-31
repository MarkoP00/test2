const objects=[
    {
    "image": "Image1",
    "url": "https://s7ap1.scene7.com/is/image/destqueensland/teq/consumer/global/images/destinations/sunshine-coast/blog-images/editorial-hero-banner/2018_SC_Koala_Wildlife_Australiazoo.jpg?fit=wrap&fmt=webp&qlt=75&wid=1200",
    "alt": "Image not Found",
    "title": "Koala"
    },
    {
        "image": "Image2",
        "url": "https://hips.hearstapps.com/hmg-prod/images/headshot-of-giraffe-sabi-sands-game-reserve-royalty-free-image-1573571360.jpg?crop=1.00xw:0.334xh;0,0.106xh&resize=1200:*",
        "alt": "Image not Found",
        "title": "Giraffe"
    },
    {
        "image": "Image 3",
        "url": "https://www.paigntonzoo.org.uk/wp-content/uploads/2022/07/NZ_Animal_Photos_04-22_LR-43-1024x683.jpg",
        "alt": "Image not Found",
        "title": "Lion"
    },
    {
        "image": "Image4",
        "url": "https://www.treehugger.com/thmb/XNPRrYZo52_hkmDFfPn_hGLJqis=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/motherprimary.polarbear-60ded1039709427daecca4bfbdb8ce2d.jpg",
        "alt": "Image not Found",
        "title": "Polar bear"
    },
    {
        "image": "Image5",
        "url": "https://media.4-paws.org/1/b/f/8/1bf823a2fbf2e352bb4f85c407afae2607d5329d/VP0175078-1936x1339.jpg",
        "alt": "Image not Found",
        "title": "Tiger"
    },
    {
        "image": "Image6",
        "url": "https://aldf.org/wp-content/uploads/2021/10/GettyImages-141467674-crop-1200x675.jpg",
        "alt": "Image not Found",
        "title": "Hippo"
    },
    {
        "image": "Image7",
        "url": "https://i.pinimg.com/originals/f4/56/98/f45698d7894885bc356437d8180d0fd8.jpg",
        "alt": "Image not Found",
        "title": "Fox"
    },
    {
        "image": "Image8",
        "url": "https://images.ctfassets.net/cnu0m8re1exe/6uDNNqZBtpFbFPAJCb6nrT/23bb8510abe600bf19b6fb956492f803/shutterstock_370060808.jpg",
        "alt": "Image not Found",
        "title": "Lazy koala"
    },
    {
        "image": "Image9",
        "url": "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F04%2F09%2Fbaby-elephant-51370114-2000.jpg&q=60",
        "alt": "Image not Found",
        "title": "Maki"
    },
]
   const album = document.getElementById('album');
   if(!objects.length) album.innerHTML = "No images found"
    objects.forEach((image, index ) => {
        // image.text = `Marenda broj ${index}`
        const img =`
        <div class="album-appear">
            <p> ${image.image}<p>
            <img src= "${image.url}" alt="${image.alt}"/>
            <h3>${image.title}</h3>
        </div>
        `
        album.innerHTML += img
    })