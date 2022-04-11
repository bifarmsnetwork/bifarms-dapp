import { BusdABI,seedABI } from "./abi";
import {ethers} from 'ethers'
import modal from './modal'
import {address,token} from './address'

const contractBusd = async()=>{
    let provider = await modal()
    let signer = provider.getSigner()
    let contract  =new ethers.Contract(token, BusdABI,signer)
    return contract
}

const contractSeed = async()=>{
    let provider = await modal()
    let signer = provider.getSigner()
    let contract  =new ethers.Contract(address, seedABI,signer)
    return contract
}

export const approve = async()=>{
    let cont = await contractBusd()
    let value = 100000000000000000000000n
    await cont.approve(address,value)
}

export const checkApprove = async(owner)=>{
    let cont = await contractBusd()
    console.log(cont,owner)
    let result = await cont.allowance(owner,address)
    return result
}

export const getDeposit = async(amount)=>{
    let cont = await contractSeed()
    console.log(cont)
    await cont.deposit(ethers.utils.parseEther(amount.toString()))
}

export const claimInitialToken = async(owner)=>{
    let cont = await contractSeed()
    let details = await cont.claimDetails(owner)
    // console.log(details[0].toString().split(','))
    let arr = details[0].toString().split(',')
    if(arr[0]==="0"){
        return 'disabled'
    }
    else {
        await cont.claimTokens(0)
        return 'enabled'
    }
}

export const claimToken = async(owner)=>{
    let cont = await contractSeed()
    //read clam details
    let details = await cont.claimDetails(owner)
    // console.log(details[0].toString().split(','))
    let arr = details[0].toString().split(',')
    let value =1
    console.log(arr)
    for(let i=1;i<arr.length;i++){
        if(arr[i]==="0"){
            value++
        }else break;
    }
    console.log(value)
    await cont.claimTokens(value) //value between 1 to 15
}

export const checkDeposit = async(owner)=>{
    let cont = await contractSeed()
    let deposits = await cont.totalDeposit()
    // let sum = deposits[0].toString().split(',').map(ele=>ethers.utils.formatUnits(ele.toString(),18)).reduce((a,b)=>parseInt(a.toString())+parseInt(b.toString()))
    let sum = deposits.toString()
    // console.log(ethers.utils.formatUnits(sum.toString(),18))
    console.log(sum)
    return parseInt(ethers.utils.formatUnits(sum,18))
}

export const checkBalance = async(owner)=>{
    let cont = await contractBusd()
    let balance = await cont.balanceOf(owner)
    return ethers.utils.formatUnits(balance.toString(),18)
}