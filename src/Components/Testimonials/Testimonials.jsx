import React from "react";
import "./Testimonials.css";
import AVATAR1 from "../../Assets/avatar1.png";
import AVATAR2 from "../../Assets/avatar2.png";
import AVATAR3 from "../../Assets/avatar3.png";
import AVATAR4 from "../../Assets/avatar4.png";

//import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

//import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const data = [
  {
    avatar: AVATAR1,
    name: "Blessed Stitches fashion Empire",
    review:
      "Working with John was a game-changer for our tech startup. As a Full-Stack Website Developer, his expertise in React.js, Node.js, JavaScript, CSS, and HTML transformed our vision for a user-friendly SaaS platform into reality. From the initial consultation, John demonstrated a deep understanding of our needs, proposing a scalable architecture that balanced performance and aesthetics. He developed a sleek, responsive front-end using React.js, ensuring seamless navigation and a modern user interface that delighted our early adopters. On the back-end, their Node.js expertise enabled robust API integrations and efficient data handling, which significantly improved our platform’s performance.What set John apart was his ability to communicate complex technical concepts in a way that aligned with our business goals. He implemented custom features, such as real-time data updates and secure user authentication, while optimizing the site for SEO and speed. His attention to detail in crafting pixel-perfect designs with CSS and HTML ensured our platform stood out in a competitive market. Throughout the project, John adhered to Agile methodologies, providing regular updates and incorporating our feedback seamlessly. He also offered post-launch support, quickly resolving minor bugs and ensuring our site ran smoothly.Beyond his technical prowess, John’s professionalism and commitment to deadlines were remarkable. He delivered our project ahead of schedule without compromising quality, which allowed us to launch our product early and gain a competitive edge. His ability to balance creativity and functionality made him an invaluable partner. We’ve since engaged John for ongoing maintenance and feature enhancements, and his consistent excellence continues to impress. For anyone seeking a reliable, skilled, and innovative Full-Stack Developer, John is the go-to professional. ",
  },

  {
    avatar: AVATAR2,
    name: "Mountain View Hotels",
    review:
      John’s work as a Professional Carpenter and Furniture Designer transformed our boutique hotel into a stunning, inviting space. We hired John to design and craft custom furniture and architectural woodwork for our lobby and guest suites, and the results exceeded our expectations. his ability to blend functionality with artistry is unparalleled. From elegant walnut dining tables to bespoke oak bedframes, every piece was meticulously crafted to reflect our brand’s modern yet timeless aesthetic. John and his team took the time to understand our vision, offering creative suggestions that enhanced our initial concepts. They provided detailed sketches and 3D renderings, allowing us to visualize the designs before fabrication began. Their expertise in sustainable materials, such as reclaimed wood, aligned perfectly with our eco-conscious ethos, and the quality of their craftsmanship was evident in every detail—from flawless joinery to perfectly polished finishes. They also installed custom moldings and built-in shelving that seamlessly integrated with our interior design, elevating the guest experience.Throughout the project, he demonstrated professionalism and precision. They managed timelines effectively, coordinating with our interior designer and contractors to ensure a smooth installation process. Their attention to detail and commitment to quality were evident in the durability and beauty of the final pieces. Guests frequently comment on the unique furniture, and we’ve seen a noticeable increase in positive reviews since the renovation. [Your Name] also provided maintenance guidance to ensure our furniture remains pristine. Their passion for carpentry and design, combined with their reliability, makes them an exceptional choice for any custom woodworking project. ",
  },

  {
    avatar: AVATAR3,
    name: "Chris Desmond",
    review:
      As the founder of an e-commerce platform, I needed a Full-Stack Developer who could deliver a robust, user-friendly website to showcase our products. John delivered beyond my expectations. his mastery of Web development allowed him to create a visually stunning and highly functional online store. The front-end, built with React.js, offered seamless navigation and dynamic product displays, while their Node.js expertise ensured fast, secure transactions and smooth integration with our payment gateway and inventory system.john and his team took a collaborative approach, working closely with my team to understand our brand and customer needs. They implemented advanced features like personalized product recommendations and a responsive design that worked flawlessly across devices. Their CSS and HTML skills ensured a polished, professional look that aligned with our brand identity. They also optimized the site for SEO, resulting in a significant increase in organic traffic within weeks of launch. John’s attention to security was impressive, implementing measures to protect customer data and prevent vulnerabilities.Their project management skills were exceptional, delivering the site on time and within budget. They provided clear documentation and training, empowering my team to manage content updates independently. Post-launch, John offered ongoing support, quickly addressing minor tweaks and ensuring optimal performance. Their ability to combine technical expertise with a client-focused approach made the process seamless and stress-free. I wholeheartedly recommend [Your Name] to anyone seeking a top-tier Full-Stack Developer for their web project. ",
  },

  {
    avatar: AVATAR4,
    name: "Udotor Esther Enele",
    review:
      "When we decided to renovate our home, we turned to [Your Name] for custom carpentry and furniture design, and the results were nothing short of spectacular. As a Professional Carpenter and Furniture Designer, [Your Name] brought creativity and precision to every aspect of the project. They designed and crafted a stunning custom kitchen island, built-in bookshelves, and a set of handcrafted dining chairs that have become the centerpiece of our home.From our first meeting, [Your Name] listened attentively to our needs, offering innovative ideas to maximize space and enhance aesthetics. They used high-quality cherry wood and incorporated sustainable practices, which aligned with our values. Their craftsmanship was impeccable, with flawless joints and finishes that showcased their expertise. They also installed intricate crown molding and a custom staircase railing that added elegance to our home. Every piece was tailored to our style, blending modern and rustic elements seamlessly.[Your Name]’s professionalism was evident throughout the process. They provided a clear timeline, kept us updated, and completed the project on schedule. Their ability to work alongside our contractor ensured a cohesive renovation process. The final pieces are not only beautiful but also built to last, reflecting [Your Name]’s commitment to quality. They even offered tips on maintaining the woodwork to ensure its longevity. Our home now feels uniquely ours, thanks to [Your Name]’s exceptional talent and dedication. I highly recommend them for any custom carpentry or furniture design project. ",
  },

