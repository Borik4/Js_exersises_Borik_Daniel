let library = [ 
    { author: 'Bill Gates', title: 5, libraryID: 1254},
    { author: 'Steve Jobs', title: 8, libraryID: 4264},
    { author: 'Suzanne Collins', title: 6, libraryID: 3248},
    { author: 'Suzanne Collins', title: 6, libraryID: 3245}
    ];

function func(a, b){
    if(a.title > b.title) return 1;
    if (a.title == b.title) return 0;
    if (a.title < b.title) return -1;

}

library.sort(func)
console.log(library)
