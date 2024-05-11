const frontPageAni = () => {
    const tl = gsap.timeline()
    tl.from('.frontName span',{
        x:'100%',
        duration:0.7,
        delay:0.8,
        stagger:0.2,
        opacity:0
    })
    tl.to('.front',{
        opacity:0,
        display:'none',
        delay:0.2,
        scale:4
    })
    tl.from('.navbarCont',{
        y:'-100%',
        duration:0.5,
        delay:0.2,
        opacity:0
    })
    tl.from('.topNav',{
        y:'-200%',
        duration:0.5,
        stagger:0.1,
        opacity:0,
    })
    tl.from('.homeTitle',{
        x:'-100%',
        opacity:0,
        duration:0.6
    },'a')
    tl.from('.homeImg',{
        x:'100%',
        opacity:0,
        duration:0.6
    },'a')
    tl.from('.homeText',{
        y:'100%',
        opacity:0,
        duration:0.5,
        stagger:0.1
    })
    tl.from('.homeTitle p span',{
        duration:0.5,
        stagger:0.05,
        opacity:0
    })
    tl.from('.hireMe',{
        y:'50%',
        duration:0.5,
        opacity:0
    })
    tl.to('.hireMe',{
        y:'20%',
        duration:0.3,
        repeat:-1,
        yoyo:true,
    })
    
}
frontPageAni();

const animations = () => {
    gsap.to('.homeTitleCont',{
        x:"-150%",
        duration:1,
        scrollTrigger:{
            trigger:'.homeTitleCont',
            scroller:'body',
            start:'bottom 40%',
            end:'bottom 0%',
            scrub:true
        }
    })
    gsap.to('.homeImgCont',{
        x:"150%",
        duration:1,
        scrollTrigger:{
            trigger:'.homeImgCont',
            scroller:'body',
            start:'bottom 40%',
            end:'bottom 0%',
            scrub:true
        }
    })
}
animations();

const marqueeAnimation = () =>{
    gsap.from('.marquee1',{
        x:'-10%',
        duration:30,
        scrollTrigger:{
            trigger:".marquee1",
            scroller:"body",
            start:"top 50%",
            scrub:true,
        }
    })
    gsap.from('.marquee2',{
        x:'10%',
        duration:30,
        scrollTrigger:{
            trigger:".marquee2",
            scroller:"body",
            start:"top 50%",
            scrub:true
        }
    })
}
marqueeAnimation();

const serviceAnimation = () => {
    gsap.from('.servicesText h1 span',{
        y:100,
        duration:0.4,
        stagger:0.2,
        scrollTrigger:{
            trigger:'.servicesText h1',
            scroller:'body',
            start:'top 90%',
            end:'top 60%',
            scrub:true
        }
    })
    
    gsap.from('.service1',{
        x:"-120%",
        duration:1,
        scrollTrigger:{
            trigger:'.service1',
            scroller:'body',
            start:'top 80%',
            end:'top 50%',
            scrub:true
        }
    })
    gsap.from('.service2',{
        x:"120%",
        duration:1,
        scrollTrigger:{
            trigger:'.service2',
            scroller:'body',
            start:'top 80%',
            end:'top 50%',
            scrub:true
        }
    })
    gsap.from('.service3',{
        x:"-120%",
        duration:1,
        scrollTrigger:{
            trigger:'.service3',
            scroller:'body',
            start:'top 80%',
            end:'top 50%',
            scrub:true
        }
    })
    gsap.from('.service4',{
        x:"120%",
        duration:1,
        scrollTrigger:{
            trigger:'.service4',
            scroller:'body',
            start:'top 80%',
            end:'top 50%',
            scrub:true
        }
    })
    gsap.from('.service5',{
        x:"-120%",
        duration:1,
        scrollTrigger:{
            trigger:'.service5',
            scroller:'body',
            start:'top 80%',
            end:'top 50%',
            scrub:true
        }
    })
    gsap.from('.service6',{
        x:"120%",
        duration:1,
        scrollTrigger:{
            trigger:'.service6',
            scroller:'body',
            start:'top 80%',
            end:'top 50%',
            scrub:true
        }
    })
}
serviceAnimation();


