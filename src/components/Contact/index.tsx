"use client";

import React, { useState } from 'react';
import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  
  return (
    <section id="contact" className="py-30">
      <div className="container px-5 py-30 mx-auto">
        <div className="flex flex-wrap m-4">
          <div id="features" className="mx-auto max-w-6xl">
            <ul className="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3 ">
              <li className="rounded-xl bg-white px-6 py-8 shadow-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark">
                <img src="/images/about/home-1-svgrepo-com.svg" alt="" className="mx-auto h-10 w-10" />
                <h3 className="my-3 font-display font-medium text-black dark:text-white">ที่ตั้งบริษัท</h3>
                <a className="mt-1.5 text-sm leading-6 text-secondary-500 text-black dark:text-white" href='https://www.google.com/maps/place/%E0%B9%84%E0%B8%9A%E0%B8%A3%E0%B9%8C%E0%B8%97+%E0%B8%9E%E0%B8%A3%E0%B8%B5%E0%B9%81%E0%B8%84%E0%B8%AA%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C+%E0%B8%88%E0%B8%B3%E0%B8%81%E0%B8%B1%E0%B8%94+(+Precast+Concrete+Factory+)/@13.965552,100.378698,18z/data=!4m14!1m7!3m6!1s0x30e289311d5242e9:0xdddff78eefc975c9!2z4LmE4Lia4Lij4LmM4LiXIOC4nuC4o-C4teC5geC4hOC4quC5gOC4leC4reC4o-C5jCDguIjguLPguIHguLHguJQgKCBQcmVjYXN0IENvbmNyZXRlIEZhY3RvcnkgKQ!8m2!3d13.9655516!4d100.3786984!16s%2Fg%2F1jgltzd1q!3m5!1s0x30e289311d5242e9:0xdddff78eefc975c9!8m2!3d13.9655516!4d100.3786984!16s%2Fg%2F1jgltzd1q?hl=th&entry=ttu'>
                  จันทร์ ถึง ศุกร์ 09.00 ถึง 18.00<br></br>
                  บางบัวทอง, นนทบุรี 10/10 หมู่10 รหัสไปรษณีย์ 11110
                </a>
              </li>
              <li className="rounded-xl bg-white px-6 py-8 shadow-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark">
                <img src="/images/about/mail-alt-svgrepo-com.svg" alt="" className="mx-auto h-10 w-10" />
                <h3 className="my-3 font-display font-medium text-black dark:text-white">E-mail</h3>
                <a className="mt-1.5 text-sm leading-6 text-secondary-500 text-black dark:text-white" href='mailto:Bright_marketing@brightprecaster.com'>
                  Bright_marketing@brightprecaster.com
                </a>
              </li>
              <li className="rounded-xl bg-white px-6 py-8 shadow-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark">
                <img src="/images/about/call-medicine-svgrepo-com.svg" alt="" className="mx-auto h-10 w-10" />
                <h3 className="my-3 font-display font-medium  text-black dark:text-white">ติดต่อ</h3>
                <a className="mt-1.5 text-sm leading-6 text-secondary-500 text-black dark:text-white" href='tel:021507100101'>
                  02-1507100-101
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                ติดต่อเพิ่มเติม
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                สอบถามข้อมูลรายละเอียด
              </p>
              <form >
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        placeholder='Your Name'
                        
                        id='name'
                        type="text"
                        required
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-red dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-red dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
                        placeholder='example@gmail.com'
                        
                        id="email"
                        type="email"
                        required
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-red dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-red dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="description"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        placeholder='Comments'
                        
                        id="description"
                        required
                        rows={5}
                        className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-red dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-red dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button className="rounded-sm bg-red px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-red/90 dark:shadow-submit-dark">
                      Submit 
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
