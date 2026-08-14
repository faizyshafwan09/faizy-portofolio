const themeBtn = document.querySelector(".theme-toggle");
const icon = themeBtn.querySelector("i");

// cek tema yang tersimpan
let currentTheme = localStorage.getItem("theme");

if (currentTheme === "light") {
    document.body.classList.add("light-theme");
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-theme");

    if(document.body.classList.contains("light-theme")){

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

        localStorage.setItem("theme","light");

    }else{

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

        localStorage.setItem("theme","dark");

    }

});

const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");
const menuIcon = menu.querySelector("i");
const overlay = document.querySelector(".overlay");

if (overlay) {

    overlay.addEventListener("click", () => {

        nav.classList.remove("active");
        overlay.classList.remove("active");

        menuIcon.classList.replace("fa-xmark","fa-bars");

    });

};

menu.addEventListener("click", () => {

    nav.classList.toggle("active");
    overlay.classList.toggle("active");

    if(nav.classList.contains("active")){

        menuIcon.classList.replace("fa-bars","fa-xmark");

    }else{

        menuIcon.classList.replace("fa-xmark","fa-bars");

    }

});

if (overlay) {
    overlay.addEventListener("click", () => {

        nav.classList.remove("active");
        overlay.classList.remove("active");

        menuIcon.classList.replace("fa-xmark", "fa-bars");

    });
}

document.querySelectorAll("nav a").forEach(link=>{

    link.addEventListener("click",()=>{

        nav.classList.remove("active");
        overlay.classList.remove("active");
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

    });

});

// ===========================
// EMAILJS CONTACT FORM
// ===========================

emailjs.init("LRCvlp_djMVNWfV48");

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function(e){

        e.preventDefault();

        const btn = this.querySelector("button");

        btn.innerText = "Mengirim...";
        btn.disabled = true;
        console.log("EmailJS aktif");
        emailjs.send("service_zyy03", "template_ypzt9w7", {

            from_name: document.getElementById("name").value,

            from_email: document.getElementById("email").value,

            message: document.getElementById("message").value

        }).then(() => {

            alert("✅ Pesan berhasil dikirim!");

            contactForm.reset();

        }).catch((error) => {

            console.error(error);

            alert("❌ Gagal mengirim pesan.");

        }).finally(() => {

            btn.innerText = "Kirim Pesan";
            btn.disabled = false;

        });

    });

}