// image source array
var imgArr = ["https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/new-ghost-white-fr-3-4-1-1598911711.jpg",
"https://upload.wikimedia.org/wikipedia/commons/d/d1/2018_Ford_Mustang_GT_5.0.jpg",
"https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200",
"https://carwow-uk-wp-3.imgix.net/18015-MC20BluInfinito-scaled-e1666008987698.jpg",
"https://carnetwork.s3.ap-southeast-1.amazonaws.com/file/285b15eb44cd4df7a747e051383638a7.jpg",
"https://imgcdnblog.carmudi.com.ph/wp-content/uploads/2021/08/18102413/maserati-mc20-1.png",
"https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Porsche-Taycan-190820221318.jpg&w=872&h=578&q=75&c=1"];

// getting all image tags. First one is main, rest 5 are thumbnail images
var images = document.getElementsByTagName("img");

// setting up initial main image 
images[0].src = imgArr[0];
// setting up initial tumbnail images
for(let i=0; i<5; i++){
    images[i+1].src = imgArr[i];
}

// Selecting thumbnail image will display in main image   
function setMainImage(event){
    var targetImg = event.target;
    images[0].src = targetImg.src;
}

var thumbnailDiv = document.getElementById("thumbBar");
thumbnailDiv.addEventListener("click",setMainImage);