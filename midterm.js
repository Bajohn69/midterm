
// let nam = prompt('請輸入姓名');
// $('.test1').text(nam)


// console.log($('body').width());

$('#btn').click(function (e) {
    if($('body').width() > 576){
        $('h1').css('color','red')
    }else{
        $('h1').css('color','blue')
    }
})


let num_li = $("li").length
n = 1
moving = 0
$(window).mousewheel(function (e) {
    $('html, body').stop()
        if(moving == 0){
            moving = 1
        if(e.deltaY == -1){
            if(n < num_li)
                n++
        }else{
            if(n > 1){
                n--
            }
        }
    }
    $('html, body').animate({'scrollTop':$('.p0' + n).offset().top}, function(){moving = 0})
    console.log(n);
})

//根據捲軸的位置改變右方導覽列游標的顏色
$(window).scroll(function () {
    if ($(window).scrollTop() >= $(".p01").offset().top && $(window).scrollTop() < $(".p02").offset().top) {
        $(".nav li").css("background-color", "transparent")//除了被點擊到的游標，其他都恢復成原來的顏色
        $(".nav li:eq(0)").css("background-color", "#fff")
    } else if ($(window).scrollTop() >= $(".p02").offset().top && $(window).scrollTop() < $(".p03").offset().top) {
        $(".nav li").css("background-color", "transparent")//除了被點擊到的游標，其他都恢復成原來的顏色
        $(".nav li:eq(1)").css("background-color", "#fff")
    } else if ($(window).scrollTop() >= $(".p03").offset().top && $(window).scrollTop() < $(".p04").offset().top) {
        $(".nav li").css("background-color", "transparent")//除了被點擊到的游標，其他都恢復成原來的顏色
        $(".nav li:eq(2)").css("background-color", "#fff")
    } else if ($(window).scrollTop() >= $(".p04").offset().top && $(window).scrollTop() < $(".p05").offset().top) {
        $(".nav li").css("background-color", "transparent")//除了被點擊到的游標，其他都恢復成原來的顏色
        $(".nav li:eq(3)").css("background-color", "#fff")
    } else if ($(window).scrollTop() >= $(".p05").offset().top && $(window).scrollTop() < $(".p06").offset().top) {
        $(".nav li").css("background-color", "transparent")//除了被點擊到的游標，其他都恢復成原來的顏色
        $(".nav li:eq(4)").css("background-color", "#fff")
    } else if ($(window).scrollTop() >= $(".p06").offset().top) {
        $(".nav li").css("background-color", "transparent")//除了被點擊到的游標，其他都恢復成原來的顏色
        $(".nav li:eq(5)").css("background-color", "#fff")
    }
})

//點選右方導覽列時會到指定圖片
for (i = 0; i <= num_li; i++) {
    $(".nav li:eq(" + i + ")").click({ id: i }, function (e) {
        $("html,body").stop()
        $(".nav li").css("background-color", "none")//除了被點擊到的游標，其他都恢復成原來的顏色
        page = e.data.id + 1
        $("html,body").animate({ "scrollTop": $(".p0" + page).offset().top })
        $(".nav li:eq(" + e.data.id + ")").css("background-color", "#fff")//被點擊到的游標變色，前面的selector用this也可以
        n = e.data.id + 1
    })
}

//一進入網頁時，將導覽列垂直置中計算導覽列置中的位置
center()

//縮放網頁時，將導覽列垂直置中
$(window).resize(function () {
    center()
})

//計算導覽列垂直置中的高度
function center() {
    pos = $(window).height() / 2 - $(".nav").height() / 2
    $(".nav").css("top", pos)
}

// --------------------------------- yellow --------------------------------

    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value;

    slider.oninput = function () {
    output.innerHTML = this.value;
    
    $('.box').width(this.value * 5)

    }



// --------------------------------- orange -------------------------------- 


$('.orange .w200').mouseenter(function () {
    $('.w200').fadeIn(100).text('字重就是字體的粗細 / ExtraLight').css('opacity','1')
})

$('.orange .w300').mouseenter(function () {
    $('.w300').fadeIn(100).text('字重就是字體的粗細 / Light').css('opacity','1')
})

$('.orange .w400').mouseenter(function () {
    $('.w400').fadeIn(100).text('字重就是字體的粗細 / Regular').css('opacity','1')
})

$('.orange .w500').mouseenter(function () {
    $('.w500').fadeIn(100).text('字重就是字體的粗細 / Medium').css('opacity','1')
})

$('.orange .w600').mouseenter(function () {
    $('.w600').fadeIn(100).text('字重就是字體的粗細 / SemiBold').css('opacity','1')
})

$('.orange .w700').mouseenter(function () {
    $('.w700').fadeIn(100).text('字重就是字體的粗細 / Bold').css('opacity','1')
})

$('.orange .w900').mouseenter(function () {
    $('.w900').fadeIn(100).text('字重就是字體的粗細 / Black').css('opacity','1')
})

$('.orange .hoverbox').mouseleave(function () {
    // console.log('hi');
    // $('.hoverbox').css('padding','15px')
    $('.hoverbox h3').text('字重就是字體的粗細').css('opacity','0.8')
})
