const API = async() =>{
    let req = await fetch("http://localhost:8080/news")
    let res = await req.json()
    Mapper(res)
    console.log(res);
    
}

API()

const Mapper=(data)=>{
    data.map((ele)=>{
        console.log(ele);
        let div = document.createElement('div')

        let image = document.createElement('img')
        image.src = ele.image
        image.classList.add('img')

        let title = document.createElement('h1')
        title.innerHTML = ele.title

        let content = document.createElement('p')
        content.innerHTML = ele.content

        div.appendChild(image,title,content)

        document.getElementById("news").append(div)
    })
}