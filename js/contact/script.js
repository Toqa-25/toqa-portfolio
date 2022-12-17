let review = document.querySelector(".review") ; 
let reviewsImgArray , reviewRows , reviewColumns ;
fetch("https://toqa-25.github.io/reviews-json/reviews.json").then((res) => {
    let data = res.json()
    return data
}).then (results => {
    reviewsImgArray = results
})
// console.log (reviewsImgArray)
function createReviewsElements (){ 
/****************************************************/
// let reviewsImgArray ;
fetch("https://toqa-25.github.io/reviews-json/reviews.json").then((res) => {
    let data = res.json()
    return data
}).then (results => {
    reviewsImgArray = results
})
    review.innerHTML = ``
let reviewHeader =  document.createElement("div") ;
   reviewHeader.classList.add("capitalize" , "slider-header")
   reviewHeader.innerHTML += ` 
   <i class="fa-solid fa-arrow-right arrow-icon"></i>
   <h3 capitalize>clients reviews</h3>
`
review.appendChild(reviewHeader)
   /****************************************************/
   let reviewItems =  document.createElement("div")
   reviewItems.classList.add("slider-items"  )
   review.appendChild(reviewItems)
   reviewItems.innerHTML+= `
   <div class="items" id ="review-items">
   </div>`
   /****************************************************/
   let prevBtn = document.createElement("div")
   prevBtn.classList.add("slider-arrow", "prev-btn")
   prevBtn.innerHTML+= `<i class="fa-solid fa-caret-left"></i> `

   /****************************************************/
   for (let i=0 ; i< reviewsImgArray.length ; i ++  ){
       document.getElementById(`review-items`).innerHTML += `
       <div class="review-item item" >
       <img src="images/reviews/${reviewsImgArray[i].reviewImg}" alt="">
       </div>
       `
    }
    /****************************************************/
    let nextBtn = document.createElement("div")
    nextBtn.classList.add(  "slider-arrow" , "next-btn")
    nextBtn.innerHTML+= `<i class="fa-solid fa-caret-right"></i> `
    /****************************************************/
    let grid = document.getElementById(`review-items`),
    gridItems = [...grid.getElementsByTagName("div")] , gridWidth;
    const gridComputedStyle = window.getComputedStyle(grid);
    reviewRows = gridComputedStyle.getPropertyValue("grid-template-rows").split(" ").length
    reviewColumns = gridComputedStyle.getPropertyValue("grid-template-columns").split(" ").length   
    /****************************************************/
    console.log ("grid", grid)
    console.log ("reviewColumns", reviewColumns)
    if ( gridItems.length > reviewColumns ){
        grid.before(prevBtn) 
        gridWidth = grid.offsetWidth
        grid.after(nextBtn) 
        gridWidth = grid.offsetWidth
    }
    // gridWidth = grid.offsetWidth
    // grid.style.width = gridWidth + "px"
    /****************************************************/
    let nextButtons = [...document.querySelectorAll(`.review .next-btn`)] ,
    previousButtons = [...document.querySelectorAll(`.review  .prev-btn`)]
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
    let portfolioItems = [...document.querySelectorAll(".portfolio-content-item")]
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
            let  closeButton = document.querySelector(".project-close")  ; 
            let  elementTable = document.querySelector(".project")  ; 
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
// createReviewsElements ()
// window.onload  = createReviewsElements
document.querySelector('[data-section="contact"]').addEventListener("click", createReviewsElements)
// window.addEventListener("load", createReviewsElements);
window.addEventListener("resize", createReviewsElements);

// fetch("https://toqa-25.github.io/reviews-json/reviews.json").then((res) => {
//     let data = res.json()
//     return data
// }).then (results => {
//     // reviewsImgArray = results
//     console.log ("contact results",results)
// })
