import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { SectionWithContainer } from "@/components/sectionComponants";
import Events from "./components/Events";
import Form from "./components/form";
import WeOffer from "./components/Weoffer";


const EventsData = {
  title: "Where Every Gathering Becomes a Celebration",
  subtitle:
    "From corporate meetings and team off-sites to intimate weddings and grand celebrations, The Blue Lake offers a versatile setting for every occasion. Surrounded by a refreshing resort atmosphere, our thoughtfully designed spaces provide the perfect backdrop for conferences, retreats, destination weddings, and social gatherings. ",
  link: {
    label: "Get in touch",
    href: "/contact",
  },
  image: {
    src: "/celebration/bluelake image 3.jpg.jpeg",
    alt: "Celebration at The Blue Lake",
  },
  description:
  "Whether you’re planning a productive business event or a memorable celebration, every detail is crafted to make your occasion truly special. Bring people together, create meaningful connections, and celebrate life’s most cherished moments at The Blue Lake.",
};

export const metadata: Metadata = {
  title: "MICE & Celebrations | The Blue Lake, Igatpuri",
  description:
    "Celebrate weddings, special occasions, corporate events and MICE experiences at The Blue Lake, Igatpuri.",
};

export default function CelebrationsPage() {
  return (
    <main className="font-sans text-navy-deep">
      <Header />
      <Hero
                photoSrc="/celebration/bluelake image 1.jpg.jpeg"
                alt="The Blue Lake Celebrations"
                title= "MICE & Celebrations"
                tagline=""
                subtitle=""
                align="center"
                showBookingBar={false}
              />

      
    

      <SectionWithContainer
        sectionClassName="py-[55px] md:py-[75px]"
        containerClassName="max-w-[1250px]"
        defaultPadding={false}
      >
        <div className="px-5 md:px-6">
          <Events {...EventsData} />
        </div>
      </SectionWithContainer>

      <SectionWithContainer
        sectionClassName="bg-white py-[55px] md:py-[85px]"
        containerClassName="max-w-[1250px]"
        defaultPadding={false}
      >
        <div className="px-5 md:px-6">
          <WeOffer />
        </div>
      </SectionWithContainer>

      <SectionWithContainer
        sectionClassName="bg-white py-[55px] md:py-[80px]"
        containerClassName="max-w-[1100px]"
        defaultPadding={false}
      >
        <div className="px-5 md:px-6">
          <Form />
        </div>
      </SectionWithContainer>

    

      <Footer />
    </main>
  );
}