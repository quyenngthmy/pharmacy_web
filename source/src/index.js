import "./css/index.css";

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

// Sticky header
$(window).scroll(function(){
  if($(this).scrollTop() > 80){
      $('#header').addClass('sticky')
  } else{
      $('#header').removeClass('sticky')
  }
});

// Chatbox
$(function() {
  var INDEX = 0; 
  $("#chat-submit").click(function(e) {
    e.preventDefault();
    var msg = $("#chat-input").val(); 
    if(msg.trim() == ''){
      return false;
    }
    generate_message(msg, 'self');
    var buttons = [
        {
          name: 'Existing User',
          value: 'existing'
        },
        {
          name: 'New User',
          value: 'new'
        }
      ];
    setTimeout(function() {      
      generate_message(msg, 'user');  
    }, 1000)
    
  })
  
  function generate_message(msg, type) {
    INDEX++;
    var str="";
    str += "<div id='cm-msg-"+INDEX+"' class=\"chat-msg "+type+"\">";
    str += "          <span class=\"msg-avatar\">";
    str += "            <img src=\"https:\/\/aui.atlassian.com\/aui\/8.8\/docs\/images\/avatar-person.svg\">";
    str += "          <\/span>";
    str += "          <div class=\"cm-msg-text\">";
    str += msg;
    str += "          <\/div>";
    str += "        <\/div>";
    $(".chat-logs").append(str);
    $("#cm-msg-"+INDEX).hide().fadeIn(300);
    if(type == 'self'){
     $("#chat-input").val(''); 
    }    
    $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);    
  }  
  
  function generate_button_message(msg, buttons){    
    
    INDEX++;
    var btn_obj = buttons.map(function(button) {
       return  "              <li class=\"button\"><a href=\"javascript:;\" class=\"btn btn-primary chat-btn\" chat-value=\""+button.value+"\">"+button.name+"<\/a><\/li>";
    }).join('');
    var str="";
    str += "<div id='cm-msg-"+INDEX+"' class=\"chat-msg user\">";
    str += "          <span class=\"msg-avatar\">";
    str += "            <img src=\"https:\/\/aui.atlassian.com\/aui\/8.8\/docs\/images\/avatar-person.svg\">";
    str += "          <\/span>";
    str += "          <div class=\"cm-msg-text\">";
    str += msg;
    str += "          <\/div>";
    str += "          <div class=\"cm-msg-button\">";
    str += "            <ul>";   
    str += btn_obj;
    str += "            <\/ul>";
    str += "          <\/div>";
    str += "        <\/div>";
    $(".chat-logs").append(str);
    $("#cm-msg-"+INDEX).hide().fadeIn(300);   
    $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);
    $("#chat-input").attr("disabled", true);
  }
  
  $(document).delegate(".chat-btn", "click", function() {
    var value = $(this).attr("chat-value");
    var name = $(this).html();
    $("#chat-input").attr("disabled", false);
    generate_message(name, 'self');
  })
  
  $("#chat-circle").click(function() {    
    $("#chat-circle").toggle('scale');
    $(".chat-box").toggle('scale');
  })
  
  $(".chat-box-toggle").click(function() {
    $("#chat-circle").toggle('scale');
    $(".chat-box").toggle('scale');
  })
  
})

// Scroll to top
$(window).scroll(function(){
  if($(this).scrollTop() > 100){
      $('#scrollToTopBtn').addClass('scrollToTopBtn')
  } else{
      $('#scrollToTopBtn').removeClass('scrollToTopBtn')
  }
});
var scrollToTopBtn = document.getElementById("scrollToTopBtn");
var rootElement = document.documentElement;

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);

// Menu
(function() {
  var open = document.querySelector('.openMenu');
  var box = document.querySelector('.boxMenu');
  var close = document.querySelector('.closeMenu');

  if(open){
    open.addEventListener('click', function() {
      if (box.style.display === "none") {
          box.style.display = "flex";
      }
      else {
          box.style.display = "none";
        }
    console.log("click mở menu mobile");      
  }); 
  }
  if(close){
    close.addEventListener('click', function() {
      if (box.style.display === "flex") {
          box.style.display = "none";
      }
      else {
          box.style.display = "flex";
        }
    console.log("click đóng menu mobile");      
  });
  }
})();

// Dropdown
const initpXDropdown = () => {
  const dropdownList = document.querySelectorAll(".px-dropdown");
  window.addEventListener("click", () => {
    dropdownList.forEach((item) => {
      item.classList.remove("active-dropdown");
    });
  });
  dropdownList.forEach((item) => {
    const dropdownValue = item.querySelector(".px-dropdown-value");
    const dropdownInput = item.querySelector(".px-dropdown-input");
    const dropdownPanelOptions = item.querySelectorAll(".px-dropdown-panel p");
    dropdownInput.addEventListener("click", (event) => {
      event.stopPropagation();
      item.classList.toggle("active-dropdown");
    });
    dropdownPanelOptions.forEach((item) => {
      item.addEventListener("click", (event) => {
        dropdownInput.querySelector("input").value = event.target.innerHTML;
        dropdownValue.value = event.target.getAttribute("data-value");
      });
    });
  });
};

initpXDropdown();

// Button plus/minus
let plus_btns = document.querySelectorAll('#plus-button');
let minus_btns = document.querySelectorAll('#minus-button');
let qty_inputs = document.querySelectorAll('#quantity');

   plus_btns.forEach(btn=>{
       btn.addEventListener('click', ()=>{
           btn.previousElementSibling.value++;
       })
    })
    minus_btns.forEach(btn=>{
       btn.addEventListener('click', ()=>{
            btn.nextElementSibling.value = (btn.nextElementSibling.value == 0) ? 0 : btn.nextElementSibling.value - 1;
        })
    })
    
// Tab
    // hide all contents accept from the first div
    $('.tabContents div:not(:first)').toggle();
    // hide the previous button
    
    $('.previousTab').hide();
    $('.tabs .tab').click(function () {
        if ($(this).is(':last-child')) {
            $('.nextTab').hide();
        } else {
            $('.nextTab').show();
        }

        if ($(this).is(':first-child')) {
            $('.previousTab').hide();
        } else {
            $('.previousTab').show();
        }
        var position = $(this).position();
        var corresponding = $(this).data("id");
        // scroll to clicked tab with a little gap left to show previous tabs
        scroll = $('.tabs').scrollLeft();
        $('.tabs').animate({
            'scrollLeft': scroll + position.left - 30
        }, 200);
        // hide all content divs
        $('.tabContents .tabContent').hide();
        // show content of corresponding tab
        $('div.' + corresponding).toggle();
        // remove active class from currently not active tabs
        $('.tabs .tab').removeClass('activeTab');
        // add active class to clicked tab
        $(this).addClass('activeTab');
    });

$('.nextTab').click(function(e){
    e.preventDefault();
    $('.tab.activeTab').next('.tab').trigger('click');
});
$('.previousTab').click(function(e){
    e.preventDefault();
    $('.tab.activeTab').prev('.tab').trigger('click');
});
