class ProjectItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    this.element.classList.add("Project__item-focused");
  }

  deselect() {
    this.element.classList.remove("Project__item-focused");
  }
}

class Project {
  constructor(element) {
    this.element = element;

    this.items = element.querySelectorAll(".Projects__item");
    this.items = Array.from(this.items).map((item) => {
      return new ProjectItem(item);
    });

    this.arrowLeft = element.querySelector(".Carousel__arrow-left");
    this.arrowRight = element.querySelector(".Carousel__arrow-right");

    this.arrowLeft.addEventListener('click', (event) => {
      this.updateActive('left');
    })

    this.arrowRight.addEventListener('click', (event) => {
      this.updateActive('right');
    })
    this.activeData = 0;
  }

  updateActive(arrow) {
    if (arrow === null) return;
    this.items[this.activeData].deselect();
    if (arrow === "left") {
      if (this.activeData === 0) this.activeData = 3;
      this.items[--this.activeData].select();
    }
    if (arrow === "right") {
      if (this.activeData === 2) this.activeData = -1;
      this.items[++this.activeData].select();
    }
  }
}

let projects = document.querySelectorAll(".Projects");
projects = Array.from(projects).map(project => new Project(project));
