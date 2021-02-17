window.onload=function() {scrollFunction()};
window.onscroll = function() {scrollFunction()};
// window.onscroll = function() {myFunction()};

window.addEventListener('scroll', function(){
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height ) * 100;
        document.getElementById("indicator").style.width = scrolled + "%"; 
});


function scrollFunction(){ //스크롤 될 때, 네비게이션 바가 어떻게 보여질지 구현하는 함수 
     let header = document.getElementById('header');

     if(document.documentElement.scrollTop>70)  {
         if(!header.classList.contains('navbar-fixed')){
             header.classList.add('navbar-fixed');
             document.getElementsByTagName('body')[0].style.marginTop='70px';
             header.style.display='none';
             setTimeout(function(){
                 header.style.display='block';
             }, 40);
         }
         else{
             header.classList.remove('navbar-fixed');
             document.getElementsByTagName('body')[0].style.marginTop='0px';
         }
     }
}

function menuToggle(){    // 메뉴 토글을 눌렀을 때 호출되는 함수
     document.getElementById('menu').classList.toggle('show');
}

document.getElementById('toggleBtn').addEventListener('click', menuToggle)

/* WELCOME AREA*/

let imageSlideIndex = 1;


function imageSlideTimer(){
    plusImageSlide(1);
}
let imageTimer = setInterval(imageSlideTimer, 3000);

function plusImageSlide(n){

    clearInterval(imageTimer);
    imageTimer = setInterval(imageSlideTimer, 3000);
    showImageSlides(imageSlideIndex+=n);
}

function currentImageSlide(n){
    clearInterval(imageTimer);
    imageTimer = setInterval(imageSlideTimer, 3000);
    showImageSlides(imageSlideIndex=n);
}

function showImageSlides(n){
    let i;
    let slides=document.getElementsByClassName('image-slide');
    let dots = document.getElementsByClassName('dot');
    if(n>slides.length){
        imageSlideIndex=1;
    }
    if(n<1){
        imageSlideIndex=slides.length;
    }

    for(i=0; i<slides.length; i++){
        slides[i].style.display='none'; 
    }
    for(i=0; i<dots.length; i++){
        dots[i].className=dots[i].className.replace(' active', '');
    }

    slides[imageSlideIndex-1].style.display='block';
    dots[imageSlideIndex-1].className+=' active';
}
showImageSlides(imageSlideIndex);

// plusImageSlide(1);

document.getElementById('imagePrev').addEventListener('click', plusImageSlide.bind(null, -1));
document.getElementById('imageNext').addEventListener('click', plusImageSlide.bind(null, 1));

document.getElementById('firstDot').addEventListener('click', currentImageSlide.bind(null, 1));
document.getElementById('secondDot').addEventListener('click', currentImageSlide.bind(null, 2));
document.getElementById('thirdDot').addEventListener('click', currentImageSlide.bind(null, 3));
document.getElementById('forthDot').addEventListener('click', currentImageSlide.bind(null, 4));

/*PORTFOLIO AREA */

filterSelection('all');

function filterSelection(id){
    var x, i;
    
    x= document.getElementsByClassName('listItem');
    for(i=0; i<x.length; i++){
        removeClass(x[i], 'active');
    }
    addClass(document.getElementById(id), 'active');

    x=document.getElementsByClassName('filterItem');
    if(id=='all') id='';
    for(i=0; i<x.length; i++){
        removeClass(x[i], 'show');
        if(x[i].className.indexOf(id)>-1)
            addClass(x[i], 'show');
        
    }
}

function addClass(element, name) {
       if(element.className.indexOf(name)==-1){
           element.className+= " " + name;
       }
}

function removeClass(element, name){
    var arr;
    arr = element.className.split(" ");

    while(arr.indexOf(name)>-1){
        arr.splice(arr.indexOf(name), 1);
    }

    element.className=arr.join(" ");
}

document.getElementById('all').addEventListener('click', filterSelection.bind(null, 'all'));
document.getElementById('web').addEventListener('click', filterSelection.bind(null, 'web'));
document.getElementById('c').addEventListener('click', filterSelection.bind(null, 'c'));
document.getElementById('otherParts').addEventListener('click', filterSelection.bind(null, 'otherParts'));

