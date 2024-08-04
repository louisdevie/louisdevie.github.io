
class Shiny {
    constructor(element) {
        this.element = element;
        this.element.addEventListener("mousemove", this.onMouseMove.bind(this));
        document.addEventListener("scroll", this.onScroll.bind(this));
    }

    onMouseMove(event) {
        const { x, y, width, height } = this.element.getBoundingClientRect();
        const centerX = width / 2;
        const centerY = height * 0.39;
        const dX = event.clientX - x - centerX;
        const dY = event.clientY - y - centerY;
        this.element.style.setProperty("--x", centerX + dX / 2);
        this.element.style.setProperty("--y", centerY + dY / 6);
    }

    onScroll(event) {
        this.element.style.setProperty("--s", window.scrollY/(document.body.clientHeight-window.innerHeight));
    }
}

class Reader {
    constructor(element, openButtons) {
        this.element = element;
        this.layout = element.querySelector(".reader-pages-layout");
        this.pages = Array.from(element.querySelectorAll(".book-page")).reverse();
        for (const btn of openButtons) btn.addEventListener("click", this.onOpenClick.bind(this));
        this.nextBtn = element.querySelector(".reader-next");
        this.nextBtn.addEventListener("click", this.next.bind(this));
        this.prevBtn = element.querySelector(".reader-prev");
        this.prevBtn.addEventListener("click", this.prev.bind(this));
        this.closeBtn = element.querySelector(".reader-close");
        this.closeBtn.addEventListener("click", this.close.bind(this));
        this.close();
    }

    open() {
        this.isOpen = true;
        this.element.classList.add("open");
        document.addEventListener("keyup", this.onKeyUp.bind(this));
    }

    close() {
        this.isOpen = false;
        this.element.classList.remove("open");
        document.removeEventListener("keyup", null);
    }

    onOpenClick() {
        this.open();
        this.goToPage(0);
    }

    next() {
        if (this.currentPage < this.pages.length - 1) {
            this.goToPage(this.currentPage + 1);
        }
    }

    prev() {
        if (this.currentPage > 0) {
            this.goToPage(this.currentPage - 1);
        }
    }

    goToPage(i) {
        const page = this.pages[i];
        this.layout.style.setProperty("--reader-pos", page.offsetLeft);

        if (i == 0) this.prevBtn.classList.add("hidden");
        if (this.currentPage == 0 && i > 0) this.prevBtn.classList.remove("hidden");
        if (i == this.pages.length - 1) this.nextBtn.classList.add("hidden");
        if (this.currentPage == this.pages.length - 1 && i < this.pages.length - 1) this.nextBtn.classList.remove("hidden");

        this.currentPage = i;
    }

    onKeyUp(event) {
        switch (event.code) {
        case "Escape":
            this.close();
            break;
        case "ArrowLeft":
            this.next();
            break;
        case "ArrowRight":
            this.prev();
            break;
        }
    }

}


window.onload = () => {
    new Shiny(document.querySelector(".shiny"));
    new Reader(document.querySelector(".reader"), document.querySelectorAll(".reader-toggle"));

    document.querySelector(".contact").addEventListener("click", (event) => {
        const e=document.createElement("a");e.innerText=String.fromCharCode(10+
        98,101,109,97,110,103,97,111,102,102,105,99,105,101,108,46,114,119,98.,
        121,46,102,114,64,103,109,97,105,108,46,99,111,109);e.href="mailto:"+e.
        innerText;e.classList.add("btn");e.classList.add("btn-solid");event.///
        target.after(e);event.target.remove();/////////////////////////////////
    })
}
