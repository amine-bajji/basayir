import React from 'react';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"

// Your Rules Data (Make sure to fetch this dynamically if needed)
const rulesData = [
  {
    title: "🤝 المادة 1: المبادئ",
    content: "يجب على أعضاء النادي ألا يكونوا منتسبين إلى أي حزب أو جماعة سياسية. يجب أن يظل النادي محايدًا ويتجنب أي صراع أو خلاف سياسي للحفاظ على هدفه الرئيسي، وهو بعيد عن الشؤون السياسية."
  },
  {
    title: "🤝 المادة 2: تجنب الانتماءات الحزبية",
    content: "يجب على أعضاء النادي تجنب الانتماء إلى أي جماعة أو فئة إسلامية محددة. يجب أن يبقوا بشكل أساسي على طريق الاعتدال والوسطية، وأن يحترموا المذاهب المعترف بها في بلدنا. يجب ترك القضايا العلمية والاختلافات في الرأي للعلماء والخبراء في هذا المجال، وذلك للحفاظ على الوحدة والانسجام داخل النادي."
  },
  {
    title: "🤝 المادة 3: سلوك الأعضاء",
    content: "يجب على كل شخص يرغب في الانضمام إلى النادي أن يثبت حسن السيرة والسلوك واحترام جميع الأعضاء والطلاب والطاقم التعليمي. يجب أن تكون المجاملة والاحترام قيم أساسية في جميع التفاعلات داخل النادي."
  },
  {
    title: "🤝 المادة 4: تشكيل النادي",
    content: "يتكون النادي من:\n\n* **المكتب التنفيذي:** ويتكون من الأعضاء المسؤولين عن إدارة وتنظيم النادي. يشرف المكتب التنفيذي على الأنشطة ويتخذ القرارات الهامة للنادي.\n* **أعضاء النادي:** وهم الأفراد الذين يتمتعون بعضوية رسمية في النادي. يتم تجميعهم في خليتين رئيسيتين حسب جنسهم:\n    * **خلية البنات:** وتتكون من العضوات في النادي.\n    * **خلية الشباب:** وتتكون من الأعضاء الذكور في النادي."
  },
  {
    title: "🤝 المادة 5: تعديل النظام الداخلي",
    content: "يجب أن يتم اتخاذ أي تغيير أو تحديث في النظام الداخلي للنادي من قبل المكتب التنفيذي، بالتشاور مع المشرف والمؤسسين الفائزين. يجب تبرير التعديلات وإبلاغ هؤلاء القدامى بها."
  },
  {
    title: "🤝 المادة 6: أنشطة النادي",
    content: "يجب الموافقة على جميع أنشطة النادي من قبل المشرف وأن تكون متوافقة مع أهداف النادي."
  },
  {
    title: "🤝 المادة 7: معايير المتدخلين",
    content: "يجب على أي ضيف أو متدخل أن يسير بشكل أساسي على طريق الاعتدال والوسطية، متجنبًا المواضيع المثيرة للجدل أو التحريض على الفرقة. يجب أن يكون المتدخلون أشخاصًا ذوي معرفة واسعة، وأخلاق حميدة، وخطاب محترم ومشرف، يهدف إلى مناقشة الموضوعات ذات الصلة والمفيدة للطلاب فقط."
  },
  {
    title: "🤝 المادة 8: إدارة الشؤون المالية",
    content: "يجب إدارة الشؤون المالية للنادي بشفافية ومسؤولية. سيتم استخدام الأموال حصريًا لأنشطة النادي وللضروريات المتعلقة بصيانة مكان الصلاة ولمبادرات الخيرية. المكتب التنفيذي هو المسؤول عن إدارة الشؤون المالية للنادي ومتابعتها."
  },
];

export default function Component() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="space-y-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            🎯  قوانين النظام الداخلي  🎯 
            </h1>
            <p className="mt-4 text-muted-foreground">
              مقدمة عن النظام الداخلي لنادي بصائر:

              يهدف هذا النظام الداخلي إلى تنظيم عمل نادي بصائر وضمان بيئة إيجابية ومثمرة لجميع الأعضاء. نؤكد على أهمية الالتزام بمبادئ الحيادية، والاعتدال، والوسطية، والتعاون البنّاء بين جميع الأعضاء.

              يتناول النظام الداخلي بنوداً أساسية مثل سلوك الأعضاء، وتشكيل النادي، وإدارة موارده، بهدف ضمان الشفافية، والمساءلة، وتحقيق أهداف النادي على أكمل وجه.

              ندعو جميع الأعضاء إلى التعرف على بنود هذا النظام والتعاون على تطبيقه بما يحقق مصلحة نادي بصائر ويضمن تقدمه وازدهاره.
            </p>
          </div>

          {/* Dynamic Collapsible Components */}
          {rulesData.map((rule, index) => (
            <Collapsible key={index} className="rounded-lg border bg-card p-6 shadow-sm">
              <CollapsibleTrigger className="flex w-full items-center justify-between">
                <h2 className="text-xl font-semibold">{rule.title}</h2>
                <ChevronRightIcon className="h-5 w-5 transition-all [&[data-state=open]]:rotate-90" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <p className="mt-4 text-muted-foreground">
                  {rule.content}
                </p>
              </CollapsibleContent>
            </Collapsible>
          ))}

          <div className="flex justify-center">
            
          </div>
        </div>
      </div>
    </div>
  )
}

function ChevronRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}