function viewPortfolio(event){
    var polyNode = event.target;

    if(polyNode.tagName.toLowerCase()=='i') {polyNode=polyNode.parentNode;}
    
    var overlayNode = polyNode;
    var imageNode = overlayNode.nextElementSibling;

    var itemNode = overlayNode.parentNode;
    var mainNode = itemNode.nextElementSibling;
    var subNode = mainNode.nextElementSibling;
    var textNode = subNode.nextElementSibling;

    document.getElementById('modalImage').src=imageNode.src;
    document.getElementById('modalMain').innerHTML=mainNode.innerHTML;
    document.getElementById('modalSub').innerHTML=subNode.innerHTML;
    document.getElementById('modalText').innerHTML=textNode.innerHTML;

    document.getElementById('portfolioModal').style.display='block';
    
    

}


document.getElementById('modalClose').addEventListener('click', function(){
    document.getElementById('portfolioModal').style.display='none';
});
    
var filterItems=document.getElementsByClassName('overlay');

for(var i=0; i<filterItems.length; i++){
    filterItems[i].addEventListener('click', viewPortfolio);
}


/* REVIEW AREA */

// let reviewSlideIndex = 0;

// function reviewSlideTimer() {
//        plusReviewSlide(1);
// }

// let reviewTimer=setInterval(reviewSlideTimer, 3000);

// function plusReviewSlide(n) {
//     clearInterval(reviewTimer);
//     reviewTimer=setInterval(reviewSlideTimer, 3000);
//     showReviewSlide(reviewSlideIndex+=n);
// }

// function showReviewSlide(n) {
//     let i;
//     let review_slides=document.getElementsByClassName('review-slide');

//     if(n > review_slides.length-3){
//         reviewSlideIndex=0;
//     }

//     if(n < 0){
//         reviewSlideIndex=review_slides.length-3;
//     }

//     for(i=0; i<review_slides.length; i++){
//         removeClass(review_slides[i], 'show');
//         removeClass(review_slides[i], 'res-show');
//         addClass(review_slides[i], 'hide');
//     }

//     removeClass(review_slides[reviewSlideIndex], 'hide');
//     addClass(review_slides[reviewSlideIndex], 'res-show');
//     removeClass(review_slides[reviewSlideIndex+1], 'hide');
//     addClass(review_slides[reviewSlideIndex+1], 'show');
//     removeClass(review_slides[reviewSlideIndex+2], 'hide');
//     addClass(review_slides[reviewSlideIndex+2], 'show');
// }


// document.getElementById('reviewPrev').addEventListener('click', plusReviewSlide.bind(null, -1))
// document.getElementById('reviewNext').addEventListener('click', plusReviewSlide.bind(null, 1))

/* NAVBAR ANCHOR */

function moveTo(id){
    if(id=='brand'){
        window.scrollTo(0, 0);
    }
    else{
        window.scrollTo(0, document.getElementById(id).offsetTop - 70);
    }

    document.getElementById('menu').classList.remove('show');
}

document.getElementById('navbarBrand').addEventListener('click', moveTo.bind(null, 'brand'));
document.getElementById('navbarAbout').addEventListener('click', moveTo.bind(null, 'about'));
document.getElementById('navbarSkills').addEventListener('click', moveTo.bind(null, 'skills'));
document.getElementById('navbarPortfolio').addEventListener('click', moveTo.bind(null, 'portfolio'));
document.getElementById('navbarContact').addEventListener('click', moveTo.bind(null, 'contact'));

//backToTop
var backToTop = () => {
    // Scroll | button show/hide
    window.addEventListener('scroll', () => {
      if (document.querySelector('html').scrollTop > 100) {
        document.getElementById('go-top').style.display = "block";
      } else {
        document.getElementById('go-top').style.display = "none";
      }
    });

    document.getElementById('go-top').style.display = "block";
    // back to top
    document.getElementById('go-top').addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    })
};
backToTop();

var backToBottom = () => {
    // Scroll | button show/hide
    window.addEventListener('scroll', () => {
      if (document.querySelector('html').scrollTop > 100) {
        document.getElementById('go-bottom').style.display = "block";
      } else {
        document.getElementById('go-bottom').style.display = "none";
      }
    });

    document.getElementById('go-bottom').style.display = "block";
    // back to top
    document.getElementById('go-bottom').addEventListener('click', () => {
      window.scrollTo({
        top: 10000,
        left: 0,
        behavior: 'smooth'
      });
    })
};
backToBottom();

// var darkLight = () => {
     