const aboutmetext = () => {
    const pText = "I'm Sabequn Nahar, with over 2 years of experience in digital marketing. Currently pursuing a BSc. in CSE at Sonargaon University, I've garnered satisfaction from numerous clients, leading to a high rate of returning clients.";
    let pTextWithSpan = '';
    for(let i=0; i<pText.length; i++){
        if(pText[i] === ' '){
            pTextWithSpan = pTextWithSpan + ' ';
        }else{
            pTextWithSpan = pTextWithSpan + '<span class="aboutSpan">' + pText[i] + '</span>';
        }
    }
    const p = document.querySelector('.aboutmepara');
    p.innerHTML = pTextWithSpan;
    
}
aboutmetext();


const aboutMeAnimation = () => {
    gsap.from('.aboutmeText span',{
        y:'100%',
        stagger:0.4,
        scrollTrigger:{
            trigger:'.aboutmeText span',
            scroller:'body',
            scrub:true,
            start:'top 90%',
            end:'top 60%'
        }
    })

    gsap.from('.aboutmepara .aboutSpan',{
        opacity:0,
        stagger:0.1,
        scrollTrigger:{
            trigger:'.aboutmepara .aboutSpan',
            scroller:'body',
            scrub:true,
            start:'top 100%',
            end:'top 50%'
        }
    })
    gsap.from('.aboutimg1',{
        scale:0,
        opacity:0,
        scrollTrigger:{
            trigger:'.aboutimg1',
            scroller:'body',
            start:'top 70%',
            end:'top 50%',
            scrub:true
        }
    })
    gsap.from('.aboutimg2',{
        scale:0,
        opacity:0,
        scrollTrigger:{
            trigger:'.aboutimg2',
            scroller:'body',
            start:'top 90%',
            end:'top 70%',
            scrub:true
        }
    })
}

aboutMeAnimation();

const consistancyAnimation = () => {
    gsap.to('.consistancy h1',{
        x:'-50%',
        duration:4,
        delay:3,
        scrollTrigger:{
            trigger:'.consistancy h1',
            start:'top 30%',
            end:'top -100%',
            scrub:true,
            pin:true
        }
    })
}

const marquee2Ani = () => {
    gsap.to('.marquee2leftAni1',{
        x:'-20%',
        scrollTrigger:{
            trigger:'.marquee2leftAni1',
            scroller:'body',
            scrub:true,
            start:'top 50%',
            end:'top -53.8%',
            pin:true,
        }
    })
    gsap.to('.marquee2rightAni1',{
        x:'20%',
        scrollTrigger:{
            trigger:'.marquee2rightAni1',
            scroller:'body',
            scrub:true,
            start:'top 61.9%',
            end:'top -41.9%',
            pin:true
        }
    })
    gsap.to('.marquee2leftAni2',{
        x:'-20%',
        scrollTrigger:{
            trigger:'.marquee2leftAni2',
            scroller:'body',
            scrub:true,
            start:'top 73.8%',
            end:'top -30%',
            pin:true,
        }
    })
    gsap.to('.marquee2rightAni2',{
        x:'20%',
        scrollTrigger:{
            trigger:'.marquee2rightAni2',
            scroller:'body',
            scrub:true,
            start:'top 85.7%',
            end:'top -18.1%',
            pin:true
        }
    })
}
marquee2Ani();
consistancyAnimation();
const themeChange = () => {
    document.querySelectorAll('.container')
    .forEach((e)=>{
        ScrollTrigger.create({
            trigger:e,
            start:"top 50%",
            bottom:"bottom 50%",
            onEnter: ()=>{
                document.body.setAttribute("theme", e.dataset.color);
            },
            onEnterBack: ()=>{
                document.body.setAttribute("theme", e.dataset.color);
            }
        })
    })
}
themeChange();

(function () {
    const locomotiveScroll = new LocomotiveScroll();
})();


document.body.addEventListener('scrollUp',()=>{
    console.log('hello');
})

