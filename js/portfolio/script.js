


    let portfolio = document.getElementById("portfolio-items") , grid , rows , columns , previousButtons , nextButtons , itemsArrayStore , itemsCount  , gridWidth;
    let objectProjects  , portfolioItems , closeButton , elementTable ,
    portfolioButtons = [...document.querySelectorAll(".portfolio-button")] ;
    fetch("./../../js/portfolio/projects.json").then((res) => {
        let data = res.json()
        return data
    }).then (results => {
        console.log (results)
        objectProjects = results.htmlCssJsProjects
    })
    

function createElements (){
    portfolio.innerHTML = ``
  for (const objectItem in objectProjects  ){
let portfolioContent =  document.createElement("div")
   portfolioContent.classList.add("portfolio-content" , "section-content" , objectItem )
   portfolioContent.innerHTML += ` 
   <div class="portfolio-content-head capitalize">
   <i class="fa-solid fa-arrow-right arrow-icon"></i>
   <h3>${objectItem.split("-").join(" ")}</h3>
   </div>`
//    console.log (objectItem.split("_").join(" "))
   portfolio.appendChild(portfolioContent)
   /****************************************************/
   let portfolioContentItems =  document.createElement("div")
   portfolioContentItems.classList.add("portfolio-content-items" ,  `${objectItem}-items` )
   portfolioContent.appendChild(portfolioContentItems)
   portfolioContentItems.innerHTML+= `
   <div class="items" id ="${objectItem}">
   </div>`
   let prevBtn = document.createElement("div")
   prevBtn.classList.add("slider-arrow", "prev-btn")
   prevBtn.innerHTML+= `<i class="fa-solid fa-caret-left"></i> `

   /****************************************************/
   let projectItems = objectProjects[objectItem]
   for (let i=0 ; i< projectItems.length ; i ++  ){
       document.getElementById(`${objectItem}`).innerHTML += `
       <div class="portfolio-content-item ${objectItem}-item" data-name="${projectItems[i].projectName}">
       <img src="images/portfolio/${projectItems[i].projectImg}" alt="">
       </div>
       `
    }
    /****************************************************/
    let nextBtn = document.createElement("div")
    nextBtn.classList.add(`${objectItem}-right-arrow` ,  "slider-arrow" , "next-btn")
    nextBtn.innerHTML+= `<i class="fa-solid fa-caret-right"></i> `
    /****************************************************/
    grid = document.getElementById(`${objectItem}`),
    gridItems = [...grid.getElementsByTagName("div")] ;
    const gridComputedStyle = window.getComputedStyle(grid);
    rows = gridComputedStyle.getPropertyValue("grid-template-rows").split(" ").length
    columns = gridComputedStyle.getPropertyValue("grid-template-columns").split(" ").length   
    /****************************************************/
    if ( gridItems.length > columns ){
        grid.before(prevBtn) 
        grid.after(nextBtn) 
        gridWidth = grid.offsetWidth
    }
    grid.style.width = gridWidth + "px"
    /****************************************************/
    nextButtons = [...document.querySelectorAll(`.next-btn`)]
    previousButtons = [...document.querySelectorAll(`.prev-btn`)]
    /****************************************************/
    nextButtons.map(nextButton => {
        nextButton.onclick = (e) => {
            let  index = 0 ;
            let target = e.currentTarget ,
            itemsElement = (e.currentTarget).previousElementSibling,
            itemsArray = [...itemsElement.getElementsByTagName("div")]
            itemsArray.map(item => {
                if   (item.classList.contains("display-none")){
                    index ++       
                }
            })
            if ( itemsArray.length > columns && index < (itemsArray.length - columns ) ){
                itemsArray[index].classList.add("display-none")
                index ++       
              } 
           
        }
    })
    previousButtons.map(previousButton => {
        previousButton.onclick = (e) => {
            let  index = 0 ;
            let target = e.currentTarget ,
                itemsElement = (e.currentTarget).nextElementSibling,
                itemsArray = [...itemsElement.getElementsByTagName("div")]
                itemsArray.map(item => {
                if(item.classList.contains("display-none")){
                       index ++       
                   }
                })
            if ( index > 0 ){
                index --     
                itemsArray[index].classList.remove("display-none")
            } 
            
        }
    }) 
    /****************************************************/
    portfolioItems = [...document.querySelectorAll(".portfolio-content-item")]
    portfolioItems.map(portfolioItem => {
        portfolioItem.onclick = (e) => {
            let element = e.currentTarget , 
                itemName = element.dataset.name ,
                section = element.parentElement.id,
                sectionArray = objectProjects[section];
                sectionArray.map(sectionitem => {
                    if (sectionitem.projectName == itemName){
                        console.log (sectionitem)
                        let project = document.createElement("div")
                        project.classList.add("project")
                        portfolio.after(project)
                        project.innerHTML = `
                        <button class="project-close"><i class="fa-solid fa-xmark"></i></button>
                        <div class="project-img">
                            <img src="images/portfolio/${sectionitem.projectImg}" alt="">
                        </div>
                        <div class="project-info">
                            <h3 class="project-info-head capitalize">${sectionitem.projectName}</h3>
                            <p class="project-info-desc capitalize">${sectionitem.projectDesc}</p>
                            <a href="${sectionitem.projectURL}" target="_blank" rel="noopener noreferrer" class="capitalize">${sectionitem.projectName} link</a>
                        </div>
                        `
                    }
                })
                portfolio.classList.add("display-none")
            closeButton = document.querySelector(".project-close")  ; 
            elementTable = document.querySelector(".project")  ; 
            let headerItem = document.querySelector(".header")  ; 

            
            closeButton.onclick = () => {
                elementTable.remove()
                portfolio.classList.remove("display-none")
            }
            headerItem.onclick = () => {
                elementTable.remove()
                portfolio.classList.remove("display-none")
             }
        }
    })
}
}

window.addEventListener("DOMContentLoaded" ,createElements);
window.addEventListener("load", createElements);
window.addEventListener("resize", createElements);

portfolioButtons.map(portfolioButton => {
    portfolioButton.onclick = (e) => {
        let currentButton = e.currentTarget
    //    console.log (currentButton.dataset.project);
    let projectName = currentButton.dataset.project ;
       fetch("./../../js/portfolio/projects.json").then((res) => {
        let data = res.json()
        return data
    }).then (results => {
            objectProjects = results[projectName]
            createElements()
    })
    
    }
})
