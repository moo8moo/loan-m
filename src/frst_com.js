import './moo.css';
export default function Paner() {
    return (
        <div className={"paner"}>
            <h2 className={"tl"}>
                moo
            </h2>
        </div>
    );

}

function Iner_l({ name, email, children }) {
    return (
        <div style={{ border: 'solid 2px green', margin: '20px', width: '400px', height: '100px', display: 'flex', justifyContent: 'center', alignContent: 'center', flexDirection: 'column', textAlign: 'center' }}>
            <h4 style={{ color: 'white', margin: '5px' }}>  {name || 'this is a tirgr bage'} </h4>
            {/* <hr /> */}
            {children}

            <p style={{ color: 'white', margin: '5px', borderTop: 'solid 1px' }}> {email || 'mnoo mno'} </p>
        </div>

    );
}


function Left() {
    let obj = [
        { key: 1, name: 'medoo', email: 'goog og', style: { background: 'blue', color: 'white' } },
        { key: 2, name: 'mehoo', email: 'ahmed', style: { background: 'lightgray' } },
        { key: 3, name: 'meo', email: 'soo', style: { background: 'lightgreen' } },
        { key: 4, name: 'dedo', style: { background: 'lightyellow' } },
        { key: 5, name: 'moo', style: { background: 'lightpink' } },
        { key: 6, name: 'sedo', style: { background: 'red', color: 'white' } }
    ];
   
   let e=obj.map(function(el){
    return(
    <div key={el.key}  style={{ margin:'10px', border:'solid 2px green' , color:'white' , width:'250px', textAlign:'center'}}>
          <h1 style={el.style|| {borderBottom:'solid 2px '}}>{el.name}</h1>
          <h1  >{el.email}</h1>

    </div>
    );
   });
    return (
        <div>
            {e}
            {/* <Iner_l email={'medo'} name={'goog og'} />
            <Iner_l email={'mehoo'} />
            <Iner_l name={'three'} email={'ahmed'} />
            <Iner_l name={'four'}  />
            <Iner_l name={'five'} email={'sayed'} />
            <Iner_l > <div style={{ background: 'red' }} >m</div></Iner_l> */}

        </div>
    );
}
// اليمين  
function Iner_r({ children, name, icon, style ,classname}) {

    let p = {
        background: 'grey',
    }
    return (

        <div className={style || 'r'} style={{ gap: '20px', borderRadius: '10px', padding: '10px', color: 'white', margin: '10px' }}>

            <p className={classname}>
                {name}
            </p>

            <p className={icon}>
            </p>
            <p className={icon}>
            </p>
            <p className={icon}>
            </p>

            {children}

        </div>

    );
}
function Right() {

    let arr=[{name:'hamadaبابلا' ,key:1 ,c:<img src="https://www.linkedin.com/in/moo-noo-618500325/?lipi=urn%3Ali%3Apage%3Ad_flagship3_notifications%3BEgtIKeOUQHOa4hfGypx3eQ%3D%3D" alt="3D Image" width={"50px"} /> },{name:'tdo' ,icon:'fas fa-leaf red',key:2},{name:'koko' ,icon:'far fa-heart blue',key:3,c:<img src='/xo.png' alt="3D Image" width={'50px'} ></img>},{name:'ddod',class:'classname',key:4}];
 
let e= arr.map(function(el){
    
    console.log(el.name +"  moo");
       return(
        <Iner_r key={el.key}  name={el.name} icon={el.icon} classname={arr.class}> {el.c}</Iner_r>
    );

});

    return (
        <div>
            <div style={{ gap: '20px', border: 'solid 2px green', width: '200px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', margin: '20px', paddingLeft: '10px', paddingRight: '10px' }}>
               {e} 
               
                {/* <Iner_r />
                <Iner_r />
                <Iner_r icon={'fas fa-leaf red'} name={'nedoo'}  ><div>  <img src="../3d.png" alt="3D Image" width={"50px"} /></div> </Iner_r>
                <Iner_r icon={'far fa-heart blue'} name={'mehoo'} > <div> <img src='/xo.png' alt="3D Image" width={'50px'} ></img> </div></Iner_r>
                <Iner_r style={'hide'} />
                <Iner_r style={'hide'} />
                <Iner_r style={'hide'} />
                {/* <Iner_r style={'hide'} /> */}
                {/* <Iner_r classname={'classname'}   name={'meoo'} ></Iner_r>  */}

            </div>
        </div>

    );


}
export function Cont() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Left />
            <Right />
        </div>
    );
}
