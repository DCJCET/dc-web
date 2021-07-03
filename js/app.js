var loader = gsap.timeline()




// var pos = document.getElementById('dot-2')
// var elepos = pos.getBoundingClientRect();
// console.log(elepos)

// const xc = 729.4000244140625/2
// console.log(xc)
// const yc = 451.58331298828125/2
// console.log(yc)

var loader = gsap.timeline()


// loader.from('.loader-logo',{

//     top:'32.5%',
//     left:'46.5%',

// })



loader.from('.person,.person-2',{
    opacity: 0,
    
})
loader.to('.person,.person-2',{
    opacity: 1,
    duration:1,
})

loader.from('.loader-bar',{
    
    width:'0%',
    duration:1

})







loader.from('.d-class',{

    rotate:90,
    transformOrigin:`30% 50%`,
   
    display:'none',
    duration:.5,

})

loader.to('.loader-bar',{
    
    width:'100%',
    duration:0.5  

})


loader.to('.d-class',{

    rotate:00,
    transformOrigin:`30% 50%`,
    opacity:1,
    duration:.5,

})


loader.from('.c-class',{

    rotate:-90,
    transformOrigin:`70% 50%`,
 
    display:'none',
    duration:0.5,

})
loader.to('.c-class',{

    rotate:0,
    transformOrigin:`70% 50%`,
    
    duration:.5,

})






loader.to('.loader-logo',{

    top:'1%',
    left:'1%',
    scale:0.9,
    duration:0.5
    

})
loader.to('.actual-loader',{
    
   opacity:0

})
loader.from('#puns',{

    opacity:1,
    duration:0.2



})

loader.to('#puns',{

    opacity:0,
    duration:0.1


})




loader.from('.loader-container',{

    display:'flex',
    opacity:1, 

})

loader.to('.loader-container',{

  
    transform:'scale(0.9)',
    borderRadius:'20px',
    ease:Back.easeOut.config( 3),


})
loader.to('.loader-container',{


    top:'-100%',
    


})
loader.from('.home-section',{

    top:'100vh',
    transform:'scale(0.9)',
    borderRadius:'20px',


})
loader.to('.home-section',{

    top:'0',
    transform:'scale(0.9)',
    borderRadius:'20px',
   


})



loader.to('.home-section',{


    transform:'scale(1)',
    top:'-00%',
    borderRadius:'0',
    ease:Back.easeOut.config( 3),
})



// var logoFloat = gsap.timeline()

// var logo = document.getElementById('logo')

// logo.addEventListener('mouseover',()=>{

// logoFloat.from(logo,{

//     y:0
// })
// logoFloat.to(logo,{

//     y:-19,
//     repeat:-1
// })

// preventDefault(logo)
   



    

// }
// )




window.onload=()=>{

    const puns = [

        '"There is no place like 127.0.0.1 🌐"',
        '"blah blah blah is not a commit! 😐"',
        '"always commit first ! 😛"',
        '"Copy-and-Paste was programmed by programmers for programmers actually 🤗"',
        '"It works on my machine 🥴"',
        '"It compiles ; ship it 😤"',
        '"There are only 10 types of people in the world: those that understand binary and those that dont 🧑🏻‍🤝‍🧑🏾"',
        '"Java: write once, debug everywhere ☕"',
        '"Why do Java  programmers wear glasses? Because they cant C 👀"'


    
    
    ]
    
    const newPun = Math.floor(Math.random()*puns.length);
    console.log(puns[newPun])
    const lp = document.getElementById('puns');
    lp.textContent = puns[newPun];




}

window.addEventListener('popstate', function () {

alert('popstate');


loader.from('.person,.person-2',{
    opacity: 0,
    
})
loader.to('.person,.person-2',{
    opacity: 1,
    duration:0.1,
})

loader.from('.c-class',{

    rotate:-90,
    transformOrigin:`70% 50%`,
 
    display:'none',
    duration:.1,

})
loader.to('.c-class',{

    rotate:0,
    transformOrigin:`70% 50%`,
    
    duration:.1,

})


loader.from('.d-class',{

    rotate:90,
    transformOrigin:`30% 50%`,
   
    display:'none',
    duration:.1,

})
loader.to('.d-class',{

    rotate:00,
    transformOrigin:`30% 50%`,
    opacity:1,
    duration:.1,

})


loader.to('.loader-logo',{

    top:'1%',
    left:'1%',
    scale:0.9,

})

	
    
});