{
    avatar: AVATAR5,
    name: "EdTech Founder",
    review:
      Your Name] was instrumental in launching our EdTech platform, delivering a Full-Stack web solution that has transformed how we deliver educational content. Their expertise in React.js, Node.js, CSS, JavaScript, and HTML enabled them to build a dynamic, user-friendly platform that supports interactive learning and seamless user experiences. The front-end, powered by React.js, is intuitive and engaging, while their Node.js back-end ensures robust performance and scalability for thousands of users.[Your Name] took the time to understand our mission and audience, designing features like real-time quizzes, progress tracking, and secure user dashboards. Their CSS and HTML skills created a visually appealing interface that aligned with our branding and was accessible across devices. They also integrated third-party tools, such as video streaming and payment systems, with flawless execution. Their focus on performance optimization and SEO helped us attract a wider audience, significantly boosting user sign-ups.Throughout the project, [Your Name] demonstrated professionalism and technical excellence. They adhered to deadlines, provided regular updates, and incorporated our feedback seamlessly. Their post-launch support has been invaluable, ensuring our platform remains reliable and up-to-date. [Your Name]’s ability to balance creativity, functionality, and technical precision makes them an outstanding Full-Stack Developer. We look forward to working with them on future enhancements a ",
  },

{
    avatar: AVATAR6,
    name: "Mrs Mary of Mary's exclusive Restaurant",
    review:
      Your Name]’s work as a Professional Carpenter and Furniture Designer elevated our restaurant’s ambiance to a whole new level. We hired [Your Name] to design and craft custom furniture and woodwork for our dining area, and their craftsmanship exceeded our expectations. They created a stunning set of oak dining tables, bar counters, and custom shelving that perfectly captured our rustic-modern aesthetic.From the outset, [Your Name] demonstrated a keen understanding of our vision. They provided detailed design proposals and used high-quality, sustainable materials to create durable, visually striking pieces. Their attention to detail was remarkable—every joint, finish, and curve was executed with precision. They also installed custom paneling and trim work that added warmth and character to the space. Their ability to blend functionality with artistry ensured our furniture was both practical for daily use and a conversation starter for guests.[Your Name] managed the project with professionalism, coordinating seamlessly with our interior designer and completing the work on schedule. They were responsive to our feedback and made adjustments to ensure the final result aligned with our vision. The durability of their work has stood up to the demands of a busy restaurant, and we’ve received countless compliments from customers. [Your Name] also provided guidance on maintaining the woodwork, ensuring it remains pristine. For anyone seeking exceptional carpentry and furniture design, [Your Name] is the ideal choice.",
},

