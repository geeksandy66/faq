const faqs = document.querySelectorAll('.question-answer');

faqs.forEach((faq, index)=>{
    faq.addEventListener('click', ()=>{
        faq.classList.toggle('active');
        const icon = document.querySelectorAll(".icon")[index];
        icon.classList.toggle('minus');

    })
})