window.addEventListener("load", () => {

    const main = document.querySelector("main");
    if(main){
        main.classList.add("fade-in");
    }

    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function(e) {

            if (this.hostname === window.location.hostname) {
                e.preventDefault();

                let href = this.href;

                if(main){
                    main.classList.remove("fade-in");
                }

                setTimeout(() => {
                    window.location.href = href;
                }, 500);
            }
        });
    });

    const video = document.getElementById("bg-video");
    const soundBtn = document.getElementById("sound-btn");

    if(video && soundBtn){
        soundBtn.addEventListener("click", () => {
            video.muted = !video.muted;
            soundBtn.textContent = video.muted ? "🔇" : "🔊";
        });
    }

});
