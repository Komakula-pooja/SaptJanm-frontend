import { useState } from "react";
import { MainAppbar } from "../components/MainAppbar";

const Settings = () => {
    const faqData = [
        {
          question: "What is SaptJanm?",
          answer: "SaptJanm is a full-stack matrimonial platform designed to connect individuals looking for a compatible life partner.",
        },
        {
          question: "How do I create an account?",
          answer: "You can sign up by clicking on the 'Create an Account' button, filling in your email and password, and following the steps to complete your profile.",
        },
        {
          question: "Is my personal information safe?",
          answer: "Yes, we prioritize user privacy and use secure authentication mechanisms like JWT to ensure your data is protected.",
        },
        {
            question: "Can I edit my profile after signing up?",
            answer: "Yes, you can update your profile details anytime by clicking on edit profile in your account."
        },
        {
            question: "Does this platform offer matchmaking suggestions?",
            answer: "Yes, our system provides automated match suggestions based on your profile information."
        },
        {
            question: "What makes SaptJanm unique?",
            answer: "We emphasize cultural values, use a custom-built backend system, and offer a user-friendly interface powered by modern technologies."
        },
        {
            question: "How do I change my password?",
            answer: "click on Help button from dropdown and there you can update your email and password details"
        }
      ];
    
      const [activeIndex, setActiveIndex] = useState<number | null>(null);
    
      const toggleAnswer = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
      };
    
      return (
        <div>
            <MainAppbar />
            <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-6">
                FAQs
            </h1>
            <div className="space-y-4">
                {faqData.map((faq, index) => (
                <div
                    key={index}
                    className="border-b pb-4 transition-all duration-300 ease-in-out"
                >
                    <button
                    onClick={() => toggleAnswer(index)}
                    className="w-full text-left font-semibold text-gray-700 hover:text-red-600 flex justify-between items-center"
                    >
                    <span className="text-sm sm:text-base md:text-lg">
                        {faq.question}
                    </span>
                    <span className="text-sm sm:text-lg">
                        {activeIndex === index ? "−" : "+"}
                    </span>
                    </button>
                    {activeIndex === index && (
                    <p className="mt-2 text-gray-600 text-sm sm:text-base md:text-lg">
                        {faq.answer}
                    </p>
                    )}
                </div>
                ))}
            </div>
            </div>
        </div>
      );
    };

export default Settings


