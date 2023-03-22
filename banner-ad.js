// JavaScript code to create the banner ad element
const bannerAd = document.createElement("a");
bannerAd.href = "https://google.com/";
bannerAd.target = "_blank";


// JavaScript code to add a close button to the banner ad
const closeButton = document.createElement("button");
closeButton.textContent = "X";
closeButton.addEventListener("click", function() {
  bannerAd.remove();
});

const bannerImg = document.createElement("img");
bannerImg.src = "img.jpg";
bannerImg.alt = "Banner ad";
bannerImg.addEventListener("click", function() {
    window.location.href = "https://google.com/";
});
  


bannerAd.appendChild(bannerImg);


bannerAd.appendChild(closeButton);

// JavaScript code to append the banner ad element to the container element
const bannerAdContainer = document.getElementById("banner-ad");
bannerAdContainer.appendChild(bannerAd);
