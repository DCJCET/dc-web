var loader = gsap.timeline()




// var pos = document.getElementById('dot-2')
// var elepos = pos.getBoundingClientRect();
// console.log(elepos)

// const xc = 729.4000244140625/2
// console.log(xc)
// const yc = 451.58331298828125/2
// console.log(yc)

var loader = gsap.timeline()

loader.from('.person,.person-2',{
    opacity: 0,
    
})
loader.to('.person,.person-2',{
    opacity: 1,
    duration:1,
})

loader.from('.c-class',{

    rotate:-90,
    transformOrigin:`70% 50%`,
    opacity:0,
    display:'none',
    duration:1,

})
loader.to('.c-class',{

    rotate:0,
    transformOrigin:`70% 50%`,
    opacity:1,
    duration:1,

})


loader.from('.d-class',{

    rotate:90,
    transformOrigin:`30% 50%`,
    opacity:0,
    display:'none',
    duration:1,

})
loader.to('.d-class',{

    rotate:00,
    transformOrigin:`30% 50%`,
    opacity:1,
    duration:1,

})


loader.from('.loader-bar',{
    
    width:'0%',
    duration:1

})


loader.to('.loader-bar',{
    
    width:'100%',  

})

loader.from('.loader-container',{

    display:'flex',
    opacity:1, 

})

loader.to('.loader-container',{

    display:'none',
    opacity:'0'


})



window.onload=()=>{

    const puns = [

        'There is no place like 127.0.0.1',
        'blah blah blah is not a commit! ',
        'always commit first ! ',
        'blah blah '
    
    
    ]
    
    const newPun = Math.floor(Math.random()*puns.length);
    console.log(puns[newPun])
    const lp = document.getElementById('puns');
    lp.textContent = puns[newPun];




}