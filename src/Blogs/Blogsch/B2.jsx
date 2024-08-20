import React from 'react'

import { Link } from 'react-router-dom'
import arrow from '../../../public/arrow.svg';
import reuse from "../../../public/Reusest.svg";
import usecount from "../../../public/usecount.svg";

import b2ex from "../../../public/b2ex.svg";

export default function B1() {
  return (
    <div>
      <img
        src={reuse}
        alt="virtual-dom"
        loading="lazy"
        className="my-2 w-full rounded-lg px-4 "
      />
      <div className="leading-relaxed text-left">
        <p className="px-4">
          {" "}
          <span className="font-bold text-[#FF6F61]">UseState</span> က
          ကျွန်တော်တို့ functional component တွေမှာ stateတွေကို ထိန်းချုပ်ဖို့
          အတွက် အသုံးပြုလေ့ရှိတဲ့ hook တစ်ခုဖြစ်ပါတယ်။
        </p>
        <p className="px-4 my-2">
          {" "}
          ဥပမာ ကျွန်တော်တို့{" "}
          <span className="font-bold text-[#FF6F61]">UseState</span>{" "}
          အသုံးပြုပြီး counter တိုးတာတို့ button color change တာ
          အစရှိသဖြင့်ပြုလုပ်လို့ရပါတယ်။
        </p>
      </div>
      <div className="flex justify-center">
        <img
          src={usecount}
          alt="virtual-dom"
          className="my-2 w-[460px]  rounded-lg px-4 flex justify-center"
        />
      </div>
      <div className="leading-relaxed text-left">
        <p className="px-4">
          ဒီ img မှာဆိုရင်တော့{" "}
          <span className="font-bold text-[#FF6F61]">count</span> က ပထမ state
          value ဖြစ်ပြီး ကျွန်တော်တို့ရဲ့ state ကို track လုပ်ဖို့
          အသုံးပြုပါတယ်။
          <span className="font-bold text-[#FF6F61]"> setCount</span> ကတော့
          state value ကိုပြောင်းလဲပြီးတော့ re-render လုပ်ဖို့ကူညီပါတယ်။
        </p>
        <a
          href="https://youtu.be/V9i3cGD-mts?t=7"
          target="_blank"
          className="text-blue-500 flex justify-center font-bold my-4 px-4"
        >
          ဤအကြောင်းအရာကို ပိုမိုသေချာနားလည်ရန် လင့်ခ်ကို နှိပ်ပါ။{" "}
        </a>
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
