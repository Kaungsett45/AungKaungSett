import React from 'react'

import { Link } from 'react-router-dom'
import jsimg from '../../../public/reactvirtual.svg'
import arrow from '../../../public/arrow.svg'

export default function B1() {
  return (
    <div>
       
        <img src={jsimg} alt="virtual-dom"  loading="lazy" className='my-2 w-full rounded-lg px-4' />
    <div className='leading-relaxed text-left'>
        <p className='px-4'> Web app တွေ complex ဖြစ်လာလေ manage လုပ်ကတာ challenge တစ်ခုလိုဖြစ်လာပါတယ်။</p>
        <p className='px-4 my-2'>  ပိုefficient ဖြစ်အောင် manage ဖို့ အတွက် REACTမှာဆိုရင် <span className='font-bold text-[#FF6F61]'>Virtual DOM</span>ဆိုတဲ့ Javascript Library ကိုသုံးကြပါတယ်။
        </p>
        
            <p className='px-4'>ကျွန်တော်တို့အသုံးပြုတဲ့<span className='font-bold text-[#FF6F61]'>Virtual DOM</span>က တကယ့် Real DOMရဲ့ Memory Representation တစ်ခုပဲဖြစ်ပါတယ်။
            Step by Step ပြောရမယ်ဆိုရင်
            </p>
        <p className='px-4 my-2'> App ကို  run လိုက်တဲ့ အချိန်မှာ UI တစ်ခုလုံး  က <span className='font-bold text-[#FF6F61]'>Virtual DOM</span> အနေနဲ့ ဖြစ်သွားတယ်။ အကယ်၍ ကျွန်တော်တို့ state တွေ props changeသွားရင် React က re-render ပြန်လုပ်ပါတယ်။ Real DOM မှာတေ့ာ UPDATE တန်းမဖြစ်ပါဘူး ။  React က diffing algorithmကိုအသုံးပြုပြီး <span className='font-bold text-[#FF6F61]'>Virtual DOM</span> နဲ့ Real DOM difference ကို ရှာပြီးတော့ update လုပ်ပါတယ်။ UI တစ်ခုလုံးကို re-render ချမဲ့အစား difference ဖြစ်တာကို လုပ်တာမလို့  performance တွေကပိုမိုကောင်းမွန်ပြီးတေ့ာ မြန်ဆန်လာပါတယ်။ </p>
  
        </div>

        <Link to="/blogs" className='flex justify-center mx-2 my-3'><img src={arrow} alt="back"  className='bg-[#1A8B9C] px-4 py-1  rounded-full font-mari'/></Link>
         
    </div>
  )
}
