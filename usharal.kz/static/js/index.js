const showMoreButtonMainPage = $(".buttonLine button")
const showMoreButtonFavPage = $(".showMoreFav")
const allAdvert = $(".adverLine")
const favAdvert = $(".mainPart")

var allAdvertHeight = allAdvert.height()
var favAdvertHeight = favAdvert.height()
const allMessageLink = document.querySelectorAll('.messageLink')
const allMessagesType = document.querySelectorAll('.messagesType')
const btnSABall = document.querySelectorAll('.btnSAB')
// const checkboxFunc = () => {
//     var chooseAll = document.getElementById("check")
//     if(chooseAll.checked){
//         $('body input:checkbox').prop('checked', true);
//     }
//     else{
//         $('body input:checkbox').prop('checked', false);
//     }
// }

var itForBut = 2
var  itForButFav = 2
showMoreButtonMainPage.click(function(){
    if(itForBut < ($(".adverLine .contentBox").length)/4){
        itForBut++
        allAdvertHeight += 360
        allAdvert.css('height', allAdvertHeight)
        window.scrollBy(0, 360)
    }
})
// showMoreButtonFavPage.click(function(){
//     if(itForButFav < ($('.mainPart .contentBox').length)/4){
//         itForButFav++
//         favAdvertHeight += 360
//         favAdvert.css('height', favAdvertHeight)
//         window.scrollBy(0, 360)
//     }
// })
$(".up").click(function(){
    window.scrollTo(0, 0)
})
const list = ["ru", "kz"]
const langAll = document.querySelectorAll(".langSpan")
langAll.forEach((lang, index) => {
    lang.addEventListener('click', () => {
        
        if(index == 0){
            langAll[1].classList.remove('chosen')
        }
        else{
            langAll[0].classList.remove('chosen')
        }
        lang.classList.add('chosen')
        changeURLLang(index)
        changeLang()
    })
});
const changeURLLang = (index) => {
    let lang = list[index];
    location.href = window.location.pathname + '#' + lang;
}
const changeLang = () => {
    let hash = window.location.hash;
    hash = hash.substr(1);
    for (let key in langArr) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            if(elem.classList.contains('lng-placeholder')){
                elem.setAttribute("placeholder", langArr[key][hash])
            }
            else
            {
                elem.innerHTML = langArr[key][hash];
            }
        }

    }
}
// const classes = {
//     ".text": ".mainSection",
//     ".message": ".messageSection",
//     ".favourite": ".favouriteSection",
//     ".lng-myPosts":".messageSection",
//     ".lng-payment": ".messageSection",
//     ".lng-myProfile": ".messageSection",
//     ".add": ".pageForNewPost"
// }
// const showSections = (someClass) => {
//     if(someClass in classes){
//         $(someClass).click(function(e){
//             $(".active").removeClass("active")
//             $(classes[someClass]).addClass("active")
            
//         })
//     }
// }
// const blanksToggle = (classClick) => {
//     $(classClick).click(function(){
//         document.querySelector(".activePart").classList.remove('activePart')
//         document.querySelector(classClickObject[classClick]).classList.add('activePart')
//         document.querySelector('.activeLink').classList.remove('activeLink')
//         document.querySelectorAll(classClick)[1].classList.add("activeLink")
//         document.querySelector(".messageText").innerHTML = document.querySelector(classClick).innerHTML
//     })
// }

// blanksToggle(".lng-myPosts")
// blanksToggle(".lng-payment")
// blanksToggle(".lng-myProfile")
// const classClickObject = {
//     ".lng-myPosts" : ".myPosts",
//     ".lng-payment" : ".payment",
//     ".lng-myProfile" : ".myProfile"
// }
// $(".message").click(function(){
//     document.querySelector(".activePart").classList.remove('activePart')
//     document.querySelector(".mainMessage").classList.add('activePart')
//     document.querySelector(".sell").classList.add("activeLink")
//     document.querySelector(".messageText").innerHTML = document.querySelector(".message").innerHTML
// })
// const messages = document.querySelectorAll(".messages") 
// messages.forEach((message) => {
//     message.addEventListener('click', () => {
//         var temp =  document.querySelector(".active")
//         if(temp.classList.contains("messageSection")){
//             document.querySelector(".activePart").classList.remove('activePart')
//             document.querySelector(".mainMessage").classList.add('activePart')
            
