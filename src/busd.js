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

export const deposit = async()=>{
    let cont = await contractSeed()
    console.log(cont)
    let amount = "500"
    await cont.deposit(ethers.utils.parseEther(amount))
}