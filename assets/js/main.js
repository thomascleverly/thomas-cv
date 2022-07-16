$(document).ready(function(){
    let menuIsSelected = 'Home'
    $(window).scroll(function(){
        if (this.scrollY>200){
            $('#header').addClass('header-fixed')
            $('#introduce').css('paddingTop','120px')
        }
        else{
            $('#header').removeClass('header-fixed')
            $('#introduce').css('paddingTop','0')
        }

        // Up Icon
        if (this.scrollY>150){
            $('.up-icon').fadeIn()
        }
        else{
            $('.up-icon').hide()
        }

        // Scroll
        if (this.scrollY>4940){
            $('.menu-inner').removeClass('active')
            $('.menu-inner').each(function(){
                if ($(this).text()=='Contact'){
                    $(this).addClass('active')
                    menuIsSelected = 'Contact'
                }
            })
        }
        else if (this.scrollY>4150){
            $('.menu-inner').removeClass('active')
            $('.menu-inner').each(function(){
                if ($(this).text()=='Blog'){
                    $(this).addClass('active')
                    menuIsSelected = 'Blog'
                }
            })
        }
        else if (this.scrollY>3300){
            $('.menu-inner').removeClass('active')
            $('.menu-inner').each(function(){
                if ($(this).text()=='Pricing'){
                    $(this).addClass('active')
                    menuIsSelected = 'Pricing'
                }
            })
        }
        else if (this.scrollY>2500){
            $('.menu-inner').removeClass('active')
            $('.menu-inner').each(function(){
                if ($(this).text()=='Clients'){
                    $(this).addClass('active')
                    menuIsSelected = 'Clients'
                }
            })
        }
        else if (this.scrollY>780){
            $('.menu-inner').removeClass('active')
            $('.menu-inner').each(function(){
                if ($(this).text()=='Resume'){
                    $(this).addClass('active')
                    menuIsSelected = 'Resume'
                }
            })
        }
        else{
            $('.menu-inner').removeClass('active')
            $('.menu-inner').each(function(){
                if ($(this).text()=='Home'){
                    $(this).addClass('active')
                    menuIsSelected = 'Home'
                }
            })
        }
        
    })

    // Header Menu
    $('.menu-inner').click(function(){
        $('.menu-inner').removeClass('active')
        $(this).addClass('active')
        menuIsSelected = $(this).text()
    })

    $('.menu-inner').hover(function(){
        let menu = $(this).text()
        $('.menu-inner').each(function(){
            if ($(this).text()!=menuIsSelected && $(this).text()!=menu)
                $(this).css('opacity','0.4')
        })
        }, function(){
            $('.menu-inner').css('opacity','0.8')
        }
    )

    // Menu Bar Button
    $('.mobile-menu').hide()
    $('.menu-bar-btn').click(function(){
        $('.mobile-menu').fadeIn()
    })

    // Close Button
    $('.close-btn').click(function(){
        $('.mobile-menu').fadeOut()
    })

    // Resume Menu
    let resumeMenuIsSelected = 'Education'
    $('.resume-list').hide()
    $(`.${resumeMenuIsSelected.toLowerCase()}`).fadeIn()
    $('.resume-menu').click(function(){
        $('.resume-menu').removeClass('active')
        $(this).addClass('active')
        resumeMenuIsSelected = $(this).text()
        console.log(resumeMenuIsSelected)
        $('.resume-list').hide()
        if (resumeMenuIsSelected=='Professional Skills')
            $('.proskills').fadeIn()
        else
            $(`.${resumeMenuIsSelected.toLowerCase()}`).fadeIn()
    })

    $('.resume-menu').hover(function(){
        $(this).addClass('active')
        }, function(){
            $('.resume-menu').each(function(){
                if ($(this).text()!=resumeMenuIsSelected)
                    $(this).removeClass('active')
            })
        }
    )

    // Clients Menu
    let clientsMenuIsSelected = 'HTML'
    $('.clients-infor').hide()
    $(`.${clientsMenuIsSelected.toLowerCase()}`).fadeIn()
    $('.clients-menu').click(function(){
        $('.clients-menu').removeClass('active')
        $(this).addClass('active')
        clientsMenuIsSelected = $(this).text()
        $('.clients-infor').hide()
        $(`.${clientsMenuIsSelected.toLowerCase()}`).fadeIn()
    })

    // Pricing Menu
    let pricingMenuIsSelected = 'Standard'
    $('.pricing-single-list').hide()
    $(`.${pricingMenuIsSelected.toLowerCase()}`).fadeIn()
    $('.pricing-menu').click(function(){
        $('.pricing-menu').removeClass('active')
        $(this).addClass('active')
        pricingMenuIsSelected = $(this).text()
        $('.pricing-single-list').hide()
        $(`.${pricingMenuIsSelected.toLowerCase()}`).fadeIn()
    })

    // Contact Form
    $('.contact-field').each(function(){
        $(this).on('propertychange input', function (e) {
            let valueChanged = false;
            if (e.type=='propertychange') {
                valueChanged = e.originalEvent.propertyName=='value';
            } else {
                valueChanged = true;
            }
            if (valueChanged && $(this).val()=="") {
                $(`.status${$(this).attr('name')}`).text(`${$(this).attr('name')} is required.`)
            }
            else{
                $(`.status${$(this).attr('name')}`).text('')
            }
        });
    })

    $('.emailText').on('propertychange input', function (e) {
        let valueChanged = false;
        let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (e.type=='propertychange') {
            valueChanged = e.originalEvent.propertyName=='value';
        } else {
            valueChanged = true;
        }
        if (valueChanged && emailRegex.test($(this).val())==false && $(this).val()!="") {
            $(`.status${$(this).attr('name')}`).text(`invalid email address.`)
        }
    });

    // Send Message Button
    $('.send-btn').click(function(){
        $('.contact-field').each(function(){
            if ($(this).val()==""){
                $(`.status${$(this).attr('name')}`).text(`${$(this).attr('name')} is required.`)
            }
            else if($(this).attr('name')!='Email'){
                $(`.status${$(this).attr('name')}`).text('')
            }
        })
    })
})

let slideIndex = 1;
showDivs(slideIndex);
function plusDivs(n) {
  showDivs(slideIndex += n);
}
function btnShowDivs(n) {
    var i;
    var x = $(".tes-slider")
    var y = $(".tes-radio-btn")
    $(x).hide()
    $(y).removeClass('active')
    $(x[n]).fadeIn()
    $(y[n]).addClass('tes-radio-btn active') 
    slideIndex = n+1;
}
function showDivs(n) {
  var i;
  var x = $(".tes-slider")
  var y = $(".tes-radio-btn")
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  $(x).hide()
  $(y).removeClass('active')
  $(x[slideIndex-1]).fadeIn()
  $(y[slideIndex-1]).addClass('tes-radio-btn active') 
}


let typed = new Typed(".job-typing-letters", {
    strings: ["Student.","Web Developer."],
    typeSpeed :100,
    backSpeed :60,
    loop :true
})