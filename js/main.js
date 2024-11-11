$(function(){
    //주메뉴에 마우스오버하면 서브메뉴와 배경 나타남
    if($(window).width>=1024){
        //주메뉴에 마우스오버하면 서브메뉴와 배경 나타남
        $("nav > ul > li > a").mouseenter(function(){
            $(".sub").stop().slideDown();
            $(".sub-bg").stop().slideDown();
        });
        
        //메뉴 영역에서 마우스아웃하면 서브메뉴와 배경 사라짐
        $("nav").mouseleave(function(){
            $(".sub").stop().slideUp();
            $(".sub-bg").stop().slideUp();
        });
    }else{
        //accordion 메뉴
        $('nav>ul>li>a').click(function(){
            if($(this).attr('class') != 'active' ){
            $('nav>ul>li>a').next().slideUp();
            $('nav > ul > li > a').removeClass('active');
            $(this).addClass('active');
            $(this).next().slideDown();
        }else{
            $(this).removeClass('active');
            $(this).next().slideUp();
        }
    });
    }

    //메인 슬라이드
    const swiper = new Swiper(".mainSwiper", {
        loop:true,
        autoplay:{
            delay:3000
        },
        speed:1000,
        effect:'fade',
        pagination:{
            el:'.swiper-pagination',
            type:'fraction',
            //현재 페이지 번호에 0 붙이기
            formatFractionCurrent:function(number){
                return '0'+number;
            },
            //총 페이지 수에 0 붙이기
            formatFractionTotal:function(number){
                return '0'+number
            },
            renderFraction:function(currentClass, totalClass){
                return '<span class="' + currentClass + '"></span>'
                     + '<span class="' + totalClass + '"></span>'
            }
        },
        navigation:{
            nextEl:'.mainSwiper .swiper-button-next',
            prevEl:'.mainSwiper .swiper-button-prev'
        },
        on:{
            init:function(){
                //모든 swiper-slide의 progress-bar에서 클래스 제거
                $(".swiper-progress-bar").removeClass("animate");
                //첫번째 swiper-slide에 해당하는 progress-bar에만 클래스 추가
                $(".swiper-progress-bar").eq(0).addClass("animate");
            },
            slideChangeTransitionStart:function(){
                //모든 swiper-slide의 progress-bar에서 클래스 제거
                $(".swiper-progress-bar").removeClass("animate");
            },
            slideChangeTransitionEnd:function(){
                $(".swiper-progress-bar").eq(0).addClass("animate");
            }
        }
    });
    //s4영역 scrollTrigger 애니메이션
    gsap.registerPlugin(ScrollTrigger);
    //왼쪽 영역의 txt3 글자 영역의 크기 0
    const proAni26 = gsap.timeline()
    .to(".product-box .cont .txt3", {
        scale:0, duration:0
    })
    //왼쪽 영역의 txt1 글자 영역 서서히 사라짐
    const proAni0 = gsap.timeline()
    .to(".product-box .cont .txt1",{
        duration:100, delay:50
    });
    const proAni1 = gsap.timeline()
    .to(".product-box .cont .txt1",{
        opacity:0, duration:100
    });
    //아래쪽 마스크 영역의 높이 0
    const proAni2 = gsap.timeline()
    .to(".product-box .left-cover-box .cover3",{
        height:0, duration:100
    });
    //위쪽 마스크 영역의 높이 0
    const proAni3 = gsap.timeline()
    .to(".product-box .left-cover-box .cover1",{
        height:0, duration:100
    });
    //왼쪽 마스크 영역의 넓이 0
    const proAni4 = gsap.timeline()
    .to(".product-box .left-cover-box .cover4",{
        width:0, duration:0
    });
    //오른쪽 마스크 영역의 넓이 0
    const proAni5 = gsap.timeline()
    .to(".product-box .left-cover-box .cover2",{
        width:0, duration:0
    });
    //왼쪽 영역의 이미지 나타남 
    const proAni6 = gsap.timeline()
    .to(".product-box .img-box .img-box2",{
        opacity:1, duration:0
    });
    //오른쪽 영역의 위쪽 마스크 높이 50% 
    const proAni7 = gsap.timeline()
    .to(".product-box .right-cover-box .cover1",{
        height:"50%", duration:100
    });
    //오른쪽 영역의 아래쪽 마스크 높이 50% 
    const proAni8 = gsap.timeline()
    .to(".product-box .right-cover-box .cover3",{
        height:"50%", duration:100
    });
    //오른쪽 영역의 왼쪽 마스크 넓이 50% 
    const proAni9 = gsap.timeline()
    .to(".product-box .right-cover-box .cover4",{
        width:"50%", duration:100
    });
    //오른쪽 영역의 오른쪽 마스크 넓이 50% 
    const proAni10 = gsap.timeline()
    .to(".product-box .right-cover-box .cover2",{
        width:"50%", duration:100
    });
    //오른쪽 영역의 txt2 서서히 나타남
    const proAni11 = gsap.timeline()
    .to(".product-box .cont .txt2",{
        opacity:1, delay:50, duration:100
    });
    const proAni12 = gsap.timeline()
    .to(".product-box .cont .txt2",{
        duration:100
    });
    //왼쪽 영역의 마스크 가로길이와 세로길이 늘리기
    //아래쪽 마스크 영역의 높이 50%
    const proAni13 = gsap.timeline()
    .to(".product-box .left-cover-box .cover3",{
        height:'50%', duration:100, delay:50
    });
    //위쪽 마스크 영역의 높이 50%
    const proAni14 = gsap.timeline()
    .to(".product-box .left-cover-box .cover1",{
        height:'50%', duration:100, delay:50
    });
    //왼쪽 마스크 영역의 넓이 50%
    const proAni15 = gsap.timeline()
    .to(".product-box .left-cover-box .cover4",{
        width:'50%', duration:100, delay:50
    });
    //오른쪽 마스크 영역의 넓이 50%
    const proAni16 = gsap.timeline()
    .to(".product-box .left-cover-box .cover2",{
        width:'50%', duration:100, delay:50
    });
    //왼쪽 영역의 txt3 크기 1
    const proAni27 = gsap.timeline()
    .to(".product-box .cont .txt3",{
        scale:1, duration:0
    });
    //왼쪽 영역의 txt3 서서히 나타남
    const proAni17 = gsap.timeline()
    .to(".product-box .cont .txt3",{
        opacity:1, delay:50, duration:100, 
    });
    const proAni18 = gsap.timeline()
    .to(".product-box .cont .txt3",{
        duration:100
    });
    //오른쪽 영역의 .txt2 사라짐
    const proAni19 = gsap.timeline()
    .to(".product-box .cont .txt2",{
        opacity:0, delay:50, duration:100, 
    });
    //오른쪽 영역의 마스크 가로길이 0
    const proAni20 = gsap.timeline()
    .to(".product-box .right-cover-box .cover2",{
        width:0, delay:50, duration:100, 
    });
    const proAni21 = gsap.timeline()
    .to(".product-box .right-cover-box .cover4",{
        width:0, delay:50, duration:100, 
    });
    //오른쪽 영역의 마스크 세로길이 0
    const proAni22 = gsap.timeline()
    .to(".product-box .right-cover-box .cover1",{
        height:0, delay:50, duration:0, 
    });
    const proAni23 = gsap.timeline()
    .to(".product-box .right-cover-box .cover3",{
        height:0, delay:50, duration:0,
    });
    //오른쪽 영역의 .img-box3 나타남
    const proAni24 = gsap.timeline()
    .to(".product-box .cont .img-box3",{
        opacity:1, delay:10, duration:100, 
    });

    const productAni = gsap.timeline({
        scrollTrigger:{
            trigger:".product",
            start:"center center+=10px",
            end:"+=3000px, top",
            pin:true,
            scrub:1.5
        }
    });
    //timeline과 scrollTrigger 연동
    productAni.add([proAni26])
    .add([proAni0, proAni1, proAni6])
    .add([proAni2, proAni3, proAni4, proAni5, proAni7, proAni8, proAni9, proAni10, proAni11, proAni12])
    .add([proAni13, proAni14, proAni15, proAni16, proAni19])
    .add([proAni17, proAni18, proAni20, proAni21, proAni22, proAni23, proAni24, proAni27])
    //커스텀 커서 포인터
    let cursor = $(".custom-cursor");

    let posX = 0;
    let posY = 0;
    let mouseX = 0;
    let  mouseY = 0;

    //커스텀 커서 초기화
    gsap.set(".custom cursor", {
        scale:0,
        opacity:0.5
    });
    gsap.to({}, {
        duration: 0.016,
        repeat: -1,
        onRepeat: function () {
            posX += (mouseX - posX) / 9;
            posY += (mouseY - posY) / 9;
            gsap.set(cursor, {
                x: mouseX,
                y: mouseY
            });
        }
    });
    //document에 마우스무브 이벤트 설정
    $(document).on("mousemove", function(e){
        mouseX = e.pageX;
        mouseY = e.pageY;
    });
    //custom-cursor-area영역에 마우스를 올리면 커스텀 커서 나타남
    $(".custom-cursor-area").on("mouseenter", function () {
        scale.play();
        cursor.css('z-index', 100);
    });
    //custom-cursor-area영역에 마우스를 아웃하면 커스텀 커서 사라짐
    $(".custom-cursor-area").on("mouseleave", function () {
        scale.reverse();
        cursor.css('z-index', -1);
    });
    let scale = gsap.timeline({ paused: true })
    .to(".custom-cursor", {
        scale: 2,
        transformOrigin: 'center'
    });
    //s10 흐르는 글자
    let $text = $(".inner .track");
    let $wrap = $(".inner");
    //track를 복제하여 .inner에 추가함
    $text.clone().appendTo($wrap);
    TweenMax.to($wrap, 40, {
        x: -($text.width()),   //오른쪽에서 왼쪽으로
        ease: Linear.easeNone, //등속운동
        repeat: -1             //무한반복
    });
    const videoSwiper = new Swiper(".videoSwiper", {
        slidesPerView:5,
        spaceBetween:60,
        loop:true,
        navigation:{
            nextEl:'.videoSwiper .swiper-button-next',
            prevEl:'.videoSwiper .swiper-button-prev'
        }
    });
    //family site
    $(".family").hover(function(){
        $(".family-site").stop().slideDown();
        },
       function(){
            $(".family-site").stop().slideUp();
    });

    //let sw=0;
    //$(".family").click(function(e){
    //    e.preventDefault();
    //    if(sw == 0){
    //        sw=1;
            // $(this).find("span").css("transform", "rotateX(180deg)");
    //        $(".family-site").stop().slideDown();
    //    }else{
    //        sw=0;
    //        $(".family-site").stop().slideUp();
    //    }
    //});

    //top버튼(.top-btn)
    //footer영역에서는 footer의 중간에 위치하다가 footer영역이 사라지면 화면 오른쪽 아래에 고정된 위치로 설정
    const topBtn = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const $target = entry.target;
            if(entry.isIntersecting){
                document.querySelector(".top-btn").classList.add("fixed");
            }else{
                document.querySelector(".top-btn").classList.remove("fixed");
            }
        });
    });
    const $top = document.querySelectorAll("footer");
    $top.forEach((item) => {
        topBtn.observe(item);
    });
    $(window).scroll(function(){
        //화면 위쪽에서는 top-btn이 안 보이다가 500px정도 스크롤되면 top-btn보임
        if($(this).scrollTop() > 500){
            $(".top-btn").addClass("show");
        }else{
            $(".top-btn").removeClass("show"); 
        }

        //스크롤 내릴 때 마다 section안의 자식 콘텐츠들의 애니메이션 실행
        //section 갯수만큼 반복
        $("section").each(function(){
            //각 section의 시작위치(top)값을 sectionTop변수에 저장
            let sectionTop = $(this).offset().top-300;
            //각 섹션의 bottom(끝위치)값을sectionBottom변수에 저장
            let sectionBottom = sectionTop + $(this).height();
            //만약 section영역이 viewPort안으로 들어오면
            if(sectionTop < $(window).scrollTop() && sectionBottom > $(window).scrollTop()){
                $(this).addClass("child-ani");
            }
            else{
                $(this).removeClass("child-ani");
            }
        });












    });
    //top-btn을 클릭하면 화면 맨 위로 이동
    $(".top-btn").click(function(){
        $("html, body").animate({scrollTop : 0});
    });
    /* 마우스 스크롤 내리면 header가 사라지고(addClass(active)) 스크롤 올리면 header가 내려오도록 설정(removeClass(active)) */
    //함수 선언
    function headerHide(){
        //변수 선언 시 $를 변수명에 붙이면 변수에 저장된 객체의 속성값도 저장
        let $window = $(window);
        let $header=$('header');
        let work_scroll=null;
        let current_scroll=0;
        let last_scroll=0;
        let move_scroll=0;
        //window객체에 scroll이벤트 설정
        $window.on("scroll", function(){
            //스크롤을 시작했는지 감지
            work_scroll = true;

            //만약 window 객체의 scrollTop값이 header으 높이값보다 커지면 header에 active클래스를 추가하고 header의 높이값보다 크지 않으면
            //header에서 active클래스를 제거
            //if($window.scrollTop() > $header.height()){
            //    $header.addClass("active");
            //}else{
            //    $header.removeClass("active");
            //}

            //0.05초마다 스크롤 이벤트를 감지하여 화면이 이동중이고 body에 open클래스가 설정되어있지 않다면
            //has_scroll함수를 호출하고, work_scroll변수의 값을 false로 만들어 작동 중지
            setInterval(function(){
                if(work_scroll == true && !$("body").hasClass("open")){
                    has_scroll();
                    work_scroll = false;    //화면 멈춤
                }
            }, 50);
            function has_scroll(){
                //current_scroll변수에 window의 scrollTop 값을 저장
                //scrollTop() : 화면이 이동할 때, window의 위치값
                current_scroll = $(this).scrollTop();
                //만약 last_scroll-current_scroll값이 move_scroll값보다 적게 스크롤되면 아무 반응 없음.
                if(Math.abs(last_scroll - current_scroll) <= move_scroll)
                    return;

                //현재 scrollTop값이 last_scroll(0)보다 크면
                //header를 올려서 감추고, last_scroll값보다 크지 않으면 header를 내려서 보이게 함
                if(current_scroll > last_scroll){
                    if(current_scroll > $header.height()){
                        gsap.to($header, 0.4, {
                            autoAlpha : 0,
                            y: -$header.outerHeight(),
                            ease:Power3.easeOut
                        });
                    }
                }else{
                    gsap.to($header, 0.4, {
                        autoAlpha : 1,
                        y: 0,
                        ease:Power3.easeOut
                    });
                }
                //current_scroll값을 last_scroll변수에 이동시킴
                //마우스 스크롤을 내리고 있는지 올리고 있는지 감지 가능
                last_scroll = current_scroll;
            }
        });
    }
    //함수 호출
    headerHide();

    //section의 data-bg속성값에 따라 body의 배경색 변경하기
    //$section 변수에 section객체를 모두 저장
    //$section[0]="section"; ......$section[11]="section"
    const $sections = $('section'); 
    //body의 배경색을 첫번째 section의 data-bg값으로 설정   
    $('body').css('background', $sections.first().data('bg'));
    //window객체에 scroll이벤트 설정
    $(window).on('scroll', function() {
        //$section변수에 $section 배열의 값을 복사, .은 메서드 체인
        const $section = $sections
        .map(function() {
            //section 각각의 객체를 $el 변수에 저장
            const $el = $(this);
            //각 section의 영역을 rect 변수에 저장
            //this.getBoundingClientRect() : section영역의 크기와 viewport의 상대적인 위치 정보를 제공하는 메서드
            const rect = this.getBoundingClientRect();
            return { el: $el, rect: rect };
        })
        .toArray()
        .find(function(section) {
            return section.rect.bottom >= ($(window).height() * 0.5);
        });
        //viewPort화면 안에 section이 들어오면 body의 배경색을 bg속성색으로 변경
        if ($section) {
        $('body').css('background', $section.el.data('bg'));
        }
    });
    //뷰포트의 가로길이가 1280미만인 기기에서 작동함
    if($(window).width() < 1280){
        //모바일 버전 menu-icon 클릭하면 nav나타남
        $("#menu-icon").click(function(){
            $("nav").animate({
                right:0
            });
        });
        //모바일 버전 menu-icon 클릭하면 nav나타남
    }
    //모바일 버전 close-btn클릭하면 nav사라짐
    $("#close-btn").click(function(){
        $("nav").animate({
            right:"-100%"
        });
    });
});