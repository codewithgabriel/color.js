/*
name: color
version: 0.0.1v
author : Olatoye Olaide Gabriel
description: program to color stdout
github : codewithgabriel
email(report/feedback): olatoyeolaide@gmail.com


warning
=======
The use of this program is free and can be edit to suit personal utility,
however reference should be make to the original author of this program, Thank you.

if I have helped you, you can buy me a cofee @ olatoyeolaide@gmail.com.
good bye.
*/
class Color {
    yellow = (value) => {
        return `\x1b[33m${value}${this.end()}`.trim()
    }
    bold = (value) => {
        return `\x1b[1m${value}${this.end()}`.trim()
    }
    lightblack = (value)=>{
        return `\x1b[02m${value}${this.end()}`.trim()
    }
    blink = (value)=>{
        return `\x1b[05m${value}${this.end()}`.trim()
    }
    underline = (value)=>{
        return `\x1b[04m${value}${this.end()}`.trim()
    }
    italic = (value)=>{
        return `\x1b[03m${value}${this.end()}`.trim()
    }
    whitebg = (value)=>{
        return `\x1b[07m${value}${this.end()}`.trim()
    }
    deepblack = (value)=>{
        return `\x1b[30m${value}${this.end()}`.trim()
    }
    red = (value)=>{
        return `\x1b[31m${value}${this.end()}`.trim()
    }
    green = (value)=>{
        return `\x1b[32m${value}${this.end()}`.trim()
    }
    blue = (value)=>{
        return `\x1b[34m${value}${this.end()}`.trim()
    }
    purple = (value)=>{
        return `\x1b[35m${value}${this.end()}`.trim()
    }
    lightblue = (value)=>{
        return `\x1b[36m${value}${this.end()}`.trim()
    }
    lightredbg = (value)=>{
        return `\x1b[41m${value}${this.end()}`.trim()
    }
    lightgreenbg = (value)=>{
        return `\x1b[42m${value}${this.end()}`.trim()
    }
    yellowbg = (value)=>{
        return `\x1b[43m${value}${this.end()}`.trim()
    }

    lightbluebg = (value)=>{
        return `\x1b[44m${value}${this.end()}`.trim()
    }
    purplebg = (value)=>{
        return `\x1b[45m${value}${this.end()}`.trim()
    }
    lighterbluebg = (value)=>{
        return `\x1b[46m${value}${this.end()}`.trim()
    }
    
    whitesmokebg = (value)=>{
        return `\x1b[47m${value}${this.end()}`.trim()
    }
    blur = (value)=>{
        return `\x1b[90m${value}${this.end()}`.trim()
    }
    deepred = (value)=>{
        return `\x1b[91m${value}${this.end()}`.trim()
    }
    deepgreen = (value)=>{
        return `\x1b[92m${value}${this.end()}`.trim()
    }

    deepyellow = (value)=>{
        return `\x1b[93m${value}${this.end()}`.trim()
    }
    deepblue = (value)=>{
        return `\x1b[94m${value}${this.end()}`.trim()
    }
    
    deeppurple = (value)=>{
        return `\x1b[95m${value}${this.end()}`.trim()
    }
    blurblue = (value)=>{
        return `\x1b[96m${value}${this.end()}`.trim()
    }
    greenbg = (value)=>{
        return `\x1b[100m${value}${this.end()}`.trim()
    }
    redbg = (value)=>{
        return `\x1b[101m${value}${this.end()}`.trim()
    }
    greenbglight = (value)=>{
        return `\x1b[102m${value}${this.end()}`.trim()
    }
    deepyellowbg = (value)=>{
        return `\x1b[103m${value}${this.end()}`.trim()
    }
    bluebg = (value)=>{
        return `\x1b[104m${value}${this.end()}`.trim()
    }
    purplebgdeep = (value)=>{
        return `\x1b[105m${value}${this.end()}`.trim()
    }
    lightbluebgmid = (value)=>{
        return `\x1b[106m${value}${this.end()}`.trim()
    }
    whitebgdeep = (value)=>{
        return `\x1b[107m${value}${this.end()}`.trim()
    }
    secret = (value) => {
        return `\x1b[30m${value}` 
    }
    secretpurple =(value)=>{
        return this.secretpurplebg(`\x1b[35m${value}`)
    }
    secretpurplebg =(value)=>{
        return `\x1b[45m ${value}`
    }

    secretred = (value)=>{
        return this.secretredbg(`\x1b[31m${value}`)
    }
    secretredbg = (value)=>{
        return `\x1b[41m${value}`
    }

    end = () => {
        return `\x1b[0m`
    }
}

module.exports = new Color()
