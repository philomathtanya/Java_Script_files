var json = [{
    id: 2,
    name: "tanya",
    last_name: "bansal",
    salary: 0,

}]/////////////////////////////////////array:[]
////////////json files//dict//"{}"
////////////////[{}] json with array
//first way
console.log(json);
 //second way
json.forEach(element => {
    console.log(`name:${element.name} \n salary:${element.salary}`);
})
;