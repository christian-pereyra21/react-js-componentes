const productos= [
    {id:1 ,nombre:"auriculares jbl wave",precio:32000 ,categoria:"auriculares" ,detalle:"" ,stock:50 },
    {id:2,nombre:"auriculares jbl tune 500",precio:20550 ,categoria:"auriculares" ,detalle:"" ,stock:50 },
    {id:3,nombre:"auriculares jbl quantum 350",precio:94500 ,categoria:"auriculares" ,detalle:"" ,stock:50 },
    {id:4,nombre:"Parlante Stromberg Portatil Bump",precio:92650 ,categoria:"parlante" ,detalle:"" ,stock:25 },
    {id:5,nombre:"Parlante JBL Party Box 310 Hero",precio:623000 ,categoria:"parlante" ,detalle:"" ,stock:25 },
    {id:6,nombre:"Parlante JBL GO 3",precio:27870 ,categoria:"parlante" ,detalle:"" ,stock:25 },
    {id:7,nombre:"Controlador Pionner WE GO 4",precio:113420 ,categoria:"controlador" ,detalle:"" ,stock:10 },
    {id:8,nombre:"Controlador DJ Hercules Inpulse 3",precio:252147 ,categoria:"controlador" ,detalle:"" ,stock:10},
    {id:9,nombre:"Controlador DDJ-200",precio:358804 ,categoria:"controlador"  ,detalle:"" ,stock:10 },
]

export const getProductos = () =>{
    return new promise ((resolve)=>{
        setTimeout(()=>{
            resolve(productos)
        },1000)
    })
}