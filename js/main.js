// create 3 json data
const testimonialData = [
    {
        id: 1,
        name: "Marcus Geidt",
        job: "HRD Supervisor at Shopee Indonesia",
        text: "<strong>WorkPro</strong> has been an incredible resource in my job search. The personalized job recommendations helped me find the perfect opportunity that matched my skills and interests. I highly recommend <strong>WorkPro</strong> to anyone looking for a seamless and effective job search experience.",
        profile: "./assets/img/profile1.jpg",
    },
    {
        id: 2,
        name: "Sarah T",
        job: "Marketing Coordinator at Stellar Marketing Solutions",
        text: "<strong>WorkPro</strong> streamlined my job search and connected me with relevant opportunities. Thanks to their tailored job recommendations, I secured a fantastic position. Highly efficient platform!",
        profile: "./assets/img/profile2.jpg",
    },
    {
        id: 3,
        name: "John Smith",
        job: "Software Engineer at Tech Innovators Inc",
        text: "<strong>WorkPro</strong> personalized job recommendations helped me find the perfect opportunity that matched my skills and interests. It made my job search seamless and effective. Highly recommended!",
        profile: "./assets/img/profile3.jpg",
    },
];

const testimonialName = document.querySelector(".testimonial__name");
const testimonialJob = document.querySelector(".testimonial__job");
const testimonialText = document.querySelector(".testimonial__text");
const testimonialProfile = document.querySelector(".testimonial__profile");
const prevBtn = document.querySelector(".btn-slide-left");
const nextBtn = document.querySelector(".btn-slide-right");
let currentIndex = 0;

prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        renderTestimonial(currentIndex);
    }
});

nextBtn.addEventListener("click", () => {
    if (currentIndex < testimonialData.length - 1) {
        currentIndex++;
        renderTestimonial(currentIndex);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    renderTestimonial(currentIndex);
});

const renderTestimonial = (index) => {
    const item = testimonialData[index];
    testimonialName.textContent = item.name;
    testimonialJob.textContent = item.job;
    testimonialText.innerHTML = item.text;
    testimonialProfile.src = item.profile;
};
