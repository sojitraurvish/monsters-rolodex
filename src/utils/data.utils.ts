export const getData=async<T>(url:string):Promise<T>=>{
    const res=await fetch(url);
    return await res.json();
}

// const tsrs:(a:string,b:number,c:boolean)=>boolean=(a,b,c)=>{return true;}