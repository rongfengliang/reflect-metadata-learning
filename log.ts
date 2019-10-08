import "reflect-metadata"
function log(target:any,key:any){
    var t = Reflect.getMetadata("design:type", target, key);
    console.log(`${key} type: ${t.name}`);
}

function logParamTypes(target : any, key : string) {
    var types = Reflect.getMetadata("design:paramtypes", target, key);
    var s = types.map(a => a.name).join();
    console.log(`${key} param types: ${s}`);
  }
export default  log

export {
    log,
    logParamTypes
}