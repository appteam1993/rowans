const AllStories=[
    {
        thumUrl: "./imgs/webstory/icon1.jpg",
        imgUrl: "./imgs/webstory/app1.jpg",
        title: "",
    },
    {
        thumUrl: "./imgs/webstory/icon2.jpg",
        imgUrl: "./imgs/webstory/app6.jpg",
        title: "",
    },
    {
        thumUrl: "./imgs/webstory/icon3.jpg",
        imgUrl: "./imgs/webstory/app3.jpg",
        title: "",
    },
    {
        thumUrl: "./imgs/webstory/icon4.jpg",
        imgUrl: "./imgs/webstory/app4.jpg",
        title: "",
    },
    {
        thumUrl: "./imgs/webstory/icon5.jpg",
        imgUrl: "./imgs/webstory/app5.jpg",
        title: "",
    },
    {
        thumUrl: "./imgs/webstory/icon6.jpg",
        imgUrl: "./imgs/webstory/app6.jpg",
        title: "",
    },
    {
        thumUrl: "./imgs/webstory/icon7.jpg",
        imgUrl: "./imgs/webstory/app3.jpg",
        title: "",
    },
    {
        thumUrl: "./imgs/webstory/icon8.jpg",
        imgUrl: "./imgs/webstory/app8.jpg",
        title: "",
    },
    // {
    //     thumUrl: "http://weeapp.co.uk/images/1405/slide-2.jpg",
    //     imgUrl: "http://weeapp.co.uk/images/1398/app.jpg",
    //     title: "",
    // },
    
]




const storiesContainer = document.querySelector(".stories-container");
const storyFull = document.querySelector(".story-full");
const storyFullImage = document.querySelector(".story-full .img-story");
const storyProfileImage = document.querySelector(".story-full .profile");

const storyFullTitle = document.querySelector(".story-full .story-title");
const closeBtn = document.querySelector(".story-full .close-btn")
const leftArrow = document.querySelector(".story-full .left-arrow");
const rightArrow = document.querySelector(".story-full .right-arrow");



let currentIndex = 0;
let timer;

AllStories.forEach((s, i) => {
    const content = document.createElement("div");
    content.classList.add("content");

    const img = document.createElement("img");
    img.className = "img-story";
    img.setAttribute("src" , s.thumUrl);

    

    storiesContainer.appendChild(content);
    content.appendChild(img);

    content.addEventListener("click", () => {
        move();
        currentIndex = i;
        storyFull.classList.add("active");
        storyFullImage.setAttribute("src", s.imgUrl);
        storyProfileImage.setAttribute("src", s.thumUrl);
        content.setAttribute("background", gray);

        if(!s.title){
            storyFullTitle.style.display = "none";
        }else{
            storyFullTitle.style.display = "block";
            storyFullTitle.innerHTML = s.title;
        }
       

       

        clearInterval(timer);
        timer = setInterval(nextStory, 3000);


    });
}
);

closeBtn.addEventListener("click", () => {
    storyFull.classList.remove("active");
});

const prevStory = () => {
    if(currentIndex > 0){
        move();
        currentIndex -= 1;
        storyFullImage.setAttribute("src", AllStories[currentIndex].imgUrl);
        storyProfileImage.setAttribute("src", AllStories[currentIndex].thumUrl);
        storyFullTitle.innerHTML = AllStories[currentIndex].title;
       
        

        // storyFullTitle.setAttribute("", AllStories[currentIndex].title);
    }
}
leftArrow.addEventListener("click", () => {
    prevStory();
});

const nextStory = () =>{
    move();
    if(currentIndex < AllStories.length - 1){
        
        currentIndex += 1;
        storyFullImage.setAttribute("src", AllStories[currentIndex].imgUrl);
        storyProfileImage.setAttribute("src", AllStories[currentIndex].thumUrl);
        storyFullTitle.innerHTML = AllStories[currentIndex].title;


    }else{
        storyFull.classList.remove("active");
    }
}

rightArrow.addEventListener("click", ()  => {
    nextStory();
});



var i = 0;
function move() {
  if (i == 0) {
    // i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 30);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}