//         }
//         else{
//             document.querySelector(".active").classList.remove('active')
//             document.querySelector(".messageSection").classList.add('active')
           
//         }
//         document.querySelector(".activePart").classList.remove("activePart")
//         document.querySelector(".mainMessage").classList.add('activePart')
//         document.querySelector(".activeLink").classList.remove("activeLink")
//         document.querySelector(".message").classList.add("activeLink")
//         document.querySelector(".sell").classList.add("activeLink")
//         document.querySelector(".messageText").innerHTML = document.querySelector(".message").innerHTML

//     })
// })

// for(classOn in classes){
//     showSections(classOn)
// }

// const clickLick = (someArray) => {
//     someArray.forEach((each) => {
//         each.addEventListener('click', () => {
//             links(someArray)
//             each.classList.add("activeLink")
//         })
//     })
// }
// const links = (smth) => {
//     smth.forEach(link => {
//         link.classList.remove("activeLink")
//     })
// }
// const myPosts = document.querySelectorAll(".allStatusOfPosts span")
// const paymentStatus = document.querySelectorAll(".catg")
// clickLick(btnSABall)
// clickLick(allMessageLink)
// clickLick(allMessagesType)
// clickLick(myPosts)
// clickLick(paymentStatus)

///////newButtons
// const allContent = document.querySelectorAll(".mainMyPostsContent .allMyContent")
// var allMyContent = document.querySelectorAll(".myContent")
// const nextMyButton = document.querySelector('.myContentAngle .fa-angle-right')
// const prevMyButton = document.querySelector('.myContentAngle .fa-angle-left')
// var el = document.querySelectorAll(".newCreatedButton")
// var target =document.querySelector(".chosenButton")
// var el = document.querySelectorAll(".newCreatedButton")
// var index = [...el].indexOf(target)

// var koef = 1
// const koefEnd = allContent.length%6

// var allElem = document.querySelectorAll("#check")

// //fill
// var isNotFull = false
// $(nextMyButton).click(function(){
//     target =document.querySelector(".chosenButton")
//     el = document.querySelectorAll(".newCreatedButton")
//     index = [...el].indexOf(target)
//     if(target.innerHTML != allContent.length){
        
//         if($(".newCreatedButton").last().hasClass("chosenButton")){
//             $(".chosenButton").removeClass("chosenButton")
//             el[0].classList.add("chosenButton")
//             for(var it = 6*koef + 1; it < 6*koef + 7; it++){
                
//                 if(it - 1 == allContent.length){
//                     var asi = koefEnd
//                     for(asi; asi<6; asi++){
//                         el[asi].innerHTML = ""
//                         el[asi].classList.add("lastButtons")
//                     }
//                     break
//                 }
//                 el[it-(6*koef+1)].innerHTML = it
//             }
//             koef++
//         }
//         else{
//             $(".chosenButton").removeClass("chosenButton")
//             el[index + 1].classList.add("chosenButton")
//             pagesOfUsersContent(index + 1)
//         }
//     }
    
    
    
// })
// $(prevMyButton).click(function(){
//     target =document.querySelector(".chosenButton")
//     el = document.querySelectorAll(".newCreatedButton")
//     index = [...el].indexOf(target)
    
//     if(target.innerHTML != 1){
//         if(index  == 0){
//             $(".chosenButton").removeClass("chosenButton")
//             el[5].classList.add("chosenButton")
//             $(".lastButtons").removeClass("lastButtons")
//             var t = +el[0].innerHTML
//             for(var min = 5; min >= 0; min--){
//                 el[min].innerHTML = t-(6-min)
                
