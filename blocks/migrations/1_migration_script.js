const exp = artifacts.require('Student')
module.exports = (depli)=>{
    depli.deploy(exp)
}