{
    avatar: AVATAR7,
    name: "Non profit Director",
    review:
      Your Name] delivered an exceptional website for our non-profit organization, showcasing their expertise as a Full-Stack Website Developer. Their proficiency in React.js, Node.js, CSS, JavaScript, and HTML enabled them to create a dynamic, accessible platform that effectively communicates our mission and engages our community. The front-end, built with React.js, is visually appealing and user-friendly, while their Node.js back-end ensures secure donation processing and reliable performance.[Your Name] took the time to understand our goals, designing a site that was both functional and emotionally resonant. They implemented features like event calendars, volunteer sign-up forms, and a blog, all seamlessly integrated with our branding. Their CSS and HTML expertise ensured a responsive design that works beautifully on mobile and desktop devices. They also optimized the site for SEO, significantly increasing our visibility and donor engagement.Their professionalism and collaborative approach made the project a success. [Your Name] adhered to our tight timeline, provided clear updates, and offered training to help our team manage the site independently. Their post-launch support has been outstanding, quickly addressing any issues and suggesting improvements. [Your Name]’s ability to combine technical skill with a passion for our cause made them a pleasure to work with. I wholeheartedly recommend [Your Name] to any organization seeking a skilled and reliable Full-Stack Developer.",
},

{
    avatar: AVATAR8,
    name: "Voyage",
    review:
      As an interior designer, I’ve worked with many carpenters, but [Your Name] stands out as a truly exceptional Professional Carpenter and Furniture Designer. Their ability to bring my design concepts to life through custom furniture and woodwork is unparalleled. For a recent high-end residential project, [Your Name] crafted a stunning set of built-in cabinets, a custom coffee table, and intricate wall paneling that transformed the space into a work of art.[Your Name]’s collaborative approach was a highlight of the project. They took the time to understand my design vision, offering creative suggestions that enhanced the functionality and aesthetic of each piece. Their craftsmanship, using premium walnut and maple, was flawless, with meticulous attention to joinery and finishes. They also incorporated sustainable materials, aligning with the client’s eco-conscious preferences. The result was a cohesive, luxurious space that left the client thrilled.Their professionalism and project management skills ensured a smooth process. [Your Name] adhered to timelines, communicated clearly, and worked seamlessly with my team to meet the client’s expectations. Their ability to balance artistry with practicality is rare, and the durability of their work ensures it will stand the test of time. They also provided maintenance advice to keep the pieces looking pristine. [Your Name] is my go-to carpenter for future projects, and I highly recommend them to anyone seeking top-tier carpentry and furniture design.",
},

{
    avatar: AVATAR9,
    name: "Fitness home",
    review:
      Your Name]’s expertise as a Full-Stack Website Developer was critical to the success of our fitness brand’s online platform. Their mastery of React.js, Node.js, CSS, JavaScript, and HTML enabled them to create a dynamic, user-centric website that perfectly showcased our services and products. The React.js front-end is engaging and responsive, while their Node.js back-end supports seamless e-commerce functionality and user account management.[Your Name] understood our brand’s energetic vibe and translated it into a visually stunning, intuitive interface. They implemented features like class scheduling, subscription plans, and integration with our fitness tracking app, all executed with precision. Their CSS and HTML skills ensured a polished, mobile-friendly design that resonates with our audience. They also optimized the site for speed and SEO, driving a significant increase in traffic and conversions.Their professionalism and attention to detail were outstanding. [Your Name] delivered the project on time, provided regular updates, and incorporated our feedback seamlessly. Their post-launch support has been invaluable, ensuring our site remains reliable and up-to-date. [Your Name]’s ability to combine technical expertise with a client-focused approach made them a pleasure to work with. I highly recommend [Your Name] to anyone seeking a skilled Full-Stack Developer to elevate their online presence.",
},

{
    avatar: AVATAR10,
    name: "Luxury Retail Company",
    review:
      Your Name]’s work as a Professional Carpenter and Furniture Designer transformed our luxury retail store into a sophisticated, inviting space. We hired [Your Name] to design and craft custom display units, shelving, and a centerpiece counter, and their craftsmanship was nothing short of extraordinary. Each piece was meticulously designed to reflect our brand’s high-end aesthetic, blending elegance with functionality.[Your Name] took a collaborative approach, working closely with our design team to refine concepts and select premium materials like mahogany and reclaimed oak. Their attention to detail was evident in the flawless joinery, polished finishes, and thoughtful design elements that made our store stand out. They also installed custom wood paneling that added warmth and luxury to the space. Every piece was tailored to enhance the customer experience while ensuring durability for heavy retail use.Their professionalism and project management skills were impeccable. [Your Name] adhered to our tight timeline, coordinated seamlessly with our contractors, and delivered the project on schedule. The result has been a stunning retail environment that has received rave reviews from customers and increased foot traffic. They also provided guidance on maintaining the woodwork, ensuring it remains pristine. [Your Name]’s passion for craftsmanship and commitment to excellence make them an exceptional choice for any custom carpentry or furniture design project.",
},
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Clients Reviews</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="avatar" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
export default Testimonials;
