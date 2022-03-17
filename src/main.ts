export function add(x: number, y: number) {
  return x + y;
}


export  function dirtyAdd(obj: {value: string}, x: number, y: number){

const parsed: number = Number(obj.value)
if(isNaN(parsed)){
  return 0;
}

return Number(obj.value) + x + y;
}