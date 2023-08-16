const groups = [
    ['vasanth','gunal','kutty'],
    ['ramya','priya','geetha'],
    ['ramu','gokul','sam']
]

for(let group of groups){
  //  console.log(group);
  inner:
    for(let member of group){
        if(member.startsWith('g')){
            console.log(member);
            break inner;
        }
       
    }
}
