import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import CurvedUnderline from "./curved-underline";
import TitleLayout from "./layouts/title-layout";
import SvgDivider from "./svg-divider";

export default function FrequentlyAskedQuestions() {
  const faqData = [
    {
      question: "كيف يمكنني الانضمام إلى المكتب المسير للنادي؟",
      answer: `يتم فتح أبواب الترشيح كل سنة أمام الراغبين في تولي مهام تسيير النادي.`,
    },
    {
      question: "هل في النادي مضيعة وقت؟",
      answer: `لا يطلب النادي من أعضائه القيام بأي شيء، ولا يكلفهم أي مهام، فكل شيء يقوم به أعضاء المكتب المسير ولجانه.`,
    },
    {
      question: "كيف نتواصل مع لجنة الإناث؟",
      answer: `يتم التواصل مع  لجنة الإناث لنادي بصائر عبر البريد الإلكتروني الخاص بهن، أو إحدى صفحاتهن الرسمية.`,
    },
    {
      question: "هل النادي مكلف بالاعتناء بمصلى المؤسسة؟",
      answer: `نعم، يخصص النادي لجنة مسجد مكلفة بتنظيفه، والحرص على تزويده بكل ما يحتاجه من المصاحف والكتب.. وإلصاق الملصقات والإعلانات...`,
    },
  ];

  return (
    <section className="relative w-full bg-gradient-to-br from-primary to-black overflow-hidden">
      <SvgDivider position="top" />
      <div className="container py-48">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <TitleLayout title="الأسئلة الشائعة" textColor="text-white" />
          <p className="text-muted-foreground text-white">
            نجيبكم على مجموعة من الأسئلة التي يطرحا كثير من الطلبة المهندسين
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-3xl space-y-4 text-white">
          <Accordion type="single" collapsible className="space-y-2">
            {faqData.map((item, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`} className="border rounded-xl bg-white/30 backdrop-blur-sm p-2">
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>
                  <p>{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <SvgDivider position="bottom" />
    </section>
  );
}
