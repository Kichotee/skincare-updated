const options={
    root:null,
    threshold:0
}
let visibility=false
const callback=(entries, observer)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            visibility=true
        console.log('entry is intersecting')}
    })
}

const myObserver = new IntersectionObserver(callback, options)
export {
    myObserver,visibility
}  