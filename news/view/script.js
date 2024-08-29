const API = async() =>{
    let req = await fetch("http://localhost:8090/news")
    let res = await req.json()
    Mapper(res)
    // console.log(res);
    
}

API()

const Mapper=(data)=>{
    data.map((ele)=>{
        console.log(ele);
    })
}