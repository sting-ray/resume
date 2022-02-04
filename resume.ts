class SlideShow {
    index = 1;
    slides: HTMLCollectionOf<HTMLElement>;

    constructor() {
        this.slides = document.getElementsByClassName("csatSlide") as HTMLCollectionOf<HTMLElement>;
        this.showSlide();

        const next = document.getElementById("next") as HTMLElement;
        next.addEventListener("click", this.slideRight.bind(this));
        const prev = document.getElementById("prev") as HTMLElement;
        prev.addEventListener("click", this.slideLeft.bind(this))
    }

    slideRight() {
        this.index++;
        this.showSlide();
    }

    slideLeft() {
        this.index--;
        this.showSlide();
    }

    showSlide() {
        if (this.index > this.slides.length) {
            this.index = 1;
        }
        if (this.index < 1) {
            this.index = this.slides.length;
        }
        for (let i = 0; i < this.slides.length; i++) {
            this.slides[i].style.display = "none";
        }
        this.slides[this.index-1].style.display = "block";
        // setTimeout(this.slideRight.bind(this), 5000); // this causes issues, probably because it is being set within a class...
    }
}

class NavButton {
    active = false;
    button: Element;
    id: string;

    constructor(element: Element) {
        this.button = element;
        const text = this.button.textContent as string;
        this.id = text.replace(/ /g, '_');
        this.button.addEventListener("click", this.loadContent.bind(this))
    }

    loadContent() {
        for (let i=0; i < contentNode.length; i++) {
            if (contentNode[i].id == this.id) {
                contentNode[i].style.display = "block";
            }
            else {
                contentNode[i].style.display = "none";
            }
        }
    }
}

const contentNode = document.querySelectorAll(".content > div") as NodeList;

const navButtons = [];
const navButtonNodes = document.querySelectorAll(".navBar > button");
for (let i=0; i < navButtonNodes.length; i++) {
    navButtons.push(new NavButton(navButtonNodes[i]));
}

const cSat = new SlideShow();

// const next = document.getElementById("next") as HTMLElement;
// const prev = document.getElementById("prev") as HTMLElement;
// next.addEventListener("click", cSat.slideRight);