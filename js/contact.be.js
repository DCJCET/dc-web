
const req = document.getElementById('submit');
const text = document.getElementById('text-content');
const title = document.getElementById('title-content');
const mess = document.querySelector('.message');
const emote = document.getElementById('heading-emo');

req.addEventListener('click',(event)=>{

    event.preventDefault();
    // // backend 
    // fetch('http://localhost:1111/contact') 
    // .then(response => response.json())
    // .then(data => console.log('Success :', data))
    // .catch(error => console.log(error))

    let data = {

        title:title.value,
        content:text.value,
    }
    console.log(data)
    

    const url = 'http://localhost:1111/contact';

    fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    // mode: 'cors', // no-cors, *cors, same-origin
    headers: {
      'Content-Type': 'application/json'
    },
   
    body:JSON.stringify(data)// body data type must match "Content-Type" header
  }).then(response => response.json())
    .then(() => {


        // mess.innerHTML = `${JSON.stringify(data)}`;
        const message =  gsap.timeline();

                    message.from('.message',{

                        bottom:-70,
                        duration:0.2,
                        opacity:0,
                        display:'none', 
                        position:'absolute',

                        
                    })
                    message.to('.message',{

                        bottom:200,
                        duration:0.5,
                    
                        opacity:1,
                        display:'flex',
                        position:'absolute',
                        ease:Elastic.easeOut.config(1,0.5),

                    })
                    message.from('.emo',{
                        rotate:0,
                        transformOrigin:'bottom right',
                    })
                    message.to('.emo',{
                        rotate:50,
                        duration:0.5,
                        transformOrigin:'bottom right',
                        

                    })
                    message.to('.emo',{
                        rotate:0,
                        transformOrigin:'bottom right',
                    })
                    message.to('.message',{

                        bottom:-70,
                        duration:0.5,
                        delay:1,
                        opacity:0,
                        display:'flex', 
                        position:'absolute'


                    }) 
        
                    document.formy.reset();
                    
                    setInterval(() => {
                        
                        emote.innerHTML = "👍🏻";

                    },3000)
                    
        

    })
    .catch(error => console.log(error))
});
