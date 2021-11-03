function main2(){
    const a_main2 = [1, 2, 3];
    const b_main2 = map_main2(square_main2, a_main2);
    const para1 = document.createElement('p');
    document.body.appendChild(para1);
    para1.textContent = a_main2;
    const para2 = document.createElement('p');
    document.body.appendChild(para2);
    para2.textContent = b_main2;
    function square_main2(i){
        return i*i;
    }
    function map_main2(f_map, a_map) {
        a_map[0] = 100;
        let result = []; // Create a new Array
        let i; // Declare variable
        for (i = 0; i != a_map.length; i++)
          result[i] = f_map(a_map[i]);
        return result;
      }      
}