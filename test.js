const elements = [
    {
      id: 1,
      content: "This is my title",
    },
    {
      id: 2,
      content: "This is my title 2",
    },
    {
      id: 3,
      content: "This is my title 3",
    },
    {
      id: 4,
      content: "div",
      child: [
        {
          id: 5,
          content: "Our Services",
        },
        {
          id: 6,
          content: "img",
        },
      ],
    },
    {
      id: 7,
      content: "div",
      child: [
        {
          id: 8,
          content: "div",
          child: [
            {
              id: 9,
              content: "Hi",
            },
          ],
        },
      ],
    },
  ];
   
  /**
  *
  * @param {*} id
  * 2 - This is my title 2
  * 8 - div
  * 9 - hi
  * 5 - Our Services
  */
 

  const getElementById = (eachElement,num) =>{
    if(eachElement.child){
      if(eachElement.id == num)
        console.log(eachElement.content);
      for(let i = 0; i<eachElement.child.length;i++){
        getElementById(eachElement.child[i], num);
      }
    }else{
      if(eachElement.id == num)
        console.log(eachElement.content);
    }
  }


    for(i=0;i<elements.length;i++){
      getElementById(elements[i], 6);
 
    }
    
 
