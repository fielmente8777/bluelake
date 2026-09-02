import { Metadata } from "next";
import { Container, Section } from "@/components/sectionComponent";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { policiesPageData } from "./guestPolicyData";

const guestPolicyItem =
  policiesPageData.find((p) => p.slug === "in-house-guest-policy") ||
  policiesPageData[0];

export const metadata: Metadata = {
  title: guestPolicyItem.metaData.title,
  description: guestPolicyItem.metaData.description,
};

export default function InHouseGuestPolicyPage() {
  return (
    <main className="min-h-screen bg-[#f8f9f3] font-sans text-navy-deep">

      {/* ================= HEADER ================= */}
      <Header />

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-navy-deep">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)]" />

        <Container>
          <div className="relative flex min-h-[300px] flex-col items-center justify-center px-5 py-16 text-center md:min-h-[340px] md:py-20">

            {/* LABEL */}
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-[28px] bg-gold" />

              <span className="text-[13px] font-bold tracking-[0.18em] text-gold uppercase">
                In-House Guest Policy
              </span>

              <span className="h-px w-[28px] bg-gold" />
            </div>

            {/* TITLE */}
            <h1 className="max-w-[900px] font-display text-[36px] font-medium leading-[1.1] text-white md:text-[52px]">
              {guestPolicyItem.title}
            </h1>

            {/* BRAND */}
            <p className="mt-5 text-[14px] font-semibold tracking-[0.14em] text-white/75 uppercase">
              The Blue Lake, Igatpuri
            </p>

          </div>
        </Container>
      </section>

      {/* ================= CONTENT ================= */}
      <div className="bg-[#f8f9f3] py-[55px] md:py-[75px]">
        <Section>
          <Container>
            <div className="mx-auto max-w-[1050px]">

              {/* CONTENT CARD */}
              <article
                className="
                  rounded-[8px]
                  bg-white
                  px-6
                  py-8
                  shadow-[0_2px_18px_rgba(11,37,69,0.06)]

                  sm:px-9
                  sm:py-10

                  md:px-12
                  md:py-12

                  text-[15px]
                  leading-[1.8]
                  text-[#52657d]

                  [&_h3]:mt-10
                  [&_h3]:mb-4
                  [&_h3]:font-display
                  [&_h3]:text-[25px]
                  [&_h3]:font-medium
                  [&_h3]:leading-[1.3]
                  [&_h3]:text-navy-deep

                  [&_h3:first-child]:mt-0

                  [&_h4]:mt-7
                  [&_h4]:mb-3
                  [&_h4]:font-sans
                  [&_h4]:text-[18px]
                  [&_h4]:font-semibold
                  [&_h4]:text-navy-deep

                  [&_p]:mb-4

                  [&_ul]:mb-5
                  [&_ul]:list-disc
                  [&_ul]:space-y-2
                  [&_ul]:pl-6

                  [&_ol]:mb-5
                  [&_ol]:list-decimal
                  [&_ol]:space-y-2
                  [&_ol]:pl-6

                  [&_li]:pl-1

                  [&_a]:font-medium
                  [&_a]:text-navy-deep
                  [&_a]:underline
                  [&_a]:underline-offset-2
                  [&_a]:decoration-gold
                  [&_a:hover]:text-gold

                  [&_strong]:font-semibold
                  [&_strong]:text-navy-deep

                  md:text-[16px]
                "
                dangerouslySetInnerHTML={{
                  __html: guestPolicyItem.content,
                }}
              />

            </div>
          </Container>
        </Section>
      </div>

      {/* ================= BOTTOM DECORATION ================= */}
      <div className="h-[5px] bg-navy-deep" />

      {/* ================= FOOTER ================= */}
      <Footer />

    </main>
  );
}