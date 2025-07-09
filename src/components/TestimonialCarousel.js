import { useState, useEffect } from "react";
import t5 from "../../src/assets/images/testominal/testominal5.webp"; // quote icon only
import t1 from "../../src/assets/images/testominal/testominal.webp";
import t2 from "../../src/assets/images/testominal/testominal2.webp";
import t3 from "../../src/assets/images/testominal/testominal3.webp";
import Testimonials3 from "../../src/assets/images/testominal/testominal.webp";
import Testimonials4 from "../../src/assets/images/testominal/testominal2.webp";
import Testimonials5 from "../../src/assets/images/testominal/testominal3.webp";
import Testimonials6 from "../../src/assets/images/testominal/testominal4.webp";



export default function TestimonialCarousel() {
  const testimonialImage = [Testimonials3, Testimonials4, Testimonials5, Testimonials6]

  const testimonials = [
    {
      name: "Cor Merks",
      company: "Ramboll",
      quote: "Very on-topic approach. Excellent networking opportunities.",
    },
    {
      name: "Kelbij star",
      company: "Deltares",
      quote: "I met new parties that were active in this sector.",
    },
    {
      name: "Steve Kaye",
      company: "UKWIR",
      quote: "It was a great showcase of cutting-edge technologies, with chances to network globally.",
    },
    {
      name: "Matthijs Stel",
      company: "Evides",
      quote: "It offered ideas for applying new technologies across the entire water industry value chain.",
    },
    {
      name: "Przemysław Zakościelny",
      company: "vonRoll Infratec (services) AG",
      quote: "It was an excellent opportunity to explore solutions and participate in meaningful discussions.",
    },
    {
      name: "David Hurley",
      company: "AVK UK",
      quote: "It proved fantastic for sharing knowledge and discovering innovative products.",
    },
  ]


  const allowedRow1and3Indexes = [0, 3]; // Testimonials3 & Testimonials6
  const allowedRow2Indexes = [1, 2];     // Testimonials4 & Testimonials5

  const [index13, setIndex13] = useState(0); // For row 1 and 3
  const [row2Left, setRow2Left] = useState(0);
  const [row2Right, setRow2Right] = useState(1);

  useEffect(() => {
    // Row 1 and 3 update every 5s
    const interval13 = setInterval(() => {
      setIndex13(prev => (prev + 1) % allowedRow1and3Indexes.length);
    }, 5000);

    // Row 2 starts after 5s, then updates every 8s
    const timeout2 = setTimeout(() => {
      const updateRow2 = () => {
        let left = Math.floor(Math.random() * allowedRow2Indexes.length);
        let right;
        do {
          right = Math.floor(Math.random() * allowedRow2Indexes.length);
        } while (right === left); // Ensure different images

        setRow2Left(left);
        setRow2Right(right);
      };

      updateRow2(); // Initial update at 5s

      const interval2 = setInterval(updateRow2, 8000); // Every 8s after that

      // Cleanup interval2 only
      const cleanup = () => clearInterval(interval2);
      window.addEventListener("beforeunload", cleanup);
      return cleanup;
    }, 5000);

    // Cleanup both timers
    return () => {
      clearInterval(interval13);
      clearTimeout(timeout2);
    };
  }, []);

  const row1Index = allowedRow1and3Indexes[index13];
  const row3Index = allowedRow1and3Indexes[(index13 + 1) % allowedRow1and3Indexes.length];

  const row1 = testimonials[row1Index];
  const row3 = testimonials[row3Index];
  const row2 = testimonials[allowedRow2Indexes[row2Left]];

  const row1Image = testimonialImage[row1Index];
  const row2ImageLeft = testimonialImage[allowedRow2Indexes[row2Left]];
  const row2ImageRight = testimonialImage[allowedRow2Indexes[row2Right]];
  const row3Image = testimonialImage[row3Index];

  return (
    <section className="networking-section">
      <div className="container">
        <h2 className="text-black text-[30px] font-extrabold my-12 p-0 text-center uppercase">
          they've attended our events
        </h2>

        {/* ROW 1 */}
        <div className="row">
          <div className="col-md-8">
            <img src={row1Image} alt={row1.name} className="w-100 h-100" />
          </div>
          <div className="col-md-4 p-0">
            <div className="testimonial-section w-100 h-100">
              <div className="p-5">
                <div className="testimonial-text">{row1.quote}</div>
                <div className="testimonial-author">{row1.name}</div>
                <div className="testimonial-company">{row1.company}</div>
              </div>
            </div>
          </div>
        </div>

        {/* ROW 2 */}
        <div className="row">
          <div className="col-md-4">
            <img src={row2ImageLeft} alt="Left image" className="w-100 h-100" />
          </div>
          <div className="col-md-4 p-0">
            <div className="testimonial-section w-100 h-100">
              <div className="p-5">
                <div className="testimonial-text">{row2.quote}</div>
                <div className="testimonial-author">{row2.name}</div>
                <div className="testimonial-company">{row2.company}</div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <img src={row2ImageRight} alt="Right image" className="w-100 h-100" />
          </div>
        </div>


        {/* ROW 3 */}
        <div className="row">
          <div className="col-md-4 p-0">
            <div className="testimonial-section w-100 h-100">
              <div className="p-5">
                <div className="testimonial-text">{row3.quote}</div>
                <div className="testimonial-author">{row3.name}</div>
                <div className="testimonial-company">{row3.company}</div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <img src={row3Image} alt={row3.name} className="w-100 h-100" />
          </div>
        </div>
      </div>
    </section>
  );
}