//             }
//             koef--
//         }
//         else{
//             $(".chosenButton").removeClass("chosenButton")
//             el[index - 1].classList.add("chosenButton")
//             pagesOfUsersContent(index-1)
//         }
//     }
    
// })
// const pagesOfUsersContent = (count) => {
    
//     allContent.forEach((each) => {
//         each.classList.remove("visible")
//     })
//     allContent[count].classList.add("visible")
// }
// const doubleLeft = $(".myContentAngle .fa-angles-left")
// const doubleRight = $(".myContentAngle .fa-angles-right")
// if(allContent.length <= 6){
//     doubleLeft.css("display", "none")
//     doubleRight.css("display", "none")
// }
// else{
//     doubleLeft.css("display", "unset")
//     doubleRight.css("display", "unset")
// }

// doubleLeft.click(function(){
//     $(".lastButtons").removeClass("lastButtons")
//     for(var iter = 0; iter < 6; iter++){
//         el[iter].innerHTML = iter + 1
//     }
//     $(".chosenButton").removeClass("chosenButton")
//     el[0].classList.add("chosenButton")
//     koef = 1
//     pagesOfUsersContent(0)
// })
// doubleRight.click(function(){
//     var len = allContent.length-koefEnd+1
//     for(var i = 0; i < 6; i++){
//         if(i < koefEnd){
//             el[i].innerHTML = len++
//         }
//         else{
//             el[i].classList.add("lastButtons")
//         }
//     }
//     $(".chosenButton").removeClass("chosenButton")
//     el[koefEnd-1].classList.add("chosenButton")
//     pagesOfUsersContent(allContent.length -1)
// })
const postsCateg = document.querySelectorAll(".allStatusOfPosts span")
const catBlocks = document.querySelectorAll(".findWithThat")
postsCateg.forEach((eachCatrg, index) => {
    eachCatrg.addEventListener('click', () => {
        for(var sm = 0; sm < 3;sm++){
            if(catBlocks[sm].classList.contains("mpc") == false){
                catBlocks[sm].classList.add("mpc")
            }
        }
        catBlocks[index].classList.remove("mpc")
    })
}
    )
    const replacement = () => {
        var allContent = document.querySelectorAll(".mainMyPostsContent .allMyContent")
        for(var i = 0; i <allContent.length; i++){
            while(allContent[i].childElementCount != 4){
                if(i + 1 != allContent.length){
                    var imElem = allContent[i+1].querySelector('.myContent')
                    allContent[i].insertAdjacentElement('beforeend', imElem)
                }
                else{
                    
                    break
                }
            }
            if(allContent[i].childElementCount == 0){
                allContent[i].remove()
               // koefEnd--
            }
        }
        
        
     }
// const trash = $(".absolutelyNotYou")
// //replacement()
// trash.click(() => {
//     for(var i = 1; i < allElem.length; i++){
//         if(allElem[i].checked){
//             allMyContent[i-1].remove()
//         }
//     }
//     replacement()
// })
// let file;
// function showFile(input) {
//     file = input.files[0];
//     // $(".imageOfUser").children[1].attr("src",  URL.createObjectURL(file))
//     document.querySelectorAll('.imageOfUser')[1].src = URL.createObjectURL(file)
//     //alert(file.src)
//   }

var forFavBox = 0
function fill(elem){
    elem.classList.toggle("fa-regular")
    elem.classList.toggle("fa")
    // var favZone = document.querySelector('.mainPartWithButton .mainPart')
    // console.log(favZone);
    // var temp = elem.parentNode.parentNode
    // if(elem.classList.contains('fa')){
       
        
    //     var contentBoxFav = temp.cloneNode(true)
    //     favZone.prepend(contentBoxFav)
    // }
    // else{
        
    //     // if(favZone.hasChildNodes(temp)){
    //     //    console.log(favZone.c);
    //     //     // favZone.removeChild(elem)
    //     // //    console.log('favZone.removeChild(elem): ', favZone.removeChild(elem));
    //     // }
    //     console.log(favZone.contains(temp));
    // }
    
}   
// var newPostZone = document.querySelector('.pageForNewPost .mainBody')

