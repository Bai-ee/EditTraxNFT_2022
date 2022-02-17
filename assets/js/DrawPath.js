
import * as DrawSVGPlugin from "./DrawSVGPlugin.js";
// console.log(drawSVG);

// let one = document.querySelector("#1");
// let two = document.querySelector("#2");
// let three = document.querySelector("#3");
// let four = document.querySelector("#4");
// let five = document.querySelector("#5");

// gsap.set([
// one,
// two,
// three,
// four,
// five,
// ],
// {autoAlpha:1, drawSVG:"0% 0%", x:0});

gsap.registerPlugin(DrawSVGPlugin);
// gsap.set(twoAEnd, {drawSVG:"0% 0%",x:4 })


let n3End = document.querySelector("#n3end");
let k1End = document.querySelector("#k1end");
let k2End = document.querySelector("#k2end");
let a2end = document.querySelector("#a2end");


gsap.set([
        n3End,
        k1End,
        k2End,
        a2end
    ],
    {autoAlpha:1, drawSVG:"0% 0%", x:0});

console.log(n3End,k1End, DrawSVGPlugin);

let del = 1;
let custEase = "Power4.easeOut";
const mainTl = gsap.timeline({yoyo:false,repeat:0});
mainTl.to(a2end, {duration:3, x:0, drawSVG:"0% 98%", ease:custEase, delay:del},1)
mainTl.to(k1End, {duration:4, x:0, drawSVG:"0% 100%",ease:custEase, delay:del},0)
mainTl.to(k2End, {duration:4, x:0, drawSVG:"0% 100%",ease:custEase, delay:del},0)
mainTl.to(n3End, {duration:4, x:0, drawSVG:"0% 100%",ease:custEase, delay:del},0)