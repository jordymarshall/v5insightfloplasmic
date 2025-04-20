"use client"

import React, { useState, useEffect, useRef } from "react"
import { Sparkles } from "lucide-react"

export interface HeroPromptProps {
  className?: string;
}

export default function HeroPrompt({ className = "" }: HeroPromptProps) {
  const [placeholderIndex, setPlaceholderIndex] = useState(0)
  const [isFocused, setIsFocused] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const inputRef = useRef<HTMLTextAreaElement>(null)

  const placeholders = [
    "Design an 8-question survey to assess brand awareness and messaging resonance among millennials who engaged with our social-media ads in the past month to refine our next campaign.",
    "Create a 5-question survey to validate willingness to pay for a new premium feature among freemium subscribers aged 18–30 to inform our pricing strategy.",
    "Develop a 10-question survey to gather feedback on session relevance and speaker quality from attendees of our virtual tech conference to shape next year's program.",
  ]

  useEffect(() => {
    if (!isFocused && !inputValue) {
      const interval = setInterval(() => {
        setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length)
      }, 5000)

      return () => clearInterval(interval)
    }
  }, [isFocused, inputValue, placeholders.length])

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <div className={`flex min-h-screen items-center justify-center bg-gradient-to-b from-white to-gray-50 px-4 py-12 ${className}`}>
      <div className="w-full max-w-4xl space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Surveys Poop{" "}
            <span className="bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
              Interview
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 sm:text-xl">
            AI-driven follow-ups unlock deeper insights from every respondent—at scale.
          </p>
        </div>

        <div className="relative mx-auto mt-10 w-full max-w-3xl">
          <div className="group relative">
            <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-500 opacity-75 blur group-hover:opacity-100 group-hover:duration-200"></div>
            <div className="relative flex items-center rounded-lg bg-white shadow-lg">
              <textarea
                ref={inputRef}
                className="w-full h-36 rounded-lg border-0 bg-white py-4 pl-4 pr-12 text-gray-900 placeholder-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                placeholder={!isFocused ? placeholders[placeholderIndex] : ""}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                value={inputValue}
              />
              <div className="absolute right-3 top-4 text-purple-500">
                <Sparkles className="h-5 w-5 animate-pulse" />
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <button
              className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-cyan-500 p-0.5 font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-purple-200 sm:w-auto"
              onClick={() => {
                // TODO[backend]: Handle survey generation with AI
                console.log("Generating survey with prompt:", inputValue || placeholders[placeholderIndex])
              }}
            >
              <span className="relative w-full rounded-md bg-white px-3 py-2 text-sm sm:px-5 sm:py-2.5 sm:text-base transition-all duration-75 ease-in group-hover:bg-opacity-0">
                Generate Survey
              </span>
            </button>
            <a
              href="#"
              className="text-purple-600 underline decoration-dotted underline-offset-4 hover:text-purple-800"
              onClick={(e) => {
                e.preventDefault()
                // TODO[backend]: Handle blank survey creation
                console.log("Starting blank survey")
              }}
            >
              Or start blank survey
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 