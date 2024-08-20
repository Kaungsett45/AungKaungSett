import React from 'react'

import { Link } from 'react-router-dom'
import arrow from '../../../public/arrow.svg';
import usecount from "../../../public/usecount.svg";

import bg3 from '../../../public/bg3.svg'

export default function B1() {
  return (
    <div>
      <img
        src={bg3}
        alt="virtual-dom"
        loading="lazy"
        className="my-2 w-full rounded-lg px-4 "
      />
      <div className="leading-relaxed text-left my-4">
        <p className="px-4">
          {" "}
          <span className="font-bold text-[#FF6F61]">1. React Developer Tools</span> 
          <br></br>
            React Developer Tools က React applications ရဲ့ components tree ကို ကြည့်ရှုပြီး, state နဲ့ props တွေကို စစ်ဆေးနိုင်တဲ့ extension ဖြစ်ပါတယ်။ Debugging လုပ်တဲ့အခါ အလွန်အသုံးဝင်ပါတယ်။
        </p>
      
      </div>
      <div className="leading-relaxed text-left my-4">
        <p className="px-4">
          {" "}
          <span className="font-bold text-[#FF6F61]">2. ESLint</span> 
          <br></br>
          ESLint သည် React project များတွင် quality code ရေးသားခြင်းကို အထောက်အကူပြုသည့် အဓိက tool တစ်ခုဖြစ်ပြီး, development နှင့် collaboration လုပ်သောအခါ အမှားများကို လျှော့ချပေးသည်။   </p>
      
      </div>
    
      <div className="leading-relaxed text-left my-4">
        <p className="px-4">
          <span className="font-bold text-[#FF6F61]">  3. Prettier - Code formatter</span> 
            <br></br>
            Prettier က code formatting အတွက် အလွန်အသုံးဝင်တဲ့ extension ဖြစ်ပြီး, ရှင်းလင်းသေချာတဲ့ format နဲ့ code ရေးသားနိုင်အောင် ကူညီပေးပါတယ်။ Code consistency တိုးတက်စေပါတယ်။
        </p>
       
      </div>

      <Link to="/blogs" className="flex justify-center mx-2 my-3">
        <img
          src={arrow}
          loading="lazy"
          alt="back"
          className="bg-[#1A8B9C] px-4 py-1  rounded-full font-mari"
        />
      </Link>
    </div>
  );
}
