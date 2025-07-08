import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import SubscribeForm from "./SubscribeForm";
import Footer from "../Footer";

const Faq = () => {
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const faqData = [
    {
      id: 1,
      question: "What Does the Registration Fee Cover?",
      answer:
        "Your registration fee includes full access to the conference on all days. It covers meals (including refreshment breaks and lunch), beverages, and, if applicable, access to the Networking Drinks Reception. For further details, refer to our full Terms and Conditions.",
    },
    {
      id: 2,
      question: "What Costs Are Excluded from the Registration Fee?",
      answer:
        "Accommodation, transportation, and personal expenses are not included in the registration fee.",
    },
    {
      id: 3,
      question: "How Will I Receive My Registration Confirmation?",
      answer:
        "You will receive a confirmation email within 24-48 hours after successful registration.",
    },
    {
      id: 4,
      question: "Can I Request a Receipt?",
      answer:
        "Yes, receipts are automatically generated and sent via email after payment confirmation.",
    },
    {
      id: 5,
      question: "How Do I Pay the Registration Fee by Credit Card?",
      answer:
        "Credit card payments can be made through our secure online payment portal during registration.",
    },
    {
      id: 6,
      question: "Requesting an Invitation Letter for Visa Applications",
      answer:
        "Invitation letters can be requested through your registration portal or by contacting our support team.",
    },
    {
      id: 7,
      question: "What if I Need to Cancel or Replace a Delegate?",
      answer:
        "Cancellations and delegate replacements are subject to our terms and conditions. Please contact support for assistance.",
    },
    {
      id: 8,
      question: "Conference Hotel Fully Booked",
      answer:
        "Alternative accommodation options will be provided if the conference hotel reaches capacity.",
    },
    {
      id: 9,
      question: "Amending Badge Details",
      answer:
        "Badge details can be amended up to 48 hours before the event through your registration portal.",
    },
    {
      id: 10,
      question: "Access to Conference Papers After the Event",
      answer:
        "Conference papers will be available for download 30 days after the event conclusion.",
    },
    {
      id: 11,
      question: "Dress Code for the Event",
      answer:
        "Business casual attire is recommended for all conference sessions and networking events.",
    },
    {
      id: 12,
      question: "Networking Opportunities at the Event",
      answer:
        "Multiple networking sessions, coffee breaks, and evening receptions are scheduled throughout the conference.",
    },
    {
      id: 13,
      question: "Staying Updated with the Conference Schedule",
      answer:
        "Schedule updates will be sent via email and available through the conference mobile app.",
    },
    {
      id: 14,
      question: "Dietary Restrictions and Special Food Requests",
      answer:
        "Please specify dietary requirements during registration or contact our support team.",
    },
    {
      id: 15,
      question: "Wi-Fi at the Event",
      answer:
        "Complimentary Wi-Fi will be available throughout the conference venue.",
    },
    {
      id: 16,
      question: "Information on Parking and Transportation at the Venue",
      answer:
        "Parking information and transportation options will be provided in your pre-event communication.",
    },
    {
      id: 17,
      question: "Exploring Sponsorship and Exhibition Opportunities",
      answer:
        "Sponsorship packages and exhibition opportunities are available. Contact our partnerships team for details.",
    },
    {
      id: 18,
      question: "Further Queries and Contact Information",
      answer:
        "For additional support, please contact our dedicated support team via email or phone.",
    },
  ];

  const toggleQuestion = (questionId) => {
    setExpandedQuestion(expandedQuestion === questionId ? null : questionId);
  };

  return (
    <>
      <Navbar forceScrolled />
      <div className="pt-[160px] pb-[110px] bg-[#f8f9fa] min-h-screen font-sans">
        <div className="container mx-auto px-4 max-w-2xl">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-wide text-[#333] mb-10">
              Knowledge Base
            </h1>
            <p
              style={{
                fontSize: "16px",
                fontWeight: "600",
                color: "#666",
                lineHeight: "1.6",
                marginBottom: "10px",
                textAlign: "center"
              }}
            >
              Explore this section for answers to common questions about our
              events. If you have any additional questions or require further
              assistance, our dedicated delegate services team is always here to
              help. Feel free to reach out to us at{" "}
              <a
                href="mailto:delegates@iq-hub.com"
                className="text-[#080808] underline"
              >
                delegates@iq-hub.com
              </a>{" "}
              for support.
            </p>
          </div>

          {/* FAQ Box */}
          <div className="bg-[#080808] rounded overflow-hidden align-center">
            <div className="bg-[#080808] px-6 py-4 border-b border-[#1a252f]">
              <h2 className="text-white text-lg font-bold" style={{fontSize: "27px", fontWeight: "700px",padding: "0px 35px", textAlign: "start", width: "100%"}}>
                FAQ ({faqData.length})
              </h2>
            </div>

            <div className="py-8">
              {faqData.map((faq, index) => (
                <div key={faq.id}>
                  <div
                    onClick={() => toggleQuestion(faq.id)}
                    className={`cursor-pointer`} style={{padding: "20px 50px", fontWeight: "700px", textAlign: "start", width: "100%"}}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-white text-sm sm:text-base font-medium" style={{fontSize: "20px",}}>
                        Q{faq.id}. {faq.question}
                      </span>
                      <span
                        className={`text-white text-xl transform transition-transform duration-300 ${
                          expandedQuestion === faq.id ? "rotate-45" : "rotate-0"
                        }`}
                      ></span>
                    </div>
                  </div>
                  {expandedQuestion === faq.id && (
                    <div className="pb-4 pt-2 mx-12 border-t border-[#1a252f]">
                      <p className="text-[#ffffff] text-sm sm:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <SubscribeForm />
      <Footer />
    </>
  );
};
export default Faq;
