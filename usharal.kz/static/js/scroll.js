$(function() {
  
  function moveLeft() {
    $('.slider').animate({
      scrollLeft: '-=400'
    }, 300, 'swing');
  }
  
  function moveRight() {
    $('.slider').animate({
      scrollLeft: '+=400'
    }, 300, 'swing');
  }
  
  
  $(".next").on("click",function(){
    moveRight();
  });
  
  $(".prev").on("click",function(){
    moveLeft();
  });
  
  
});

// $(".finalButtonDiv button").click(() => {
//   var statusString = ['Договорная', 'Возможен Обмен', 'Отдам даром']
//   var radButAll = newPostZone.querySelectorAll('.withRadio div input')
  
  

//   var name = newPostZone.querySelector('.informationAboutProduct input').value
//   var date = 'Вчера 21:40'
//   var cost = newPostZone.querySelector('.costBlock input').value
//   var re = /(?=\B(?:\d{3})+(?!\d))/g;
//   var category = document.querySelector('.chooseCategory div')
//   var costRe = cost.toString().replace( re, ' ' ).replace('.', ',');
//   var textAr = document.querySelector("textarea").value.length
//   var loc = document.querySelectorAll('.locationInput input')[0].value.length
  
//   if((name.length >= 16) && (category.innerHTML != 'Выберите категорию') && (cost.length != 0) && (textAr >= 80)&&(loc != 0))
//   {
//     $(".active").removeClass('active')
//     $(".mainSection").addClass('active')
//     var contentBoxClone = document.querySelector('.contentBoxNew').cloneNode(true)
//     contentBoxClone.className = 'contentBox'
//     radButAll.forEach((each, index) => {
//       if(each.checked)
//       {
//           contentBoxClone.children[4].children[0].innerHTML = statusString[index]
//       }
//     })
//     contentBoxClone.children[0].children[0].src = URL.createObjectURL(file)
//     console.log(contentBoxClone.children[0]);
//     contentBoxClone.children[1].innerHTML = date
//     contentBoxClone.children[2].innerHTML = name
//     contentBoxClone.children[3].innerHTML = costRe + " &#8376"
//     document.querySelector('.adverLine').prepend(contentBoxClone)
//     newPostZone.querySelector('.informationAboutProduct input').value = ''
//     newPostZone.querySelector('.costBlock input').value = ''
//     document.querySelector("textarea").value = ''
//     document.querySelector('.chooseCategory div').innerHTML = 'Выберите категорию'
//     document.querySelectorAll('.imageOfUser')[1].src = 'img/Vector.svg'
//     document.querySelectorAll('.locationInput input')[0].value = ''
//     document.querySelector(".counter .currentValue").innerHTML = '0'
//     for(var loci = 0; loci < 4; loci++){
//       document.querySelectorAll('.locationInput input')[loci].value = ''
//     }
//     }
//     else{

//     }
  

// })
// var locationInput = document.querySelector('.locationInput input')
// locationInput.addEventListener('click', () => {
//   showModal()
// })