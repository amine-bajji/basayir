"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import CurvedUnderline from "./curved-underline";
import TitleLayout from "./layouts/title-layout";

export default function AboutUs() {
  return (
    <>
      <div className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col items-start space-y-4 px-4">
              <TitleLayout title="من نحن" />

              <p className="md:max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                نادي بصائر هو نادي ديني بالمدرسة الوطنية للعلوم التطبيقية
                بطنجة، هدفه تنظيم الأنشطة الدينية والدعوية، لترسيخ القيم
                الإسلامية عند الطلبة المهندسين، وتوعيتهم بما لا يسعهم جهله من
                دينهم.
              </p>
            </div>
            <Image
              src="/basair-green.png"
              width="600"
              height="800"
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
            />
          </div>
        </div>
      </div>
    </>
  );
}
