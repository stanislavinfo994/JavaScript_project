console.log();
const show = (value, type)=>console.log(`typeof (${value}) is ${type}`);

const whatIsMyTypeOf = (value)=>{
    switch(typeof value){
        case 'boolean':
        case 'number':
        case 'string': return show(value, typeof value);
        default: show(value, 'Glory to Ukraine')
    }
}

whatIsMyTypeOf(true);
whatIsMyTypeOf(33);
whatIsMyTypeOf('fuckRussia');
whatIsMyTypeOf({});
whatIsMyTypeOf(window);