function myFunction(div) {
    //document.querySelector(`.show`).classList.remove("show");
    document.querySelector(`.${div} #myDropdown`).classList.toggle("show");
    
}
var np = false
const showModal = () => {
    
    $('.shadow').css('display', 'flex')
}
const modal = (str) => {
    showModal()
    $('section').css('position', 'fixed')
    document.querySelectorAll('.ul')[0].style.display = 'unset'
    document.querySelectorAll('.ul')[1].style.display = 'none'
    if(str == 'newPost'){
        np = true
    }
    
}
  var listClassOb = {
    'wholeList-btn':'wholeList-content',
    'location-btn':'location-content'
  }
  window.onclick = function(event) {
    if(event.target.matches('.shadow')){
        if (!event.target.matches('.location-btn')) {
            toggleId(listClassOb['location-btn'])
            $('.shadow').css('display', 'none')
            $('section').css('position', 'sticky')
          
          console.log();
          }
          if (!event.target.matches('.wholeList-btn')) {
            toggleId(listClassOb['wholeList-btn'])
          }
          
    }
  }

  const toggleId = (idClass) => {
    var dropdowns = document.getElementsByClassName(idClass);
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
  }
var categories = document.querySelectorAll('.category')
categories.forEach((category, index) => {
    category.addEventListener('click' , () => {
        document.querySelector('.wholeList-btn').innerHTML = categories[index].children[1].innerHTML + ' <i class="fas fa-angle-down arrow"></i>'  
    })
})
var a = document.querySelector('#myDropdown a')
a.addEventListener('click', () => {
    console.log(a.parentElement.previousElementSibling);
    a.parentElement.previousElementSibling.innerHTML = a.innerHTML + ' <i class="fas fa-angle-down arrow"></i>'
})
window.onload = () => {
    let inputSearch = document.querySelector('.inputModal input')
    
    inputSearch.oninput = function(){
        let value = this.value.trim().toLowerCase()
        let list = document.querySelectorAll('.ul li')
        console.log(list);
        value
            ?list.forEach(elem => {
                elem.innerText.toLowerCase().search(value) == -1
                    ?elem.classList.add('hide')
                    :
                        elem.classList.remove('hide');
                
            })
            : list.forEach(elem => {
                elem.classList.remove('hide')
            })


    }
    
    
}
var liList  =document.querySelectorAll('.ul li')
liList.forEach(each =>{
    each.addEventListener('click', () => {
        outLi(each,true)
    }) 
    each.addEventListener('mouseover', () => {
        outLi(each, false)
    }) 
       
})
const outLi = (each, boolValue) => {
    if(boolValue){
        $('.shadow').css('display', 'none')
        var text = each.innerHTML
        if(text.includes('Казахстанская')){
            text = text[0] + 'KO'
        }
        if(document.querySelectorAll('.ul')[0].style.display == 'unset'){
            if(np){
                document.querySelector('.locationInput input').value = text
                np = false
            }
            else{
                document.querySelector('.location-btn').innerHTML = text
            }
        }
        else{
            document.querySelector('.chooseCategory div').innerHTML = text
        }
        $('section').css('position', 'sticky')
    }
    else{
        var text = each.innerHTML
        document.querySelector('.inputModal input').value = text
    }
    
        
        
}
// var chooseCategory = document.querySelector('.chooseCategory div')
// chooseCategory.addEventListener('click', () => {
//     console.log(document.querySelectorAll('.ul')[1]);
//     document.querySelectorAll('.ul')[0].style.display = 'none'
//     document.querySelector('.inputModal input').value = ''
//     var needUl = document.querySelectorAll('.ul')[1]
//     needUl.style.display = 'unset'
//     $('section').css('position', 'fixed')
//     showModal()
// })