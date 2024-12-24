const testimonials = [
      {
        name: "Nat Reynolds",
        photoUrl:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar proin."
       
      }, 

      {
        name: "Celia Almeda",
        photoUrl:"https://images.unsplash.com/photo-1520295187453-cd239786490c?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Pharetra vel turpis nunc eget lorem. Quisque id diam vel quam elementum pulvinar etiam. Urna porttitor rhoncus dolor purus non enim praesent elementum.  "
       
      }, 

      {
        name: "Bob Roberts",
        photoUrl:"https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar proin. Nibh nisl condimentum id venenatis a condimentum."
       
      },  
]
const imgEl = document.querySelector("img")
const textEl = document.querySelector(".text")
const usernameEl = document.querySelector(".username");

let idx = 0; 

 updateTestimonial()
function updateTestimonial() {
  const {name,photoUrl,text } = testimonials[idx]; 
  imgEl.src = photoUrl;
  textEl.innerText = text ;
  usernameEl.innerText =name;
  idx++
  if(idx === testimonials.length) {
    idx= 0;
  }
  setTimeout(()=>{
    updateTestimonial()
  },4000)
}