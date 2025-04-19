import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ChoiceQS = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isComplete, setIsComplete] = useState(false);

  const questions = [
    {
      question: "What's your ideal vacation vibe?",
      options: ["Chill by the water (beach/lake)", "Explore urban culture (cities/museums)"]
    },
    {
      question: "How do you recharge best?",
      options: ["Total relaxation (spa/pool)", "New experiences (tours/activities)"]
    },
    {
      question: "Your travel style?",
      options: ["Planned itinerary", "Go with the flow"]
    },
    {
      question: "Preferred climate?",
      options: ["Warm and sunny", "Cool and comfortable"]
    },
    {
      question: "Most important amenity?",
      options: ["Luxury comforts", "Authentic local charm"]
    },
    {
      question: "Ideal group size?",
      options: ["Just me/my partner", "Friends/family group"]
    },
    {
      question: "Budget priority?",
      options: ["Splurge on special experiences", "Maximize value for money"]
    },
    {
      question: "How adventurous are you?",
      options: ["Try new foods/activities", "Stick to familiar favorites"]
    }
  ];

  const handleAnswer = (answer) => {
    const newAnswers = [...answers, { 
      question: questions[currentQuestion].question, 
      answer 
    }];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsComplete(true);
      console.log("All answers:", newAnswers);
      // Here you would typically send to your backend
    }
  };

  if (isComplete) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-8">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center max-w-md"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Perfect Match!</h2>
          <p className="text-xl text-gray-600 mb-6">
            Based on your answers, we're crafting personalized recommendations.
          </p>
          <div className="bg-amber-50 p-6 rounded-lg mb-8">
            <h3 className="text-2xl font-semibold text-amber-800 mb-3">Your Preferences:</h3>
            <ul className="text-left space-y-2">
              {answers.slice(0, 3).map((answer, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span className="text-gray-700">{answer.answer}</span>
                </li>
              ))}
            </ul>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-amber-500 text-white rounded-lg text-lg font-medium shadow-lg"
            onClick={() => {
              setCurrentQuestion(0);
              setAnswers([]);
              setIsComplete(false);
            }}
          >
            Plan Another Trip
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 md:p-8">
      <motion.div
        key={currentQuestion}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 md:mb-12 text-center px-4">
          {questions[currentQuestion].question}
        </h2>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center px-4">
          {questions[currentQuestion].options.map((option, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleAnswer(option)}
              className={`flex-1 rounded-2xl cursor-pointer text-center flex items-center justify-center
                h-[40vh] md:h-[50vh] min-h-[300px] p-6
                ${index === 0 ? 'bg-amber-100 text-amber-900 hover:bg-amber-200' : 'bg-blue-100 text-blue-900 hover:bg-blue-200'}
                shadow-md hover:shadow-lg transition-all`}
            >
              <motion.p className="text-2xl md:text-3xl font-medium">
                {option}
              </motion.p>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Progress Indicator */}
        <div className="mt-12 flex flex-col items-center">
          <div className="flex justify-center items-center gap-4 mb-2">
            {questions.map((_, index) => (
              <motion.div
                key={index}
                onClick={() => index <= answers.length && setCurrentQuestion(index)}
                className={`relative cursor-pointer transition-all
                  ${index === currentQuestion ? 'w-8 bg-gray-800' : 'w-4 bg-gray-300'} 
                  h-2 rounded-full`}
                whileHover={{ scale: 1.1 }}
              >
                {index < currentQuestion && (
                  <motion.div 
                    className="absolute inset-0 bg-amber-500 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
          <p className="text-gray-500 text-sm">
            Question {currentQuestion + 1} of {questions.length}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ChoiceQS;