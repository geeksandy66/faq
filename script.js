const faqs = document.querySelectorAll('.question-answer');
// let icon = document.querySelectorAll(".icon");

// for(let i=0; i<faqs.length; i++){
//     faqs[i].addEventListener('click',()=>{
//         faqs[i].classList.toggle('active');
//         icon[i].classList.toggle('minus');
//     })
// }

faqs.forEach((faq, index)=>{
    faq.addEventListener('click', ()=>{
        faq.classList.toggle('active');
        const icon = document.querySelectorAll(".icon")[index];
        icon.classList.toggle('minus');

    })
})