//     let x = document.querySelector('#darkLight');
//     let skillsDark = document.querySelector('#skills');
    
//     Scroll | button show/hide
//     window.addEventListener('scroll', () => {
//         if (document.querySelector('html').scrollTop > 100) {
//           document.getElementById('darkLight').style.display = "block";
//         } else {
//           document.getElementById('darkLight').style.display = "none";
//         }
//     });
//      document.getElementById('darkLight').style.display = "block";
//     //darkLight
//      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
//       document.documentElement.classList.add("dark");
//       }
//       document.getElementById("darkLight").addEventListener("click",() => { 
//       document.documentElement.classList.toggle("dark");
//     })
// }

// darkLight();

let text = "예전부터 IT분야에 폭 넓게 관심이 많았으며, 항상 주어진 일에 사명감을 가지고 일을 하려고 <br>노력을 하고있으며, 부족함이 있으면 그 부족함을 채우기 위해 두 배, 세 배 더욱이 노력을 하고 있습니다!<br>포트폴리오에 방문해 주셔서 진심으로 감사드립니다!";
let cnt = 0;
let speed = 120; //글자가 찍히는 속도
let timer1 = null;  
 
function typing(){
    document.getElementById('typing').innerHTML = text.substring(0, cnt);
    cnt++;
    timer1 = setTimeout('typing()', speed);
 
    if(text.length < cnt){
        // 아래 주석으로 처리된 부분을 지우면 한번만 실행됩니다.
        clearTimeout(timer1)
        cnt = 0;
    }
}

typing();


function clickMenuItem(){

var navItem = document.getElementsByClassName('nav-item');

    for (var i = 0; i <navItem.length; i++) {
        navItem[i].addEventListener('click', function(){
        for (var j = 0; j < navItem.length; j++) {
            navItem[j].style.color = "#FFFFFF99";
        }
        this.style.color = "white";
      })
    }
}

// clickMenuItem(); 메뉴선택시 색 유지


$(document).ready(function(){ 
  $(window).scroll(function(){ 
    var scroll = $(window).scrollTop(); 
    if(scroll>300 && scroll<1080){
      $("#navbarAbout").css("color","white"),
      $(".nav-item").css("color","#FFFFFF99"); 
    }
    else{
        $("#navbarAbout").css("color","#FFFFFF99");
    }
  }) 
})


$(document).ready(function(){ 
    $(window).scroll(function(){ 
      var scroll = $(window).scrollTop(); 
      if(scroll>1081 && scroll<2572){
        $("#navbarSkills").css("color","white"),
        $(".nav-item").css("color","#FFFFFF99");
      }
      else{
          $("#navbarSkills").css("color","#FFFFFF99"); 
      }
    }) 
})

$(document).ready(function(){ 
    $(window).scroll(function(){ 
      var scroll = $(window).scrollTop(); 
      if(scroll>2573 && scroll<4700){
        $("#navbarPortfolio").css("color","white"),
        $(".nav-item").css("color","#FFFFFF99");
      }
      else{
          $("#navbarPortfolio").css("color","#FFFFFF99"); 
      }
    }) 
})

$(document).ready(function(){ 
    $(window).scroll(function(){ 
      var scroll = $(window).scrollTop(); 
      if(scroll>4701 && scroll<5600){
        $("#navbarContact").css("color","white"),
        $(".nav-item").css("color","#FFFFFF99");
      }
      else{
          $("#navbarContact").css("color","#FFFFFF99"); 
      }
    }) 
})

//email
//template_o0nlav9

$(document).ready(function() {
    emailjs.init("user_N3fqbAQ58CDyRPt9qquUc");		
    //"user_xxxxx"이 부분은 사용자마다 다르니 반드시 emailJS의 installation 화면을 확인
    $('input[name=submit]').click(function(){       	 
      
      var templateParams = {	
      //각 요소는 emailJS에서 설정한 템플릿과 동일한 명으로 작성!
            name: $('input[name=name]').val(),
            phone: $('input[name=phone]').val(), 
            email : $('input[name=email]').val(),
            message : $('textarea[name=message]').val()
                       };
                
                
     emailjs.send('gmail', 'template_yp6exdi', templateParams)
     //emailjs.send('service ID', 'template ID', 보낼 내용이 담긴 객체)
             .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert("Your message was sent successfully.");
             }, function(error) {
                console.log('FAILED...', error);
                alert("Your message has not been sent.");
             });
                


    });
    
  });